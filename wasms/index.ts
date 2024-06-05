// import { decode } from "@webassemblyjs/wasm-parser";
// import { readFileSync } from "fs";

// const binary = readFileSync("./table.wasm");

// const decoderOpts = {};
// const ast = decode(binary, decoderOpts);
// console.log({ast})
// import { add } from "@webassemblyjs/wasm-edit";

// const binary = [/*...*/];

// const newBinary = add(actualBinary, [
//   t.moduleImport("env", "mem", t.memory(t.limit(1)))
// ]);

import { edit } from "@webassemblyjs/wasm-edit";

const binary = [0, 97, 115, 109, 1, 0, 0, 0, 1, 11, 2, 96, 0, 1, 127, 96, 2, 127, 127, 1, 127, 3, 4, 3, 0, 0, 1, 4, 5, 1, 112, 1, 2, 2, 7, 13, 2, 3, 116, 98, 108, 1, 0, 3, 97, 100, 100, 0, 2, 9, 8, 1, 0, 65, 0, 11, 2, 0, 1, 10, 19, 3, 4, 0, 65, 13, 11, 4, 0, 65, 42, 11, 7, 0, 32, 0, 32, 1, 106, 11];

const visitors = {
  ModuleImport({ node }) {
    console.log({node})
    // node.module = "foo";
    // node.name = "bar";
  }
};

const newBinary = edit(binary, visitors);