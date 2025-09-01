//  Load the packages needed for MathJax
//
import { mathjax } from "mathjax-full/js/mathjax";
import { TeX } from "mathjax-full/js/input/tex";
import { SVG } from "mathjax-full/js/output/svg";
import { liteAdaptor } from "mathjax-full/js/adaptors/liteAdaptor";
import { RegisterHTMLHandler } from "mathjax-full/js/handlers/html";
import { AssistiveMmlHandler } from "mathjax-full/js/a11y/assistive-mml";
import { AllPackages } from "mathjax-full/js/input/tex/AllPackages";
import fs from "fs";
import path from "path";
import "mathjax-full/js/util/entities/all";

//
//  Get the command-line arguments
//
// var argv = require("yargs")
//   .demand(1)
//   .strict()
//   .usage("$0 [options] file.html > converted.html")
//   .options({
//     em: {
//       default: 16,
//       describe: "em-size in pixels",
//     },
//     ex: {
//       default: 8,
//       describe: "ex-size in pixels",
//     },
//     packages: {
//       default: AllPackages.sort().join(", "),
//       describe: 'the packages to use, e.g. "base, ams"',
//     },
//     fontCache: {
//       default: "global",
//       describe: "cache type: local, global, none",
//     },
//   }).argv;

//
//  Read the HTML file
//
// const htmlfile = require("fs").readFileSync(argv._[0], "utf8");

//
//  Minimal CSS needed for stand-alone image
//
const CSS = [
  "svg a{fill:blue;stroke:blue}",
  '[data-mml-node="merror"]>g{fill:red;stroke:red}',
  '[data-mml-node="merror"]>rect[data-background]{fill:yellow;stroke:none}',
  "[data-frame],[data-line]{stroke-width:70px;fill:none}",
  ".mjx-dashed{stroke-dasharray:140}",
  ".mjx-dotted{stroke-linecap:round;stroke-dasharray:0,140}",
  "use[data-c]{stroke-width:3px}",
].join("");

const parseMathString = (mathString, isDisplayMath) => {
  const adaptor = liteAdaptor();
  const handler = RegisterHTMLHandler(adaptor);
  //if (argv.assistiveMml) AssistiveMmlHandler(handler);

  const tex = new TeX({
    inlineMath: [["$", "$"]], // Inline math delimiters
    processEscapes: true, // Process escape sequences
    packages: AllPackages.sort()
      .join(", ")
      .split(/\s*,\s*/) || { "[+]": ["color"] }, // Load the color extension
    macros: {
      dblcol:
        "\\!\\rt{0.1}\\mathrel{\\raise.13ex{\\substack{\\small \\circ \\\\ \\small \\circ}}}",
      hc: "\\!\\rt{0.1}\\mathrel{\\raise.13ex{\\substack{\\small \\circ \\\\ \\small \\circ}}}",
      rr: "\\mathbb{R}",
      zz: "\\mathbb{Z}",
      nn: "\\mathbb{N}",
      ww: "\\mathbb{W}",
      qq: "\\mathbb{Q}",
      te: "\\text",
      dom: "\\text{dom}\\,",
      degree: "\\text{deg}\\,",
      f: "\\Rule{0.12em}{0.8pt}{-0.8pt}f",
      fsp: "\\hspace{0.06em}\\Rule{0.12em}{0.8pt}{-0.8pt}f",
      sp: "\\Rule{0.08em}{0.8pt}{-0.8pt}",
      ra: "\\rightarrow",
      back: "\\backslash",
      sqt: "{\\color{white} *\\!\\!\\!}",
      up: ["\\rule{0pt}{#1em}", 1],
      dn: ["\\Rule{0pt}{0em}{#1em}", 1],
      rt: ["\\hspace{#1em}", 1],
      hlfbk: "\\!\\hspace{0.1em}",
      fl: ["\\lfloor #1 \\rfloor", 1],
      cl: ["\\lceil #1 \\rceil", 1],
      FL: ["\\left\\lfloor #1 \\right\\rfloor", 1],
      CL: ["\\left\\lceil #1 \\right\\rceil", 1],
      implies: "\\Longrightarrow",
      psa: "{}\\!\\hspace{0.0691em}",
      psb: "{}\\!\\hspace{0.06901311249137em}",
      ncdot: "\\re\\cdot\\re",
      re: "\\!\\hspace{0.1em}",
      bk: "\\!\\hspace{0.1em}",
      gbk: "\\!\\hspace{0.15em}",
      fw: "\\hspace{0.1em}",
      hfbk: "\\!\\hspace{0.2em}",
      deg: "\\circ",
      km: "[\\text{km}]",
      ddx: "{d \\over dx}\\hspace{0.1em}",
      ddt: "{d \\over dt}\\hspace{0.1em}",
      ddu: "{d \\over du}\\hspace{0.1em}",
      ddz: "{d \\over dz}\\hspace{0.1em}",
      ov: ["\\overline{#1}", 1],
      floor: ["\\lfloor{#1}\\rfloor", 1],
      faketextelement: "{\\color{white}\\text{*}}\\!\\!\\!\\rt{0.1}",
    },
  });

  const svg = new SVG({ fontCache: true ? "local" : "none" });
  const html = mathjax.document("", {
    InputJax: tex,
    OutputJax: svg,
  });

  const node = html.convert(mathString, {
    display: isDisplayMath,
    // em: 16,
    // ex: 8,
    // containerWidth: 80 * 16,
  });

  let result = adaptor.innerHTML(node);
  return false
    ? result.replace(/<defs>/, `<defs><style>${CSS}</style>`)
    : result;
};

// Function to extract and typeset math expressions from file
const typesetMath = async (fileContents) => {
  const mathRegex =
    /(?<!\\)\$\$(.*?)(?<!\\)\$\$|(?<!\\)\$(.*?)(?<!\\)\$|(?<!\\)\\\[(.*?)(?<!\\)\\\]|(?<!\\)\\\((.*?)(?<!\\)\\\)/gs;
  let match;

  let processedString = fileContents
    .replace(/{`\$(.*?)\$`}/gs, "$$$1$")
    .replace(/{`\$\$(.*?)\$\$`}/gs, "$$$$1$$");

  while ((match = mathRegex.exec(fileContents)) !== null) {
    const [fullMatch, displayMath, inlineMath1, displayMathAlt, inlineMathAlt] =
      match;
    const mathContent =
      displayMath || inlineMath1 || displayMathAlt || inlineMathAlt;

    // Typeset the math content

    let result = parseMathString(mathContent, Boolean(displayMath));

    processedString = processedString.replace(fullMatch, result);
  }

  return processedString;
};

const processJSXFile = async (path) => {
  try {
    console.log(`Processing file: ${path}`);
    const file = fs.readFileSync(path, "utf-8");
    const processedContents = await typesetMath(file);
    fs.writeFileSync(path, processedContents, "utf-8");
    console.log(`Updated file: ${path}`);
  } catch (error) {
    console.error(`Error processing file ${path}\nError: ${error}`);
  }
};
//
const processJSXFiles = async (directory) => {
  const files = fs.readdirSync(directory);
  for (const file of files) {
    const filePath = path.join(directory, file);
    await processJSXFile(filePath);
  }
};

const [, _, input_path] = process.argv;
if (!input_path) {
  console.error("Error: Please provide a directory as an argument.");
  process.exit(1);
}

const path_resolved = path.resolve(input_path);

(async () => {
  try {
    console.log(fs.statSync(path_resolved));
    if (fs.statSync(path_resolved).isFile) {
      await processJSXFile(path_resolved);
    } else {
      await processJSXFiles(path_resolved);
    }
  } catch (error) {
    console.error("Error processing files:", error);
  }
})();
