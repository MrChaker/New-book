import gleam/dict.{type Dict}
import gleam/list
import gleam/option.{type Option, None, Some}
import gleam/result
import blamedlines
import vxml.{type VXML, V, T}
import gleam/string
import infrastructure as infra


pub type ExportedByFile {
  ExportedByFile(default: Option(String), other: List(String))
}

pub type ImportedFromFile {
  ImportedFromFile(default: Option(String), other: List(String))
}

pub fn lbp_exports_dictionary() -> Dict(String, ExportedByFile) {
  dict.from_list([
    #("Article", ExportedByFile(Some("Article"), [])),
    #("ArticleTitle", ExportedByFile(Some("ArticleTitle"), [])),
    #("Delimiters", ExportedByFile(None, ["CentralDisplay", "CentralDisplayItalic"])),
    #("Exercises", ExportedByFile(None, ["Exercises", "Exercise", "ExerciseStatement"])),
    #("Grid", ExportedByFile(Some("Grid"), [])),
    #("HamburgerPanelItem", ExportedByFile(Some("HamburgerPanelItem"), [])),
    #("HamburgerPanelTitle", ExportedByFile(Some("HamburgerPanelTitle"), [])),
    #("Image", ExportedByFile(Some("Image"), [])),
    #("InChapterLink", ExportedByFile(Some("InChapterLink"), [])),
    #("InlineImage", ExportedByFile(Some("InlineImage"), [])),
    #("List", ExportedByFile(None, ["List", "Item"])),
    #("Math", ExportedByFile(None, ["Math", "MathBlock"])),
    #("SectionDivider", ExportedByFile(None, ["SectionDivider"])),
    #("SectionsBreadcrumbs", ExportedByFile(Some("SectionsBreadcrumbs"), ["BreadcrumbItem"])),
    #("SideImage", ExportedByFile(None, ["ImageRight", "ImageLeft"])),
    #("Solution", ExportedByFile(Some("Solution"), [])),
    #("Spacer", ExportedByFile(None, ["Spacer"])),
    #("StarDivider", ExportedByFile(None, ["StarDivider"])),
    #("Table", ExportedByFile(Some("Table"), [])),
    #("TextParent", ExportedByFile(Some("TextParent"), [])),
    #("TOC", ExportedByFile(Some("TOC"), [])),
    #("TOCItem", ExportedByFile(Some("TOCItem"), [])),
    #("TOCTitle", ExportedByFile(Some("TOCTitle"), [])),
    #("OuterP", ExportedByFile(Some("OuterP"), [])),
    #("Wrappers", ExportedByFile(None, ["Section", "Note", "SolutionNote", "Example", "NoBreak", "Pause", "WriterlyBlankLine"])),
  ])
}

pub type ImportSource {
  Default(String)
  Other(String)
}

pub fn imports_lookup_dictionary_from_exports(exports: Dict(String, ExportedByFile)) -> Dict(String, ImportSource) {
  dict.fold(
    exports,
    dict.new(),
    fn(acc, file, file_exports) {
      let acc = case file_exports.default {
        None -> acc
        Some(component) -> {
          let assert False = dict.has_key(acc, component)
          dict.insert(acc, component, Default(file))
        }
      }
      list.fold(
        file_exports.other,
        acc,
        fn (acc, component) {
          let assert False = dict.has_key(acc, component)
          dict.insert(acc, component, Other(file))
        }
      )
    }
  )
}

fn glob_imports(symbols: List(String), imports_lookup: Dict(String, ImportSource)) -> Result(List(#(String, ImportedFromFile)), String) {
  list.try_fold(
    symbols,
    dict.new(),
    fn (acc : Dict(String, ImportedFromFile), symbol) {
      case dict.get(imports_lookup, symbol) {
        Error(_) -> Error(symbol)
        Ok(Default(file)) -> {
          case dict.get(acc, file) {
            Ok(what_were_importing_so_far_from_this_file) -> {
              let assert None = what_were_importing_so_far_from_this_file.default
              Ok(dict.insert(
                acc,
                file,
                ImportedFromFile(..what_were_importing_so_far_from_this_file, default: Some(symbol))
              ))
            }
            Error(_) -> {
              Ok(dict.insert(
                acc,
                file,
                ImportedFromFile(default: Some(symbol), other: []),
              ))
            }
          }
        }
        Ok(Other(file)) -> {
          case dict.get(acc, file) {
            Ok(what_were_importing_so_far_from_this_file) -> {
              Ok(dict.insert(
                acc,
                file,
                ImportedFromFile(..what_were_importing_so_far_from_this_file, other: [symbol, ..what_were_importing_so_far_from_this_file.other])
              ))
            }
            Error(_) -> {
              Ok(dict.insert(
                acc,
                file,
                ImportedFromFile(default: None, other: [symbol]),
              ))
            }
          }
        }
      }
    }
  )
  |> result.map(dict.to_list)
}

fn import_line(file: String, imported: ImportedFromFile) -> String {
  let assert True = option.is_some(imported.default) || !list.is_empty(imported.other)
  "import"
    <> case imported.default {
      None -> ""
      Some(component) -> " " <> component
    }
    <> case option.is_some(imported.default) && !list.is_empty(imported.other) {
      True -> ", "
      False -> case list.is_empty(imported.other) {
        True -> " "
        False -> ""
      }
    }
    <> case list.is_empty(imported.other) {
      True -> ""
      False -> " { " <> list.index_fold(
        imported.other,
        "",
        fn (acc, symbol, index) {
          acc <> case index == 0 {
            True -> ""
            False -> ", "
          } <> symbol
        }) <> " } "
    }
    <> " from \"~/components/"
    <> file
    <> "\";"
}

pub fn imports_blamed_lines_for_symbols(
  symbols: List(String),
  imports_lookup: Dict(String, ImportSource)
) -> Result(List(blamedlines.BlamedLine), String) {
  let blame = blamedlines.Blame("(automated import)", 0, 0, [])

  use globbed <- result.try(glob_imports(symbols, imports_lookup))

  let import_lines = list.map(
    globbed,
    fn(globbed_symbols_for_file) {
      let #(file, imported_from_file) = globbed_symbols_for_file
      import_line(file, imported_from_file)
    }
  )

  Ok(list.map(import_lines, fn(line) {
    blamedlines.BlamedLine(blame, 0, line)
  }))
}

type TreeWalkingState = List(String)

fn uppercase_tags_tree_walker(
  state: TreeWalkingState,
  vxml: VXML,
  take_root: Bool,
) -> TreeWalkingState {
  case vxml {
    V(_, tag, _, children) -> {
      let new_state = case take_root && string.starts_with(tag, string.uppercase(string.slice(tag, 0, 1))) {
        True -> infra.append_if_not_present(state, tag)
        False -> state
      }
      list.fold(children, new_state, fn(acc, child) {
        uppercase_tags_tree_walker(acc, child, True)
      })
    }
    T(_, _) -> state
  }
}

pub fn uppercase_tags(vxml: VXML) -> List(String) {
  uppercase_tags_tree_walker([], vxml, True)
}

pub fn uppercase_tags_in_children(vxml: VXML) -> List(String) {
  uppercase_tags_tree_walker([], vxml, False)
}
