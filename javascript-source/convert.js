const { XMLParser, XMLBuilder } = require("fast-xml-parser");
const fs = require("node:fs/promises");
const path = require("node:path");
function code_render(obj) {
  for (const key in obj) {
    if (typeof obj[key] === "object") {
      code_render(obj[key]);
    }
    if (key === "html:code") {
      if (obj["html:code"].length === 0) return;
      const code = obj["html:code"][0]["#text"];
      const lines = code.split("\n");
      let i = 0;
      let res = "";
      while (code[i] === " ") i++;
      for (let j = 0; j < lines.length; j++) {
        res += lines[j].replace(" ".repeat(i), "") + "\n";
      }

      obj["html:code"][0]['#text'] = res.trim()
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
  code_render(obj);
  let builder = new XMLBuilder(options);
  const result = builder.build(obj);
  await fs.writeFile(name, result);
}

async function find_xml_files(directory) {
  const files = [];
  const entries = await fs.readdir(directory, { withFileTypes: true });
  entries.sort((left, right) => left.name.localeCompare(right.name));

  for (const entry of entries) {
    const name = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...await find_xml_files(name));
    } else if (entry.isFile() && path.extname(entry.name) === ".xml") {
      files.push(name);
    }
  }

  return files;
}

async function start() {
  const files = await find_xml_files("output");
  for (const file of files) {
    console.log("Converting", path.relative("output", file));
    await convert(file);
  }
}

start().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
