const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const generate = require('@babel/generator').default;
const t = require('@babel/types');
var CryptoJS = require("crypto-js");

const code = `
const objtest = {
  foo: function() {console.log('foo called');},
  bar: function() {
    console.log('bar called');
  },
  baz: 'test string'
};
`;

// 解析代码为 AST
const ast = parser.parse(code);

// 遍历 AST 并修改
const list = [];
let objKey  = '';
traverse(ast, {
  VariableDeclarator(path) {
    const { node } = path;
    objKey = node.id.name;
  },
  ObjectProperty(path) {
    const { node } = path;
    // 只处理函数属性
    if (t.isFunctionExpression(node.value) || t.isArrowFunctionExpression(node.value)) {
      // 获取当前属性的键名
      const propertyKey = node.key.name;
      console.log('Property key:', propertyKey); // 输出: Property key: foo 或 Property key: bar

      // 获取当前属性的值（函数表达式）
      const propertyValue = node.value;
      console.log("%c Line:38 🍖 propertyValue", "color:#b03734", propertyValue);

      const functionCode = generate(propertyValue, {
        compact: false,
        retainLines: true,
        minified: true,
        comments: true,
      }).code.replace(/\n/g, '');
      console.log('Property value:', functionCode);
      const hash = CryptoJS.SHA256(functionCode);
      const uniqueId = hash.toString(CryptoJS.enc.Hex);
      list.push(`${objKey}.${propertyKey}.prototype.key = '${uniqueId}'`);
    }
  }
});

// 重新生成代码
const output = generate(ast, {
  compact: false,
  retainLines: true,
  minified: true,
  comments: true,
});
console.log(output.code+'\n'+list.join('\n'));