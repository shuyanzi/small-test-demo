const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const generate = require('@babel/generator').default;
const t = require('@babel/types');
var CryptoJS = require("crypto-js");
const prettier = require('prettier');

const code = `
function test(){console.log(123)}
function test2() {
  console.log(1234);
}
`;

// 解析代码为 AST
const ast = parser.parse(code);

// 遍历 AST 并修改
traverse(ast, {
  FunctionDeclaration(path) {
    const { node } = path;
    const functionCode = generate(node, {
      compact: false,
      retainLines: true,
      minified: true,
      comments: true,
    }).code;
    const hash = CryptoJS.SHA256(functionCode.replace(/\n/g, ''));
    const uniqueId = hash.toString(CryptoJS.enc.Hex);
    const key = t.objectProperty(t.identifier('key'), t.stringLiteral(uniqueId));
    const protoAssign = t.assignmentExpression(
      '=',
      t.memberExpression(t.memberExpression(node.id, t.identifier('prototype')), t.identifier('key')),
      key.value
    );
    path.insertAfter(t.expressionStatement(protoAssign));
  }
});

// 重新生成代码
const output = generate(ast);
console.log(output.code);