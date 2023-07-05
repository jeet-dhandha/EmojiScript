export const NegativeStatementTests = [
  // init statement tests
  {
    name: "only 🤚, should throw an exception",
    input: `
        🤚
      `,
    output: SyntaxError,
  },
  {
    name: "only 🤚, should throw an exception",
    input: `
        🤚
      `,
    output: SyntaxError,
  },
  {
    name: "multiple 🤚, should throw an exception",
    input: `
        🤚
        🤚
        🤚
      `,
    output: SyntaxError,
  },
  {
    name: "multiple init, should throw an exception",
    input: `
        🤚
        🤚
        🤚
        🤚
      `,
    output: SyntaxError,
  },
  // block statement tests
  {
    name: "only open curly, should throw an exception",
    input: `
        🤚
        {
        🤚
      `,
    output: SyntaxError,
  },
  {
    name: "only closed curly, should throw an exception",
    input: `
        🤚
        }
        🤚
      `,
    output: SyntaxError,
  },
  {
    name: "open curly and no other token, should throw an exception",
    input: `
        🤚
        {
      `,
    output: SyntaxError,
  },
  {
    name: "missing semi colon after expression, should throw an exception",
    input: `
        🤚
        {
          naam = 4
        }
        🤚
      `,
    output: SyntaxError,
  },
  // print statement test
  {
    name: "empty print statement, should throw an exception",
    input: `
        🤚
        ✏️ ;
        🤚
      `,
    output: SyntaxError,
  },
  {
    name: "print statement without semi colon, should throw an exception",
    input: `
        🤚
        ✏️ 478
        🤚
      `,
    output: SyntaxError,
  },
  {
    name: "print statement with space separated values, should throw an exception",
    input: `
        🤚
        ✏️ true false;
        🤚
      `,
    output: SyntaxError,
  },
  {
    name: "print statement test with unknown thing printing, should throw an exception",
    input: `
        🤚
        ✏️ ~!*;
        🤚
      `,
    output: SyntaxError,
  },
  {
    name: "print statement test with no other token, should throw an exception",
    input: `
        🤚
        ✏️ a
      `,
    output: SyntaxError,
  },
  // variable statement test
  {
    name: "variable statement test with space separated variable declaration, should throw an exception",
    input: `
        🤚
        👉 a b c;
        🤚
      `,
    output: SyntaxError,
  },
  {
    name: "variable statement test without semi colon, should throw an exception",
    input: `
        🤚
        👉 a 
        🤚
      `,
    output: SyntaxError,
  },
  {
    name: "variable statement test with no identifier token, should throw an exception",
    input: `
        🤚
        👉 ;
        🤚
      `,
    output: SyntaxError,
  },
  {
    name: "variable statement test with identifier expression and no other token, should throw an exception",
    input: `
        🤚
        👉 a, b
      `,
    output: SyntaxError,
  },
  {
    name: "variable statement test with assignment expression and no other token, should throw an exception",
    input: `
        🤚
        👉 a = 5
      `,
    output: SyntaxError,
  },
  {
    name: "variable statement test with no other token, should throw an exception",
    input: `
        🤚
        👉
      `,
    output: SyntaxError,
  },

  // while statement negative tests
  {
    name: "variable statement test with no other token, should throw an exception",
    input: `
    🤚
    🔁 (x > 9)
      `,
    output: SyntaxError,
  },
];

export const NegativeExpressionsTests = [
  // assignment expression tests
  {
    name: "simple assignment expression test without semi colon, should throw an exception",
    input: `
        🤚
        a = 4
        🤚
      `,
    output: SyntaxError,
  },
  {
    name: "complex assignment expression test with unknown assignment, should throw an exception",
    input: `
        🤚
        a *=- 4;
        🤚
      `,
    output: SyntaxError,
  },
  {
    name: "assignment expression test with invalid left hand side, should throw an exception",
    input: `
        🤚
        "hello" = 4;
        🤚
      `,
    output: SyntaxError,
  },
  {
    name: "assignment expression test with invalid left hand side 2nd, should throw an exception",
    input: `
        🤚
        5 = 890;
        🤚
      `,
    output: SyntaxError,
  },
  {
    name: "assignment expression test with no other token, should throw an exception",
    input: `
        🤚
        a = 890
      `,
    output: SyntaxError,
  },
  // multiplicative expression test
  {
    name: "multiplicative expression test with no other token, should throw an exception",
    input: `
        🤚
        6 * 5 * 
      `,
    output: SyntaxError,
  },
  // paranthesized expression tests
  {
    name: "paranthesized expression test with only open parenthesis, should throw an exception",
    input: `
        🤚
        (a + 4;
        🤚
      `,
    output: SyntaxError,
  },
  {
    name: "paranthesized expression test with only close parenthesis, should throw an exception",
    input: `
        🤚
        a + 4);
        🤚
      `,
    output: SyntaxError,
  },

  {
    name: "paranthesized expression test with only close parenthesis and no other token, should throw an exception",
    input: `
        🤚
        (
      `,
    output: SyntaxError,
  },
  {
    name: "paranthesized expression test with one close parenthesis missing, should throw an exception",
    input: `
        🤚
        (a * (4 + 8 + 10);
        🤚
      `,
    output: SyntaxError,
  },
  // logical expression test
  {
    name: "logical expression test with right operand missing, should throw an exception",
    input: `
    🤚
    👉 a = b && ;
    🤚;
      `,
    output: SyntaxError,
  },
  {
    name: "logical expression test with left operand missing, should throw an exception",
    input: `
    🤚
    👉 a = && b;
    🤚;
      `,
    output: SyntaxError,
  },
  {
    name: "logical expression test with both operand missing, should throw an exception",
    input: `
    🤚
    👀 (&&);
    🤚;
      `,
    output: SyntaxError,
  },
  // float expression test
  {
    name: "float expression test with multiple continuous decimal points - 1, should throw an exception",
    input: `
    🤚
    👉 a = 1..2;
    🤚;
      `,
    output: SyntaxError,
  },
  {
    name: "float expression test with multiple continuous decimal points - 2, should throw an exception",
    input: `
    🤚
    👉 a = ..2;
    🤚;
      `,
    output: SyntaxError,
  },
  {
    name: "float expression test with multiple decimal points at different places, should throw an exception",
    input: `
    🤚
    👉 a = 1.2.3;
    🤚;
      `,
    output: SyntaxError,
  },
];

export const IfStatementNagativeTests = [
  {
    name: "If statement test - nothing after if condition , should throw an exception",
    input: `
        🤚
        👀 (true)
      `,
    output: SyntaxError,
  },
  {
    name: "If statement test - no if condition before else , should throw an exception",
    input: `
        🤚
        👁️ {

        }
        🤚;
      `,
    output: SyntaxError,
  },
  {
    name: "If statement test - if without a condition , should throw an exception",
    input: `
        🤚
       👀 {

       }
        🤚;
      `,
    output: SyntaxError,
  },
  {
    name: "Else-if statement test - else-if ladder without if condition first , should throw an exception",
    input: `
        🤚
        🧿 (true) {
        }
        🤚;
      `,
    output: SyntaxError,
  },
  {
    name: "Else-if statement test - else-if ladder with multiple levels without if condition first , should throw an exception",
    input: `
        🤚
        🧿 (true) {
        } 🧿 (true) {
        }
        🤚;
      `,
    output: SyntaxError,
  },
  {
    name: "Else-if statement test - nothing after else-if ladder , should throw an exception",
    input: `
        🤚
        👀 (true) {

        } 🧿 (true)
        🤚;
      `,
    output: SyntaxError,
  },
  {
    name: "Else-if statement test - nothing after else-if ladder with multiple levels , should throw an exception",
    input: `
        🤚
        👀 (true) {

        } 🧿 (true) {

        } 🧿 (true)
        🤚;
      `,
    output: SyntaxError,
  },
  {
    name: "Else-if statement test - else-if without a condition , should throw an exception",
    input: `
        🤚
        👀 (true) {

        } 🧿
        🤚;
      `,
    output: SyntaxError,
  },
  {
    name: "Else-if statement test - else-if without a condition, multple levels , should throw an exception",
    input: `
        🤚
        👀 (true) {

        } 🧿 (true) {

        } 🧿
        🤚;
      `,
    output: SyntaxError,
  }
];

export const ContinueStatementNegativeTests = [
  {
    name: "Continue statement test - continue outside a loop, should throw an exception",
    input: `
        🤚
          💔
        🤚
      `,
    output: SyntaxError,
  },
]