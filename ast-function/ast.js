const babel = require('@babel/core');
const types = require('@babel/types');

function addPrototypePlugin() {
  return {
    visitor: {
      ObjectExpression(path) {
        const { node } = path;

        // 遍历对象的属性
        node.properties.forEach(property => {
          if (
            types.isObjectProperty(property) &&
            types.isFunctionExpression(property.value)
          ) {
            const { key } = property;
            const propertyName = key.name;

            // 创建 prototype 赋值语句
            const assignmentExpression = types.assignmentExpression(
              '=',
              types.memberExpression(
                types.memberExpression(
                  types.identifier('obj'),
                  types.identifier(propertyName)
                ),
                types.identifier('prototype')
              ),
              types.stringLiteral(propertyName === 'foo' ? 'xxx' : 'yyy')
            );

            // 在对象表达式后面插入 prototype 赋值语句
            path.insertAfter(types.expressionStatement(assignmentExpression));
          }
        });
      }
    }
  };
}

// 源代码
const code = `
  const obj = {
    foo: function () {
      console.log('foo called');
    },
    bar: function () {
      console.log('bar called');
    },
    baz: 'test string'
  };
`;

// 使用 Babel 转换代码
const result = babel.transform(code, {
  plugins: [addPrototypePlugin]
});

// 输出转换后的代码
console.log(result.code);