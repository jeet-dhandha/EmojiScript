export const StatementTests = [
  // init statement tests
  {
    name: "empty init statement test, should success",
    input: `
      🤚
      🤚
    `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[]}}`,
  },
  {
    name: "init statement test with semi colon, should success",
    input: `
      🤚;
      🤚;
    `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[]}}`,
  },
  {
    name: "init statement test with semi colon - 2, should success",
    input: `
      🤚;
      🤚
    `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[]}}`,
  },
  {
    name: "empty init statement test with random charaters initially, should success",
    input: `
      some random characters
      random random random
      🤚
      🤚;
    `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[]}}`,
  },
  // empty statement tests
  {
    name: "multiple empty statements test, should success",
    input: `
      🤚
      ;
      ;
      ;;
      🤚
    `,
    output: `{\"type\":\"Program\",\"body\":{\"type\":\"InitStatement\",\"body\":[{\"type\":\"EmptyStatement\"},{\"type\":\"EmptyStatement\"},{\"type\":\"EmptyStatement\"}]}}`,
  },
  // block statement tests
  {
    name: "block statement test with empty block, should success",
    input: `
      🤚
      {}
      🤚
    `,
    output: `{\"type\":\"Program\",\"body\":{\"type\":\"InitStatement\",\"body\":[{\"type\":\"BlockStatement\",\"body\":[]}]}}`,
  },
  {
    name: "block statement test with empty block and semi colon, should success",
    input: `
      🤚;
      {};
      🤚
    `,
    output: `{\"type\":\"Program\",\"body\":{\"type\":\"InitStatement\",\"body\":[{\"type\":\"BlockStatement\",\"body\":[]}]}}`,
  },
  {
    name: "block statement test with assignment expression inside, should success",
    input: `
      🤚;
      {
        naam = 4;
      }
      🤚;
    `,
    output: `{\"type\":\"Program\",\"body\":{\"type\":\"InitStatement\",\"body\":[{\"type\":\"BlockStatement\",\"body\":[{\"type\":\"ExpressionStatement\",\"expression\":{\"type\":\"AssignmentExpression\",\"operator\":\"=\",\"left\":{\"type\":\"IdentifierExpression\",\"name\":\"naam\"},\"right\":{\"type\":\"NumericLiteral\",\"value\":4}}}]}]}}`,
  },
  {
    name: "block statement test with variable statement inside, should success",
    input: `
      🤚
      {
        👉 a = 4;
      }
      🤚
    `,
    output: `{\"type\":\"Program\",\"body\":{\"type\":\"InitStatement\",\"body\":[{\"type\":\"BlockStatement\",\"body\":[{\"type\":\"VariableStatement\",\"declarations\":[{\"type\":\"VariableDeclaration\",\"id\":{\"type\":\"IdentifierExpression\",\"name\":\"a\"},\"init\":{\"type\":\"NumericLiteral\",\"value\":4}}]}]}]}}`,
  },
  // print statement test
  {
    name: "print statement test with string printing, should success",
    input: `
      🤚
      ✏️ "puff...";
      🤚
    `,
    output: `{\"type\":\"Program\",\"body\":{\"type\":\"InitStatement\",\"body\":[{\"type\":\"PrintStatement\",\"expressions\":[{\"type\":\"StringLiteral\",\"value\":\"puff...\"}]}]}}`,
  },
  {
    name: "print statement test with number printing, should success",
    input: `
      🤚
      ✏️ 478;
      🤚
    `,
    output: `{\"type\":\"Program\",\"body\":{\"type\":\"InitStatement\",\"body\":[{\"type\":\"PrintStatement\",\"expressions\":[{\"type\":\"NumericLiteral\",\"value\":478}]}]}}`,
  },
  {
    name: "print statement test with boolean printing, should success",
    input: `
      🤚
      ✏️ true, false;
      🤚
    `,
    output: `{\"type\":\"Program\",\"body\":{\"type\":\"InitStatement\",\"body\":[{\"type\":\"PrintStatement\",\"expressions\":[{\"type\":\"BooleanLiteral\",\"value\":\"true\"},{\"type\":\"BooleanLiteral\",\"value\":\"false\"}]}]}}`,
  },
  {
    name: "print statement test with identifier printing, should success",
    input: `
      🤚
      ✏️ a, b, c;
      🤚
    `,
    output: `{\"type\":\"Program\",\"body\":{\"type\":\"InitStatement\",\"body\":[{\"type\":\"PrintStatement\",\"expressions\":[{\"type\":\"IdentifierExpression\",\"name\":\"a\"},{\"type\":\"IdentifierExpression\",\"name\":\"b\"},{\"type\":\"IdentifierExpression\",\"name\":\"c\"}]}]}}`,
  },
  {
    name: "print statement test with 🫢 printing, should success",
    input: `
      🤚
      ✏️ 🫢;
      🤚
    `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"PrintStatement","expressions":[{"type":"NullLiteral","value":"🫢"}]}]}}`,
  },
  {
    name: "print statement test with variable 🫢 printing, should success",
    input: `
      🤚
      👉 a = 🫢;
      ✏️ a;
      🤚
    `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"VariableStatement","declarations":[{"type":"VariableDeclaration","id":{"type":"IdentifierExpression","name":"a"},"init":{"type":"NullLiteral","value":"🫢"}}]},{"type":"PrintStatement","expressions":[{"type":"IdentifierExpression","name":"a"}]}]}}`,
  },
  {
    name: "print statement test with logical AND, should success",
    input: `
      🤚
      ✏️ a && b;
      🤚
    `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"PrintStatement","expressions":[{"type":"LogicalExpression","operator":"&&","left":{"type":"IdentifierExpression","name":"a"},"right":{"type":"IdentifierExpression","name":"b"}}]}]}}`,
  },
  {
    name: "print statement test with assignment, should success",
    input: `
      🤚
      ✏️ a = 9;
      🤚
    `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"PrintStatement","expressions":[{"type":"AssignmentExpression","operator":"=","left":{"type":"IdentifierExpression","name":"a"},"right":{"type":"NumericLiteral","value":9}}]}]}}`,
  },
  {
    name: "print statement test with logical OR, should success",
    input: `
      🤚
      ✏️ 9 || 90;
      🤚
    `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"PrintStatement","expressions":[{"type":"LogicalExpression","operator":"||","left":{"type":"NumericLiteral","value":9},"right":{"type":"NumericLiteral","value":90}}]}]}}`,
  },
  {
    name: "print statement test with equality operator, should success",
    input: `
      🤚
      ✏️ 9 == 90;
      🤚
    `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"PrintStatement","expressions":[{"type":"BinaryExpression","operator":"==","left":{"type":"NumericLiteral","value":9},"right":{"type":"NumericLiteral","value":90}}]}]}}`,
  },
  // variable statement test
  {
    name: "variable statement test with basic variable declaration, should success",
    input: `
      🤚
      👉 a, b, c;
      🤚
    `,
    output: `{\"type\":\"Program\",\"body\":{\"type\":\"InitStatement\",\"body\":[{\"type\":\"VariableStatement\",\"declarations\":[{\"type\":\"VariableDeclaration\",\"id\":{\"type\":\"IdentifierExpression\",\"name\":\"a\"},\"init\":{\"type\":\"NullLiteral\",\"value\":\"🫢\"}},{\"type\":\"VariableDeclaration\",\"id\":{\"type\":\"IdentifierExpression\",\"name\":\"b\"},\"init\":{\"type\":\"NullLiteral\",\"value\":\"🫢\"}},{\"type\":\"VariableDeclaration\",\"id\":{\"type\":\"IdentifierExpression\",\"name\":\"c\"},\"init\":{\"type\":\"NullLiteral\",\"value\":\"🫢\"}}]}]}}`,
  },
  {
    name: "variable statement test with basic variable declaration and initialisation, should success",
    input: `
      🤚
      👉 a = 10, b;
      🤚
    `,
    output: `{\"type\":\"Program\",\"body\":{\"type\":\"InitStatement\",\"body\":[{\"type\":\"VariableStatement\",\"declarations\":[{\"type\":\"VariableDeclaration\",\"id\":{\"type\":\"IdentifierExpression\",\"name\":\"a\"},\"init\":{\"type\":\"NumericLiteral\",\"value\":10}},{\"type\":\"VariableDeclaration\",\"id\":{\"type\":\"IdentifierExpression\",\"name\":\"b\"},\"init\":{\"type\":\"NullLiteral\",\"value\":\"🫢\"}}]}]}}`,
  },
  {
    name: "variable statement test with multiple variable initialisation, should success",
    input: `
      🤚
      👉 a = 10, b = 5;
      🤚
    `,
    output: `{\"type\":\"Program\",\"body\":{\"type\":\"InitStatement\",\"body\":[{\"type\":\"VariableStatement\",\"declarations\":[{\"type\":\"VariableDeclaration\",\"id\":{\"type\":\"IdentifierExpression\",\"name\":\"a\"},\"init\":{\"type\":\"NumericLiteral\",\"value\":10}},{\"type\":\"VariableDeclaration\",\"id\":{\"type\":\"IdentifierExpression\",\"name\":\"b\"},\"init\":{\"type\":\"NumericLiteral\",\"value\":5}}]}]}}`,
  },
  {
    name: "variable statement test with multiple variable initialisation with same value, should success",
    input: `
      🤚
      👉 a = b = 5;
      🤚
    `,
    output: `{\"type\":\"Program\",\"body\":{\"type\":\"InitStatement\",\"body\":[{\"type\":\"VariableStatement\",\"declarations\":[{\"type\":\"VariableDeclaration\",\"id\":{\"type\":\"IdentifierExpression\",\"name\":\"a\"},\"init\":{\"type\":\"AssignmentExpression\",\"operator\":\"=\",\"left\":{\"type\":\"IdentifierExpression\",\"name\":\"b\"},\"right\":{\"type\":\"NumericLiteral\",\"value\":5}}}]}]}}`,
  },
  {
    name: "variable statement test with variable initialisation with some expression, should success",
    input: `
      🤚
      👉 a = 7 + 90;
      🤚
    `,
    output: `{\"type\":\"Program\",\"body\":{\"type\":\"InitStatement\",\"body\":[{\"type\":\"VariableStatement\",\"declarations\":[{\"type\":\"VariableDeclaration\",\"id\":{\"type\":\"IdentifierExpression\",\"name\":\"a\"},\"init\":{\"type\":\"BinaryExpression\",\"operator\":\"+\",\"left\":{\"type\":\"NumericLiteral\",\"value\":7},\"right\":{\"type\":\"NumericLiteral\",\"value\":90}}}]}]}}`,
  },
  {
    name: "variable statement test with variable initialisation with 🫢 literal, should success",
    input: `
      🤚
      👉 a = 🫢;
      🤚
    `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"VariableStatement","declarations":[{"type":"VariableDeclaration","id":{"type":"IdentifierExpression","name":"a"},"init":{"type":"NullLiteral","value":"🫢"}}]}]}}`,
  },
  {
    name: "variable statement test with variable initialisation with 🫢 literal, should success",
    input: `
      🤚
      👉 a = 🫢;
      🤚
    `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"VariableStatement","declarations":[{"type":"VariableDeclaration","id":{"type":"IdentifierExpression","name":"a"},"init":{"type":"NullLiteral","value":"🫢"}}]}]}}`,
  },
];

export const ExpressionsTests = [
  // assignment expression tests
  {
    name: "simple assignment expression test with only one identifer, should success",
    input: `
      🤚
      a = 4;
      🤚
    `,
    output: `{\"type\":\"Program\",\"body\":{\"type\":\"InitStatement\",\"body\":[{\"type\":\"ExpressionStatement\",\"expression\":{\"type\":\"AssignmentExpression\",\"operator\":\"=\",\"left\":{\"type\":\"IdentifierExpression\",\"name\":\"a\"},\"right\":{\"type\":\"NumericLiteral\",\"value\":4}}}]}}`,
  },
  {
    name: "complex assignment expression test with only one identifer, should success",
    input: `
      🤚
      a *= 4;
      🤚
    `,
    output: `{\"type\":\"Program\",\"body\":{\"type\":\"InitStatement\",\"body\":[{\"type\":\"ExpressionStatement\",\"expression\":{\"type\":\"AssignmentExpression\",\"operator\":\"*=\",\"left\":{\"type\":\"IdentifierExpression\",\"name\":\"a\"},\"right\":{\"type\":\"NumericLiteral\",\"value\":4}}}]}}`,
  },
  {
    name: "float number assignment expression test, should success",
    input: `
      🤚
      a = 1.2;
      🤚
    `,
    output: `{\"type\":\"Program\",\"body\":{\"type\":\"InitStatement\",\"body\":[{\"type\":\"ExpressionStatement\",\"expression\":{\"type\":\"AssignmentExpression\",\"operator\":\"=\",\"left\":{\"type\":\"IdentifierExpression\",\"name\":\"a\"},\"right\":{\"type\":\"NumericLiteral\",\"value\":1.2}}}]}}`,
  },
  {
    name: "float number assignment expression test with negative number, should success",
    input: `
      🤚
      a = -1.2;
      🤚
    `,
    output: `{\"type\":\"Program\",\"body\":{\"type\":\"InitStatement\",\"body\":[{\"type\":\"ExpressionStatement\",\"expression\":{\"type\":\"AssignmentExpression\",\"operator\":\"=\",\"left\":{\"type\":\"IdentifierExpression\",\"name\":\"a\"},\"right\":{\"type\":\"NumericLiteral\",\"value\":-1.2}}}]}}`,
  },
  {
    name: "float number assignment expression test without digits before decimal point, should success",
    input: `
      🤚
      a = .6;
      🤚
    `,
    output: `{\"type\":\"Program\",\"body\":{\"type\":\"InitStatement\",\"body\":[{\"type\":\"ExpressionStatement\",\"expression\":{\"type\":\"AssignmentExpression\",\"operator\":\"=\",\"left\":{\"type\":\"IdentifierExpression\",\"name\":\"a\"},\"right\":{\"type\":\"NumericLiteral\",\"value\":0.6}}}]}}`,
  },
  {
    name: "float number assignment expression test with negative number and without digits before decimal point, should success",
    input: `
      🤚
      a = -.6;
      🤚
    `,
    output: `{\"type\":\"Program\",\"body\":{\"type\":\"InitStatement\",\"body\":[{\"type\":\"ExpressionStatement\",\"expression\":{\"type\":\"AssignmentExpression\",\"operator\":\"=\",\"left\":{\"type\":\"IdentifierExpression\",\"name\":\"a\"},\"right\":{\"type\":\"NumericLiteral\",\"value\":-0.6}}}]}}`,
  },
  // paranthesized expression tests
  {
    name: "paranthesized expression test with one parenthesis and simple expression, should success",
    input: `
      🤚
      (a + 4);
      🤚
    `,
    output: `{\"type\":\"Program\",\"body\":{\"type\":\"InitStatement\",\"body\":[{\"type\":\"ExpressionStatement\",\"expression\":{\"type\":\"BinaryExpression\",\"operator\":\"+\",\"left\":{\"type\":\"IdentifierExpression\",\"name\":\"a\"},\"right\":{\"type\":\"NumericLiteral\",\"value\":4}}}]}}`,
  },
  {
    name: "paranthesized expression test with one parenthesis and complex expression, should success",
    input: `
      🤚
      (a + 4) * 10 + (5 - 4);
      🤚
    `,
    output: `{\"type\":\"Program\",\"body\":{\"type\":\"InitStatement\",\"body\":[{\"type\":\"ExpressionStatement\",\"expression\":{\"type\":\"BinaryExpression\",\"operator\":\"+\",\"left\":{\"type\":\"BinaryExpression\",\"operator\":\"*\",\"left\":{\"type\":\"BinaryExpression\",\"operator\":\"+\",\"left\":{\"type\":\"IdentifierExpression\",\"name\":\"a\"},\"right\":{\"type\":\"NumericLiteral\",\"value\":4}},\"right\":{\"type\":\"NumericLiteral\",\"value\":10}},\"right\":{\"type\":\"BinaryExpression\",\"operator\":\"-\",\"left\":{\"type\":\"NumericLiteral\",\"value\":5},\"right\":{\"type\":\"NumericLiteral\",\"value\":4}}}}]}}`,
  },
  {
    name: "paranthesized expression test with multiple parenthesis, should success",
    input: `
      🤚
      (a * (4 + 8) + 10);
      🤚
    `,
    output: `{\"type\":\"Program\",\"body\":{\"type\":\"InitStatement\",\"body\":[{\"type\":\"ExpressionStatement\",\"expression\":{\"type\":\"BinaryExpression\",\"operator\":\"+\",\"left\":{\"type\":\"BinaryExpression\",\"operator\":\"*\",\"left\":{\"type\":\"IdentifierExpression\",\"name\":\"a\"},\"right\":{\"type\":\"BinaryExpression\",\"operator\":\"+\",\"left\":{\"type\":\"NumericLiteral\",\"value\":4},\"right\":{\"type\":\"NumericLiteral\",\"value\":8}}},\"right\":{\"type\":\"NumericLiteral\",\"value\":10}}}]}}`,
  },
  {
    name: "paranthesized expression test with assignment expression, should success",
    input: `
    🤚
    (x = 9);
    🤚;
    `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"ExpressionStatement","expression":{"type":"AssignmentExpression","operator":"=","left":{"type":"IdentifierExpression","name":"x"},"right":{"type":"NumericLiteral","value":9}}}]}}`,
  },
  {
    name: "paranthesized expression test with assignment expression, should success",
    input: `
    🤚
    (x >= 9);
    🤚;
    `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"ExpressionStatement","expression":{"type":"BinaryExpression","operator":">=","left":{"type":"IdentifierExpression","name":"x"},"right":{"type":"NumericLiteral","value":9}}}]}}`,
  },
  // 🫢 and boolean expression test
  {
    name: "complex expression test with one 🫢 operand, should success",
    input: `
        🤚
        (🫢 * (4 + 8 + 10));
        🤚
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"ExpressionStatement","expression":{"type":"BinaryExpression","operator":"*","left":{"type":"NullLiteral","value":"🫢"},"right":{"type":"BinaryExpression","operator":"+","left":{"type":"BinaryExpression","operator":"+","left":{"type":"NumericLiteral","value":4},"right":{"type":"NumericLiteral","value":8}},"right":{"type":"NumericLiteral","value":10}}}}]}}`,
  },
  {
    name: "complex expression test with one 🫢 operand and one boolean operand, should success",
    input: `
        🤚
        (🫢 * (true + 8 + 10));
        🤚
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"ExpressionStatement","expression":{"type":"BinaryExpression","operator":"*","left":{"type":"NullLiteral","value":"🫢"},"right":{"type":"BinaryExpression","operator":"+","left":{"type":"BinaryExpression","operator":"+","left":{"type":"BooleanLiteral","value":"true"},"right":{"type":"NumericLiteral","value":8}},"right":{"type":"NumericLiteral","value":10}}}}]}}`,
  },
  {
    name: "complex expression test with one 🫢 operand and one boolean operand - 2, should success",
    input: `
        🤚
        (true * (🫢 + 8 + 10));
        🤚
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"ExpressionStatement","expression":{"type":"BinaryExpression","operator":"*","left":{"type":"BooleanLiteral","value":"true"},"right":{"type":"BinaryExpression","operator":"+","left":{"type":"BinaryExpression","operator":"+","left":{"type":"NullLiteral","value":"🫢"},"right":{"type":"NumericLiteral","value":8}},"right":{"type":"NumericLiteral","value":10}}}}]}}`,
  },
  {
    name: "complex expression test with one 🫢 operand and one boolean operand - 3, should success",
    input: `
        🤚
        (🫢 + true);
        🤚
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"ExpressionStatement","expression":{"type":"BinaryExpression","operator":"+","left":{"type":"NullLiteral","value":"🫢"},"right":{"type":"BooleanLiteral","value":"true"}}}]}}`,
  },
  {
    name: "complex expression test with one boolean operand, should success",
    input: `
        🤚
        (true * (4 + 8 + 10));
        🤚
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"ExpressionStatement","expression":{"type":"BinaryExpression","operator":"*","left":{"type":"BooleanLiteral","value":"true"},"right":{"type":"BinaryExpression","operator":"+","left":{"type":"BinaryExpression","operator":"+","left":{"type":"NumericLiteral","value":4},"right":{"type":"NumericLiteral","value":8}},"right":{"type":"NumericLiteral","value":10}}}}]}}`,
  },
  {
    name: "expression test with only boolean operand, should success",
    input: `
        🤚
        true + false;
        🤚
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"ExpressionStatement","expression":{"type":"BinaryExpression","operator":"+","left":{"type":"BooleanLiteral","value":"true"},"right":{"type":"BooleanLiteral","value":"false"}}}]}}`,
  },
  {
    name: "multiplicative expression test with only boolean operand, should success",
    input: `
        🤚
        true * false;
        🤚
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"ExpressionStatement","expression":{"type":"BinaryExpression","operator":"*","left":{"type":"BooleanLiteral","value":"true"},"right":{"type":"BooleanLiteral","value":"false"}}}]}}`,
  },
  {
    name: "division expression test with only boolean operand, should success",
    input: `
        🤚
        true / false;
        🤚
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"ExpressionStatement","expression":{"type":"BinaryExpression","operator":"/","left":{"type":"BooleanLiteral","value":"true"},"right":{"type":"BooleanLiteral","value":"false"}}}]}}`,
  },
  {
    name: "print statement test with expression containing 🫢, should success",
    input: `
        🤚
        ✏️ 🫢 + 5;
        🤚;
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"PrintStatement","expressions":[{"type":"BinaryExpression","operator":"+","left":{"type":"NullLiteral","value":"🫢"},"right":{"type":"NumericLiteral","value":5}}]}]}}`,
  },
  // logical expression test
  {
    name: `logical "&&" test with true false, should success`,
    input: `
        🤚
        👀 (true && false);
        🤚;
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"IfStatement","test":{"type":"LogicalExpression","operator":"&&","left":{"type":"BooleanLiteral","value":"true"},"right":{"type":"BooleanLiteral","value":"false"}},"consequent":{"type":"EmptyStatement"},"alternates":[]}]}}`,
  },
  {
    name: `logical "&&" test with expression, should success`,
    input: `
        🤚
        👀 (a + b && d);
        🤚;
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"IfStatement","test":{"type":"LogicalExpression","operator":"&&","left":{"type":"BinaryExpression","operator":"+","left":{"type":"IdentifierExpression","name":"a"},"right":{"type":"IdentifierExpression","name":"b"}},"right":{"type":"IdentifierExpression","name":"d"}},"consequent":{"type":"EmptyStatement"},"alternates":[]}]}}`,
  },
  {
    name: `logical "&&" test in variable declaration, should success`,
    input: `
        🤚
        👉 a = b && d;
        🤚;
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"VariableStatement","declarations":[{"type":"VariableDeclaration","id":{"type":"IdentifierExpression","name":"a"},"init":{"type":"LogicalExpression","operator":"&&","left":{"type":"IdentifierExpression","name":"b"},"right":{"type":"IdentifierExpression","name":"d"}}}]}]}}`,
  },
  // logical OR
  {
    name: `logical "||" test with true false, should success`,
    input: `
        🤚
        👀 (true || false);
        🤚;
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"IfStatement","test":{"type":"LogicalExpression","operator":"||","left":{"type":"BooleanLiteral","value":"true"},"right":{"type":"BooleanLiteral","value":"false"}},"consequent":{"type":"EmptyStatement"},"alternates":[]}]}}`,
  },
  {
    name: `logical "||" test with expression, should success`,
    input: `
        🤚
        👀 (a + b || d);
        🤚;
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"IfStatement","test":{"type":"LogicalExpression","operator":"||","left":{"type":"BinaryExpression","operator":"+","left":{"type":"IdentifierExpression","name":"a"},"right":{"type":"IdentifierExpression","name":"b"}},"right":{"type":"IdentifierExpression","name":"d"}},"consequent":{"type":"EmptyStatement"},"alternates":[]}]}}`,
  },
  {
    name: `logical "||" test in variable declaration, should success`,
    input: `
        🤚
        👉 a = b || d;
        🤚;
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"VariableStatement","declarations":[{"type":"VariableDeclaration","id":{"type":"IdentifierExpression","name":"a"},"init":{"type":"LogicalExpression","operator":"||","left":{"type":"IdentifierExpression","name":"b"},"right":{"type":"IdentifierExpression","name":"d"}}}]}]}}`,
  },
  {
    name: `identifier name starting with "true", should success`,
    input: `
      🤚
      👉 trueValue = true;
      🤚
    `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"VariableStatement","declarations":[{"type":"VariableDeclaration","id":{"type":"IdentifierExpression","name":"trueValue"},"init":{"type":"BooleanLiteral","value":"true"}}]}]}}`,
  },
  {
    name: `identifier name starting with "false", should success`,
    input: `
      🤚
      👉 falseValue = 10;
      🤚
    `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"VariableStatement","declarations":[{"type":"VariableDeclaration","id":{"type":"IdentifierExpression","name":"falseValue"},"init":{"type":"NumericLiteral","value":10}}]}]}}`,
  },
];

export const IfStatementTests = [
  {
    name: "if statement success test - 1: only if",
    input: `
    🤚
    👀 (true) {
    }
    🤚;
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"IfStatement","test":{"type":"BooleanLiteral","value":"true"},"consequent":{"type":"BlockStatement","body":[]},"alternates":[]}]}}`,
  },
  {
    name: "if statement success test - 2: if else both",
    input: `
    🤚
    👀 (true) {
    } 👁️ {

    }
    🤚;
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"IfStatement","test":{"type":"BooleanLiteral","value":"true"},"consequent":{"type":"BlockStatement","body":[]},"alternates":[{"type":"BlockStatement","body":[]}]}]}}`,
  },
  {
    name: "if statement success test - 3: if only with comarison condn",
    input: `
    🤚
    👉 x = 9;
    👀 (x >= 9) {
      x = 5;
    } 
    🤚;
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"VariableStatement","declarations":[{"type":"VariableDeclaration","id":{"type":"IdentifierExpression","name":"x"},"init":{"type":"NumericLiteral","value":9}}]},{"type":"IfStatement","test":{"type":"BinaryExpression","operator":">=","left":{"type":"IdentifierExpression","name":"x"},"right":{"type":"NumericLiteral","value":9}},"consequent":{"type":"BlockStatement","body":[{"type":"ExpressionStatement","expression":{"type":"AssignmentExpression","operator":"=","left":{"type":"IdentifierExpression","name":"x"},"right":{"type":"NumericLiteral","value":5}}}]},"alternates":[]}]}}`,
  },
  {
    name: "if statement success test - 4: if only with equality condn",
    input: `
    🤚
    👉 x = 9;
    👀 (x == 9) {
      x = 5;
    } 
    🤚;
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"VariableStatement","declarations":[{"type":"VariableDeclaration","id":{"type":"IdentifierExpression","name":"x"},"init":{"type":"NumericLiteral","value":9}}]},{"type":"IfStatement","test":{"type":"BinaryExpression","operator":"==","left":{"type":"IdentifierExpression","name":"x"},"right":{"type":"NumericLiteral","value":9}},"consequent":{"type":"BlockStatement","body":[{"type":"ExpressionStatement","expression":{"type":"AssignmentExpression","operator":"=","left":{"type":"IdentifierExpression","name":"x"},"right":{"type":"NumericLiteral","value":5}}}]},"alternates":[]}]}}`,
  },
  {
    name: "if statement success test - 4: if only with equality condn",
    input: `
    🤚
    👉 x = 9;
    👀 (x == 9) {
      x = 5;
    } 
    🤚;
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"VariableStatement","declarations":[{"type":"VariableDeclaration","id":{"type":"IdentifierExpression","name":"x"},"init":{"type":"NumericLiteral","value":9}}]},{"type":"IfStatement","test":{"type":"BinaryExpression","operator":"==","left":{"type":"IdentifierExpression","name":"x"},"right":{"type":"NumericLiteral","value":9}},"consequent":{"type":"BlockStatement","body":[{"type":"ExpressionStatement","expression":{"type":"AssignmentExpression","operator":"=","left":{"type":"IdentifierExpression","name":"x"},"right":{"type":"NumericLiteral","value":5}}}]},"alternates":[]}]}}`,
  },
  {
    name: "if statement success test - 5: if only with inequality condn",
    input: `
    🤚
    👉 x = 9;
    👀 (x != 9) {
      x = 5;
    } 
    🤚;
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"VariableStatement","declarations":[{"type":"VariableDeclaration","id":{"type":"IdentifierExpression","name":"x"},"init":{"type":"NumericLiteral","value":9}}]},{"type":"IfStatement","test":{"type":"BinaryExpression","operator":"!=","left":{"type":"IdentifierExpression","name":"x"},"right":{"type":"NumericLiteral","value":9}},"consequent":{"type":"BlockStatement","body":[{"type":"ExpressionStatement","expression":{"type":"AssignmentExpression","operator":"=","left":{"type":"IdentifierExpression","name":"x"},"right":{"type":"NumericLiteral","value":5}}}]},"alternates":[]}]}}`,
  },
  {
    name: "if statement success test - 6: else with only expression statement",
    input: `
    🤚
    👉 x = 9;
    👀 (x != 9) {
      x = 5;
    } 👁️ (x >= 9);
    🤚;
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"VariableStatement","declarations":[{"type":"VariableDeclaration","id":{"type":"IdentifierExpression","name":"x"},"init":{"type":"NumericLiteral","value":9}}]},{"type":"IfStatement","test":{"type":"BinaryExpression","operator":"!=","left":{"type":"IdentifierExpression","name":"x"},"right":{"type":"NumericLiteral","value":9}},"consequent":{"type":"BlockStatement","body":[{"type":"ExpressionStatement","expression":{"type":"AssignmentExpression","operator":"=","left":{"type":"IdentifierExpression","name":"x"},"right":{"type":"NumericLiteral","value":5}}}]},"alternates":[{"type":"ExpressionStatement","expression":{"type":"BinaryExpression","operator":">=","left":{"type":"IdentifierExpression","name":"x"},"right":{"type":"NumericLiteral","value":9}}}]}]}}`,
  },
  {
    name: "if statement success test - 7: with block",
    input: `
    🤚
    👉 x = 9;
    👀 (x != 9)
      x = 5;
    👁️ (x >= 9);
    🤚;
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"VariableStatement","declarations":[{"type":"VariableDeclaration","id":{"type":"IdentifierExpression","name":"x"},"init":{"type":"NumericLiteral","value":9}}]},{"type":"IfStatement","test":{"type":"BinaryExpression","operator":"!=","left":{"type":"IdentifierExpression","name":"x"},"right":{"type":"NumericLiteral","value":9}},"consequent":{"type":"ExpressionStatement","expression":{"type":"AssignmentExpression","operator":"=","left":{"type":"IdentifierExpression","name":"x"},"right":{"type":"NumericLiteral","value":5}}},"alternates":[{"type":"ExpressionStatement","expression":{"type":"BinaryExpression","operator":">=","left":{"type":"IdentifierExpression","name":"x"},"right":{"type":"NumericLiteral","value":9}}}]}]}}`,
  },
  {
    name: "else-if statement success test - 1: if-else-if one level ladder",
    input: `
    🤚
    👀 (true) {
    } 🧿 (true) {
    }
    🤚;
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"IfStatement","test":{"type":"BooleanLiteral","value":"true"},"consequent":{"type":"BlockStatement","body":[]},"alternates":[{"type":"IfStatement","test":{"type":"BooleanLiteral","value":"true"},"consequent":{"type":"BlockStatement","body":[]}}]}]}}`
  },
  {
    name: "else-if statement success test - 2: if-else-if one level ladder with else",
    input: `
    🤚
    👀 (true) {
    } 🧿 (true) {
    } 👁️ {
    }
    🤚;
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"IfStatement","test":{"type":"BooleanLiteral","value":"true"},"consequent":{"type":"BlockStatement","body":[]},"alternates":[{"type":"IfStatement","test":{"type":"BooleanLiteral","value":"true"},"consequent":{"type":"BlockStatement","body":[]}},{"type":"BlockStatement","body":[]}]}]}}`
  },
  {
    name: "else-if statement success test - 3: if-else-if multiple levels ladder",
    input: `
    🤚
    👀 (true) {
    } 🧿 (true) {
    } 🧿 (true) {
    } 🧿 (true) {
    } 🧿 (true) {
    }
    🤚;
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"IfStatement","test":{"type":"BooleanLiteral","value":"true"},"consequent":{"type":"BlockStatement","body":[]},"alternates":[{"type":"IfStatement","test":{"type":"BooleanLiteral","value":"true"},"consequent":{"type":"BlockStatement","body":[]}},{"type":"IfStatement","test":{"type":"BooleanLiteral","value":"true"},"consequent":{"type":"BlockStatement","body":[]}},{"type":"IfStatement","test":{"type":"BooleanLiteral","value":"true"},"consequent":{"type":"BlockStatement","body":[]}},{"type":"IfStatement","test":{"type":"BooleanLiteral","value":"true"},"consequent":{"type":"BlockStatement","body":[]}}]}]}}`
  },
  {
    name: "else-if statement success test - 4: if-else-if multiple levels ladder with else",
    input: `
    🤚
    👀 (true) {
    } 🧿 (true) {
    } 🧿 (true) {
    } 🧿 (true) {
    } 🧿 (true) {
    } 👁️ {
    }
    🤚;
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"IfStatement","test":{"type":"BooleanLiteral","value":"true"},"consequent":{"type":"BlockStatement","body":[]},"alternates":[{"type":"IfStatement","test":{"type":"BooleanLiteral","value":"true"},"consequent":{"type":"BlockStatement","body":[]}},{"type":"IfStatement","test":{"type":"BooleanLiteral","value":"true"},"consequent":{"type":"BlockStatement","body":[]}},{"type":"IfStatement","test":{"type":"BooleanLiteral","value":"true"},"consequent":{"type":"BlockStatement","body":[]}},{"type":"IfStatement","test":{"type":"BooleanLiteral","value":"true"},"consequent":{"type":"BlockStatement","body":[]}},{"type":"BlockStatement","body":[]}]}]}}`
  },
];

export const WhileStatementTests = [
  {
    name: "while statement success test: only if",
    input: `
    🤚
    🔁 (true) {
    }
    🤚;
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"WhileStatement","test":{"type":"BooleanLiteral","value":"true"},"body":{"type":"BlockStatement","body":[]}}]}}`,
  },
  {
    name: "while statement success test: with some body",
    input: `
    🤚
    🔁 (x > 9) {
      ✏️ "hello";
    }
    🤚;
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"WhileStatement","test":{"type":"BinaryExpression","operator":">","left":{"type":"IdentifierExpression","name":"x"},"right":{"type":"NumericLiteral","value":9}},"body":{"type":"BlockStatement","body":[{"type":"PrintStatement","expressions":[{"type":"StringLiteral","value":"hello"}]}]}}]}}`,
  },
  {
    name: "while statement success test: with single statement",
    input: `
    🤚
    🔁 (x > 9)
      ✏️ "hello";
    🤚;
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"WhileStatement","test":{"type":"BinaryExpression","operator":">","left":{"type":"IdentifierExpression","name":"x"},"right":{"type":"NumericLiteral","value":9}},"body":{"type":"PrintStatement","expressions":[{"type":"StringLiteral","value":"hello"}]}}]}}`,
  },
  {
    name: "while statement success test: with single statement as body and statement outside of body",
    input: `
    🤚
    🔁 (x > 9)
      ✏️ "hello";
    👉 a = 90;
    🤚;
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"WhileStatement","test":{"type":"BinaryExpression","operator":">","left":{"type":"IdentifierExpression","name":"x"},"right":{"type":"NumericLiteral","value":9}},"body":{"type":"PrintStatement","expressions":[{"type":"StringLiteral","value":"hello"}]}},{"type":"VariableStatement","declarations":[{"type":"VariableDeclaration","id":{"type":"IdentifierExpression","name":"a"},"init":{"type":"NumericLiteral","value":90}}]}]}}`,
  },
  {
    name: "while statement success test: with break statement",
    input: `
    🤚
    🔁 (x > 9) {
      🙏🏻;
    }
    👉 a = 90;
    🤚;
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"WhileStatement","test":{"type":"BinaryExpression","operator":">","left":{"type":"IdentifierExpression","name":"x"},"right":{"type":"NumericLiteral","value":9}},"body":{"type":"BlockStatement","body":[{"type":"BreakStatement"},{"type":"EmptyStatement"}]}},{"type":"VariableStatement","declarations":[{"type":"VariableDeclaration","id":{"type":"IdentifierExpression","name":"a"},"init":{"type":"NumericLiteral","value":90}}]}]}}`,
  },
  {
    name: "while statement success test: with continue statement",
    input: `
    🤚
    🔁 (x > 9) {
      💔;
    }
    👉 a = 90;
    🤚;
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"WhileStatement","test":{"type":"BinaryExpression","operator":">","left":{"type":"IdentifierExpression","name":"x"},"right":{"type":"NumericLiteral","value":9}},"body":{"type":"BlockStatement","body":[{"type":"ContinueStatement"},{"type":"EmptyStatement"}]}},{"type":"VariableStatement","declarations":[{"type":"VariableDeclaration","id":{"type":"IdentifierExpression","name":"a"},"init":{"type":"NumericLiteral","value":90}}]}]}}`,
  },
];
