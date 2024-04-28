import wasm2js from 'wasm2js';
import fs from 'fs';
const wasmBuffer  = fs.readFileSync("./build/debug.wasm");
// const wasmBuffer  = fs.readFileSync("./facetec.wasm");
const js = wasm2js(wasmBuffer);
fs.writeFile("result-debug.js", js, (err) => {});