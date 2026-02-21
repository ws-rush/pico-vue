import {
  parse
} from "./chunk-3ZWEP66T.js";
import "./chunk-SVVTWQP3.js";
import "./chunk-CI6ZEM7J.js";
import "./chunk-X3NHKWLZ.js";
import "./chunk-R3SFYRV7.js";
import "./chunk-IAQVNVJ3.js";
import "./chunk-7LEKXZUJ.js";
import "./chunk-VFQUUVFM.js";
import "./chunk-46BLHPAW.js";
import "./chunk-AVXFVYID.js";
import {
  package_default
} from "./chunk-REILKW23.js";
import {
  selectSvgElement
} from "./chunk-QGS7LRZ4.js";
import {
  configureSvgSize
} from "./chunk-Z2WYU7ZE.js";
import {
  __name,
  log
} from "./chunk-WLN2IMAD.js";
import "./chunk-JSGDSKIP.js";
import "./chunk-BPUSPEHY.js";
import "./chunk-FOQIPI7F.js";

// node_modules/.pnpm/mermaid@11.12.3/node_modules/mermaid/dist/chunks/mermaid.core/infoDiagram-HS3SLOUP.mjs
var parser = {
  parse: __name(async (input) => {
    const ast = await parse("info", input);
    log.debug(ast);
  }, "parse")
};
var DEFAULT_INFO_DB = {
  version: package_default.version + (true ? "" : "-tiny")
};
var getVersion = __name(() => DEFAULT_INFO_DB.version, "getVersion");
var db = {
  getVersion
};
var draw = __name((text, id, version) => {
  log.debug("rendering info diagram\n" + text);
  const svg = selectSvgElement(id);
  configureSvgSize(svg, 100, 400, true);
  const group = svg.append("g");
  group.append("text").attr("x", 100).attr("y", 40).attr("class", "version").attr("font-size", 32).style("text-anchor", "middle").text(`v${version}`);
}, "draw");
var renderer = { draw };
var diagram = {
  parser,
  db,
  renderer
};
export {
  diagram
};
//# sourceMappingURL=infoDiagram-HS3SLOUP-3W4DH343.js.map
