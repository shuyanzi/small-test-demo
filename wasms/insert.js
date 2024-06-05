const t = require("@webassemblyjs/ast");
const {
    encodeVersion,
    encodeHeader,
} = require("@webassemblyjs/wasm-gen/lib/encoder");
const { makeBuffer } = require("@webassemblyjs/helper-buffer");
const constants = require("@webassemblyjs/helper-wasm-bytecode").default;
// const {
//     compareArrayBuffers,
// } = require("@webassemblyjs/helper-buffer/lib/compare");
const { fromHexdump } = require("@webassemblyjs/helper-buffer");
const { add, addWithAST } = require("@webassemblyjs/wasm-edit");
const { decode } = require("@webassemblyjs/wasm-parser");
const fs = require("fs");

// describe("ModuleImport", () => {
// (module
//   (import "a" "b" (memory 1))
// )
// const expectedBinary = makeBuffer(
//     encodeHeader(),
//     encodeVersion(1),
//     [constants.sections.import, 0x08, 0x01, 0x01, 0x61],
//     [0x01, 0x62, 0x02, 0x00, 0x01]
// );

// // it("should insert the node with non existing section", () => {
//     // (module)
//     const actualBinary = makeBuffer(encodeHeader(), encodeVersion(1));

//     const newBinary = add(actualBinary, [
//         t.moduleImport("a", "b", t.memory(t.limit(1))),
//     ]);
//     console.log({ newBinary, actualBinary, expectedBinary });

//     // compareArrayBuffers(newBinary, expectedBinary);
// // });

// it("should insert the node with existing empty section", () => {
//     // (module)
//     const actualBinary = makeBuffer(encodeHeader(), encodeVersion(1), [
//         constants.sections.import,
//         0x01,
//         0x00,
//     ]);

//     const newBinary = add(actualBinary, [
//         t.moduleImport("a", "b", t.memory(t.limit(1))),
//     ]);

//     compareArrayBuffers(newBinary, expectedBinary);
// });
// });

// describe("ModuleExport", () => {
    // (module
    //   (func)
    //   (export "a" (func 0))
    // )
    const expectedBinary = makeBuffer(
        encodeHeader(),
        encodeVersion(1),
        [constants.sections.type, 0x04, 0x01, 0x60, 0x00, 0x00],
        [constants.sections.func, 0x02, 0x01, 0x00],
        [constants.sections.export, 0x05, 0x01, 0x01, 0x61, 0x00, 0x00],
        [constants.sections.code, 0x04, 0x01, 0x02, 0x00, 0x0b]
    );

    // it("should insert the node with existing empty section", () => {
    //     // (module
    //     //   (func)
    //     // )
    //     const actual = makeBuffer(
    //         encodeHeader(),
    //         encodeVersion(1),
    //         [constants.sections.type, 0x04, 0x01, 0x60, 0x00, 0x00],
    //         [constants.sections.func, 0x02, 0x01, 0x00],
    //         [constants.sections.export, 0x01, 0x00],
    //         [constants.sections.code, 0x04, 0x01, 0x02, 0x00, 0x0b]
    //     );

    //     const newBinary = add(actual, [
    //         t.moduleExport("a", t.moduleExportDescr("Func", t.indexLiteral(0))),
    //     ]);

    //     compareArrayBuffers(newBinary, expectedBinary);
    // });

    // it("should insert the node with non existing section", () => {
        // (module
        //   (func)
        // )
        // const actual = makeBuffer(
        //     encodeHeader(),
        //     encodeVersion(1),
        //     [constants.sections.type, 0x04, 0x01, 0x60, 0x00, 0x00],
        //     [constants.sections.func, 0x02, 0x01, 0x00],
        //     [constants.sections.code, 0x04, 0x01, 0x02, 0x00, 0x0b]
        // );
        const actual = fs.readFileSync("wasms/table-old.wasm");

        // const binary = readFileSync("./table.wasm");

        const decoderOpts = {};
        const ast = decode(actual, decoderOpts);
        // console.log(ast)
        // console.log('{actual,t}')
        // console.log(t.data)
        // addWithAST(ast,)
        const str = "wweqewq";
        const bytes = new TextEncoder().encode(str);
        const data = t.data(bytes, t.memIndexLiteral(0));
        // ast.body[0].fields.push(t.node("Data", data));
        // const dataStart = t.global(
        //     t.globalType("i32", "const"),
        //     [t.objectInstruction("Data", [t.numberLiteral(0)])]
        // );
        // ast.body[0].fields.push(t.node("Global", dataStart));




        const index = t.numberLiteralFromRaw(1);
        // const index = t.stringLiteral("foo dadadsa");
        // const funcindex = t.indexInFuncSection(index);
        const newBinary = add(actual, [
            // index,
            // t.moduleImport("a", "b", t.memory(t.limit(1))), x
            t.moduleExport("foo", t.moduleExportDescr("Func", t.indexLiteral(0))),
            // t.moduleExport("foo", t.moduleExportDescr("Func", index)),
        ]);
        fs.writeFileSync("wasms/out/table-1.wasm", new Uint8Array(newBinary));

        console.log({ newBinary, actual, index, aa: t.indexLiteral(0) });
    // });

    // it("should export a function in WebAssembly", function () {
    //     if (typeof WebAssembly === "undefined") {
    //         console.warn("WebAssembly not available; skiping test");
    //         return this.skip();
    //     }

    //     // (module
    //     //   (func)
    //     // )
    //     const actual = makeBuffer(
    //         encodeHeader(),
    //         encodeVersion(1),
    //         [constants.sections.type, 0x04, 0x01, 0x60, 0x00, 0x00],
    //         [constants.sections.func, 0x02, 0x01, 0x00],
    //         [constants.sections.code, 0x04, 0x01, 0x02, 0x00, 0x0b]
    //     );

    //     const newBinary = add(actual, [
    //         t.moduleExport("a", t.moduleExportDescr("Func", t.indexLiteral(0))),
    //     ]);

    //     return WebAssembly.instantiate(newBinary).then((m) => {
    //         console.log({ m });
    //         // assert.isOk(m.instance.exports.a);
    //         // assert.typeOf(m.instance.exports.a, "function");
    //     });
    // });
// });

// describe("Global", () => {
// // (module
// //   (global (mut i32) (i32.const 1))
// // )
// const expectedBinary = makeBuffer(encodeHeader(), encodeVersion(1), [
//     constants.sections.global,
//     0x06,
//     0x01,
//     0x7f,
//     0x01,
//     0x41,
//     0x01,
//     0x0b,
// ]);

// const global = t.global(t.globalType("i32", "var"), [
//     t.objectInstruction("const", "i32", [t.numberLiteralFromRaw(1)]),
//     t.instruction("end"),
// ]);

// it("should insert the node in existing section", () => {
//     // (module)
//     const actual = makeBuffer(encodeHeader(), encodeVersion(1), [
//     constants.sections.global,
//     0x01,
//     0x00,
//     ]);

//     const newBinary = add(actual, [global]);

//     compareArrayBuffers(newBinary, expectedBinary);
// });

// it("should insert the node with non-existing section", () => {
//     // (module)
//     const actual = makeBuffer(encodeHeader(), encodeVersion(1));

//     const newBinary = add(actual, [global]);

//     compareArrayBuffers(newBinary, expectedBinary);
// });
// });

// describe("Func", () => {
// // (module
// //   (func (result i32) (i32.const 1))
// // )
// const expectedBinary = makeBuffer(
//     encodeHeader(),
//     encodeVersion(1),
//     [constants.sections.type, 0x05, 0x01, 0x60, 0x00, 0x01, 0x7f],
//     [constants.sections.func, 0x02, 0x01, 0x00],
//     [constants.sections.code, 0x06, 0x01, 0x04, 0x00, 0x41, 0x01, 0x0b]
// );

// const func = t.func(null, t.signature([], ["i32"]), [
//     t.objectInstruction("const", "i32", [t.numberLiteralFromRaw(1)]),
//     t.instruction("end"),
// ]);

// const functype = t.typeInstruction(
//     undefined,
//     t.signature(func.signature.params, func.signature.results)
// );
// const funcindex = t.indexInFuncSection(t.indexLiteral(0));

// it("should insert the node in existing sections", () => {
//     const actual = makeBuffer(
//     encodeHeader(),
//     encodeVersion(1),
//     [constants.sections.type, 0x01, 0x00],
//     [constants.sections.func, 0x01, 0x00],
//     [constants.sections.code, 0x01, 0x00]
//     );

//     const newBinary = add(actual, [func, funcindex, functype]);

//     compareArrayBuffers(newBinary, expectedBinary);
// });

// it("should insert the node with non-existing sections", () => {
//     const actual = makeBuffer(encodeHeader(), encodeVersion(1));
//     const newBinary = add(actual, [func, funcindex, functype]);

//     compareArrayBuffers(newBinary, expectedBinary);
// });

// it("should insert the node after another function", () => {
//     // It's the second func
//     const funcindex = t.indexInFuncSection(t.indexLiteral(1));

//     const newBinary = add(expectedBinary, [func, funcindex, functype]);

//     // (module
//     //   (func (result i32) (i32.const 1))
//     //   (func (result i32) (i32.const 1))
//     // )
//     const expectedBinary2 = makeBuffer(
//     encodeHeader(),
//     encodeVersion(1),
//     [constants.sections.type, 0x09, 0x02, 0x60, 0x00, 0x01, 0x7f],
//     [0x60, 0x00, 0x01, 0x7f],
//     [constants.sections.func, 0x03, 0x02, 0x00, 0x01],
//     [constants.sections.code, 0x0b, 0x02, 0x04, 0x00, 0x41, 0x01, 0x0b],
//     [0x04, 0x00, 0x41, 0x01, 0x0b]
//     );

//     compareArrayBuffers(newBinary, expectedBinary2);
// });
// });

// it("should insert nodes in multiple sections multiple times (implies updating the underlying AST)", () => {
// let bin;

// const index = t.numberLiteralFromRaw(0);

// const global = t.global(t.globalType("i32", "const"), [
//     t.objectInstruction("const", "i32", [t.numberLiteralFromRaw(1)]),
//     t.instruction("end"),
// ]);

// const functype = t.typeInstruction(undefined, t.signature([], []));

// const funcindex = t.indexInFuncSection(index);
// const moduleExport = t.moduleExport(
//     "foo",
//     t.moduleExportDescr("Func", index)
// );

// const func = t.func(t.identifier("foo"), t.signature([], []), [
//     t.instruction("end"),
// ]);

// // (module)
// bin = makeBuffer(encodeHeader(), encodeVersion(1));

// // (module
// //   (global i32 (i32.const 1))
// //   (type (func))
// // )
// bin = add(bin, [
//     func,
//     global,
//     functype,
//     global,
//     functype,
//     funcindex,
//     moduleExport,
// ]);

// const expected = makeBuffer(
//     encodeHeader(),
//     encodeVersion(1),
//     [constants.sections.type, 0x07, 0x02],
//     /* 1 */ [0x60, 0x00, 0x00],
//     /* 2 */ [0x60, 0x00, 0x00],
//     [constants.sections.func, 0x02, 0x01],
//     /* 1 */ [0x00],
//     [constants.sections.global, 0x0b, 0x02],
//     /* 1 */ [0x7f, 0x00, 0x41, 0x01, 0x0b],
//     /* 2 */ [0x7f, 0x00, 0x41, 0x01, 0x0b],
//     [constants.sections.export, 0x07, 0x01],
//     /* 1 */ [0x03, 102, 111, 111, 0x00, 0x00],
//     [constants.sections.code, 0x04, 0x01],
//     /* 1 */ [0x02, 0x00, 0x0b]
// );

// compareArrayBuffers(bin, expected);
// });

// it("should insert type instructions with LEB128 padded type section size", () => {
// const functype = t.typeInstruction(undefined, t.signature([], []));

// let bin;

// // (module)
// bin = fromHexdump(`
//     00000000  00 61 73 6d 01 00 00 00  01 81 80 80 80 00 00
//     00000010  06 81 80 80 80 00
// `);

// bin = add(bin, [functype, functype]);

// // (module
// //   (type (func))
// //   (type (func))
// // )
// const expected = makeBuffer(
//     encodeHeader(),
//     encodeVersion(1),
//     [constants.sections.type, 0x07, 0x02],
//     /* 1 */ [0x60, 0x00, 0x00],
//     /* 2 */ [0x60, 0x00, 0x00],
//     [constants.sections.global, 0x01, 0x00]
// );

// compareArrayBuffers(bin, expected);
// });
