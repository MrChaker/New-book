import simplifile
import shellout
import argv
import blamedlines.{type Blame, type BlamedLine, Blame, BlamedLine}
import gleam/io
import gleam/list
import gleam/option.{Some}
import gleam/string.{inspect as ins}
import gleam/dict.{type Dict}
import infrastructure as infra
import pipeline.{our_pipeline}
import vxml.{type VXML, V}
import vxml_renderer as vr
import writerly as wp
import gleam/otp/actor.{stop}
import emitter_imports as ei

type FragmentType {
  Article(String)
  TOC
  HamburgerPanelAuthorSuppliedContents
}

type LBPSplitterError {
  NoTOC
  MoreThanOneTOC
  NoHamburgerPanelAuthorSuppliedContents
  MoreThanOneHamburgerPanelAuthorSuppliedContents
}

type LBPEmitterError = Nil

fn blame_us(message: String) -> Blame {
  Blame(message, -1, -1, [])
}

fn our_splitter(
  root: VXML,
) -> Result(List(#(String, VXML, FragmentType)), LBPSplitterError) {
  let articles = infra.children_with_tags(root, ["Chapter", "Bootcamp"])
  use toc_vxml <- infra.on_error_on_ok(
    infra.unique_child_with_tag(root, "TOC"),
    with_on_error: fn(error) {
      case error {
        infra.LessThanOne -> Error(NoTOC)
        infra.MoreThanOne -> Error(MoreThanOneTOC)
      }
    },
  )

  use panel_vxml <- infra.on_error_on_ok(
    infra.unique_child_with_tag(root, "HamburgerPanelAuthorSuppliedContents"),
    with_on_error: fn(error) {
      case error {
        infra.LessThanOne -> Error(NoHamburgerPanelAuthorSuppliedContents)
        infra.MoreThanOne -> Error(MoreThanOneHamburgerPanelAuthorSuppliedContents)
      }
    },
  )

  Ok(
    list.flatten([
      [
        #("routes/index.tsx", toc_vxml, TOC),
        #("components/HamburgerPanelAuthorSuppliedContents.tsx", panel_vxml, HamburgerPanelAuthorSuppliedContents),
      ],
      list.map(
        articles,
        fn(c) {
          let #(c, path) = infra.assert_pop_attribute_value(c, "path")
          let #(c, number) = infra.assert_pop_attribute_value(c, "number")
          let #(c, category) = infra.assert_pop_attribute_value(c, "category")
          let c = infra.set_tag(c, "Article")
          #("routes" <> path <> ".tsx", c, Article("__" <> category <> number <> "__"))
        }
      ),
    ]),
  )
}

fn is_section(vxml: VXML) -> Bool {
  infra.is_tag(vxml, "Section")
}

fn up_to_and_including_first_section(
  previous: List(VXML),
  upcoming: List(VXML)
) -> #(List(VXML), List(VXML)) {
  case upcoming {
    [] -> #(previous, [])
    [first, ..rest] -> {
      case is_section(first) {
        True -> #([first, ..previous], rest)
        False -> up_to_and_including_first_section([first, ..previous], rest)
      }
    }
  }
}

fn split_vxml_to_first_section_and_rest(vxml: VXML) -> #(VXML, List(VXML)) {
  let assert V(b, t, a, children) = vxml
  let #(before_rest, rest) = up_to_and_including_first_section([], children)
  let rest_tag = V(blame_us("rest tag"), "Rest", [], [])
  #(V(b, t, a, [rest_tag, ..before_rest] |> list.reverse), rest)
}

fn article_emitter(
  path: String,
  fragment: VXML,
  fragment_type: FragmentType,
  imports_lookup: Dict(String, ei.ImportSource),
) -> Result(#(String, List(BlamedLine), FragmentType), LBPEmitterError) {

  let #(first_split, rest) = split_vxml_to_first_section_and_rest(fragment)
  let assert Article(payload) = fragment_type

  let assert Ok(component_imports) =
    ei.uppercase_tags(fragment)
    |> ei.imports_blamed_lines_for_symbols(imports_lookup)

  let lines =
    list.flatten([
      component_imports,
      [ BlamedLine(blame_us("article_emitter"), 0, "import useShowMore from \"~/hooks/useShowMore\";"),
        BlamedLine(blame_us("article_emitter"), 0, ""),
        BlamedLine(blame_us("article_emitter"), 0, "export default function " <> payload <> "() {"),
        BlamedLine(blame_us("article_emitter"), 2, "return ("),
      ],
      vxml.vxml_to_jsx_blamed_lines(first_split, 4),
      [
        BlamedLine(blame_us("article_emitter"), 2, ");"),
        BlamedLine(blame_us("article_emitter"), 0, "}"),
        BlamedLine(blame_us("article_emitter"), 0, ""),
        BlamedLine(blame_us("article_emitter"), 0, "const Rest = () => {"),
        BlamedLine(blame_us("article_emitter"), 2, "const showMore = useShowMore();"),
        BlamedLine(blame_us("article_emitter"), 2, "return <>"),
        BlamedLine(blame_us("article_emitter"), 4, "{showMore() && <>"),
      ],
      vxml.vxmls_to_jsx_blamed_lines(rest, 6),
      [
        BlamedLine(blame_us("article_emitter"), 4, "</>}"),
        BlamedLine(blame_us("article_emitter"), 2, "</>;"),
        BlamedLine(blame_us("article_emitter"), 0, "};"),
      ],
    ])

  Ok(#(path, lines, fragment_type))
}

fn toc_emitter(
  path: String,
  fragment: VXML,
  fragment_type: FragmentType,
  imports_lookup: Dict(String, ei.ImportSource),
) -> Result(#(String, List(BlamedLine), FragmentType), LBPEmitterError) {
  let assert Ok(component_imports) =
    ei.uppercase_tags(fragment)
    |> ei.imports_blamed_lines_for_symbols(imports_lookup)

  let lines =
    list.flatten([
      component_imports,
      [BlamedLine(blame_us("toc_emitter"), 0, ""),
        BlamedLine(blame_us("toc_emitter"), 0, "export default function __Home__() {"),
        BlamedLine(blame_us("toc_emitter"), 2, "return ("),
      ],
      vxml.vxml_to_jsx_blamed_lines(fragment , 4),
      [
        BlamedLine(blame_us("toc_emitter"), 2, ");"),
        BlamedLine(blame_us("toc_emitter"), 0, "};"),
        BlamedLine(blame_us("toc_emitter"), 0, ""),
      ],
    ])

  Ok(#(path, lines, fragment_type))
}

fn hpausc_emitter(
  path: String,
  fragment: VXML,
  fragment_type: FragmentType,
  imports_lookup: Dict(String, ei.ImportSource),
) -> Result(#(String, List(BlamedLine), FragmentType), LBPEmitterError) {
  let assert Ok(component_imports) =
    ei.uppercase_tags_in_children(fragment)
    |> ei.imports_blamed_lines_for_symbols(imports_lookup)

  let lines =
    list.flatten([
      component_imports,
      [
        BlamedLine(blame_us("hpausc_emitter"), 0, ""),
        BlamedLine(blame_us("hpausc_emitter"), 0, "const HamburgerPanelAuthorSuppliedContents = () => {"),
        BlamedLine(blame_us("hpausc_emitter"), 2, "return <>"),
      ],
      vxml.vxmls_to_jsx_blamed_lines(fragment |> infra.get_children, 4),
      [
        BlamedLine(blame_us("hpausc_emitter"), 2, "</>;"),
        BlamedLine(blame_us("hpausc_emitter"), 0, "};"),
        BlamedLine(blame_us("hpausc_emitter"), 0, ""),
        BlamedLine(blame_us("hpausc_emitter"), 0, "export default HamburgerPanelAuthorSuppliedContents;"),
      ],
    ])

  Ok(#(path, lines, fragment_type))
}

fn our_emitter(
  fragment: #(String, VXML, FragmentType),
  imports_lookup: Dict(String, ei.ImportSource),
) -> Result(#(String, List(BlamedLine), FragmentType), LBPEmitterError) {
  let #(path, vxml, fragment_type) = fragment
  case fragment_type {
    Article(_) ->
      article_emitter(path, vxml, fragment_type, imports_lookup)
    TOC -> toc_emitter(path, vxml, fragment_type, imports_lookup)
    HamburgerPanelAuthorSuppliedContents -> hpausc_emitter(path, vxml, fragment_type, imports_lookup)
  }
}

fn cli_usage_supplementary() {
  io.println("      --prettier")
  io.println("         -> run npm prettier on emitted content")
}

const input_dir = "../src/content"
const output_dir = "../src"

fn rename_files(from_ext: String, to_ext: String, dir: String) -> Nil {
  use dir_children <- infra.on_error_on_ok(simplifile.read_directory(dir), fn(error) {
    io.println("error reading directory" <> ins(error))
    Nil
  })

  dir_children
  |> list.each(fn(child) {
    let child = dir <> "/" <> child
    case simplifile.is_file(child) {
      Ok(True) -> {
        let _ = shellout.command(
          run: "git",
          in: ".",
          with: ["mv", child, child |> string.replace(from_ext, to_ext)],
          opt: [],
        )
        io.println("Renamed " <> child <> " to " <> child |> string.replace(from_ext, to_ext))
      }
      Ok(False) -> rename_files(from_ext, to_ext, child)
      Error(_) -> Nil
    }
  })
}

fn delete_files(ext: String,  dir: String) -> Nil {
  use dir_children <- infra.on_error_on_ok(simplifile.read_directory(dir), fn(error) {
    io.println("error reading directory" <> ins(error))
    Nil
  })

  dir_children
  |> list.each(fn(child) {
    let child = dir <> "/" <> child

    case simplifile.is_file(child), string.ends_with(child, ext) {
      Ok(True), True -> {
        let _ = shellout.command(
          run: "git",
          in: ".",
          with: ["rm", "-f", "--cached", child],
          opt: [],
        )
        let _ = shellout.command(
          run: "rm",
          in: ".",
          with: [child],
          opt: [],
        )
        io.println("Deleted " <> child)
      }
      Ok(False), _ -> delete_files(ext, child)
      _, _ -> Nil
    }
  })
}

pub fn main() {
  use amendments <- infra.on_error_on_ok(
    vr.process_command_line_arguments(argv.load().arguments, ["--prettier", "--emu-to-wly", "--wly-to-emu", "--delete-wly", "--delete-emu"]),
    fn(error) {
      io.println("")
      io.println("command line error: " <> ins(error))
      io.println("")
      vr.cli_usage()
      cli_usage_supplementary()
    },
  )

  use _ <- infra.on_error_on_ok(
    dict.get(amendments.user_args, "--emu-to-wly"),
    with_on_ok: fn(_) {
      rename_files(".emu", ".wly", input_dir)
      let _ = stop()
      Nil
    },
  )

  use _ <- infra.on_error_on_ok(
    dict.get(amendments.user_args, "--wly-to-emu"),
    with_on_ok: fn(_) {
      rename_files(".wly", ".emu", input_dir)
      let _ = stop()
      Nil
    },
  )

  use _ <- infra.on_error_on_ok(
    dict.get(amendments.user_args, "--delete-wly"),
    with_on_ok: fn(_) {
      delete_files(".wly", input_dir)
      let _ = stop()
      Nil
    },
  )

  use _ <- infra.on_error_on_ok(
    dict.get(amendments.user_args, "--delete-emu"),
    with_on_ok: fn(_) {
      delete_files(".emu", input_dir)
      let _ = stop()
      Nil
    },
  )

  let exports_dict = ei.lbp_exports_dictionary()
  let imports_lookup = ei.imports_lookup_dictionary_from_exports(exports_dict)

  let renderer =
    vr.Renderer(
      assembler: wp.assemble_blamed_lines_advanced_mode(_, amendments.spotlight_args_files),
      source_parser: vr.default_writerly_source_parser( _, amendments.spotlight_args),
      pipeline: our_pipeline(),
      splitter: our_splitter,
      emitter: fn(fragment) { our_emitter(fragment, imports_lookup) },
      prettifier: vr.guarded_prettier_prettifier(amendments.user_args),
    )

  let parameters =
    vr.RendererParameters(
      input_dir: input_dir,
      output_dir: Some(output_dir),
    )
    |> vr.amend_renderer_paramaters_by_command_line_amendment(amendments)

  let debug_options =
    vr.empty_renderer_debug_options("../renderer_artifacts")
    |> vr.amend_renderer_debug_options_by_command_line_amendment(
      amendments,
      renderer.pipeline,
    )

  let _ = shellout.command(
    run: "rm",
    in: ".",
    with: [
      output_dir <> "/article/*",
      output_dir <> "/components/index.tsx",
      output_dir <> "/components/HamburgerPanelAuthorSuppliedContents.tsx"
    ],
    opt: [],
  )

  let _ = vr.run_renderer(renderer, parameters, debug_options)

  Nil
}
