const { XMLParser, XMLBuilder } = require("fast-xml-parser");
const katex = require("katex");
const fs = require("node:fs/promises");
const path = require("node:path");
function render_katex(obj) {
  for (const key in obj) {
    if (typeof obj[key] === "object") {
      render_katex(obj[key]);
    }
    if (key === "tex") {
      let isBlock = obj[":@"]?.["@_display"] === "block";
      if (obj.tex.length === 0) return;
      let html = katex.renderToString(obj.tex[0]["#text"], {
        trust: true,
        throwOnError: false,
        displayMode: isBlock,
      });
      obj.tex.push({
        rendered: [
          {
            "#text": html,
          },
        ],
      });
    }
  }
}
function code_render(obj) {
  for (const key in obj) {
    if (typeof obj[key] === "object") {
      code_render(obj[key]);
    }
    if (key === "code") {
      if (obj.code.length === 0) return;
      const code = obj.code[0]["#text"];
      const lines = code.split("\n");
      let i = 0;
      let res = ''
      while (code[i] === ' ') {
        i++;
      }
      for (let j = 0; j < lines.length; j++) {
        res += lines[j].replace(' '.repeat(i), '') + '\n'
      }
      obj.code[0]['#text'] = res.trim()
    }
  }
}

async function convert(name) {
  const file = await fs.readFile(name);
  const options = {
    ignoreAttributes: false,
    attributeNamePrefix: "@_",
    alwaysCreateTextNode: true,
    preserveOrder: true,
    trimValues: false,
    parseTagValue: false,
    parseAttributeValue: false,
  };
  let parser = new XMLParser(options);
  let obj = parser.parse(file);
  render_katex(obj);
  code_render(obj);
  let builder = new XMLBuilder(options);
  const result = builder.build(obj);
  await fs.writeFile(name, result);
}

async function start() {
  const files = await fs.readdir("output");
  for (const file of files) {
    if (file.endsWith("xml")) {
      if (file.startsWith("about")) continue;
      console.log("Converting", file);
      await convert(path.join("output", file));
    }
  }
}

start();