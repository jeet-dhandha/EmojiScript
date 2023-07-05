import { RuntimeException } from "../../src";
import NallaPointerException from "../../src/exceptions/nallaPointerException";


export const NegativeTestCases = [
  {
    name: "interpreter assigning variable before declaration test, should throw an exception",
    input: `
          🤚;
          a = 4;
          🤚;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter assigning variable before declaration test with addition, should throw an exception",
    input: `
          🤚;
          a += 4;
          🤚;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter assigning variable before declaration test with subtraction, should throw an exception",
    input: `
          🤚;
          a -= 4;
          🤚;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter assigning variable before declaration test with multiplication, should throw an exception",
    input: `
          🤚;
          a -= 4;
          🤚;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter assigning variable before declaration test with division, should throw an exception",
    input: `
          🤚;
          a /= 4;
          🤚;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter assigning variable before declaration test - 2, should throw an exception",
    input: `
          🤚;
          a;
          🤚;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter adding two variables before declaration test, should throw an exception",
    input: `
          🤚;
          a + b;
          🤚;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter adding variable with constant before declaration test, should throw an exception",
    input: `
          🤚;
          a + 4;
          🤚;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter subtracting variable with constant before declaration test, should throw an exception",
    input: `
          🤚;
          a - 4;
          🤚;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter subtracting two variables before declaration test, should throw an exception",
    input: `
          🤚;
          a - b;
          🤚;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter multiplying variable with constant before declaration test, should throw an exception",
    input: `
          🤚;
          a * 4;
          🤚;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter multiplying two variables before declaration test, should throw an exception",
    input: `
          🤚;
          a * b;
          🤚;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter dividing variable with constant before declaration test, should throw an exception",
    input: `
          🤚;
          a / 4;
          🤚;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter dividing two variables before declaration test, should throw an exception",
    input: `
          🤚;
          a / b;
          🤚;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter printing variable before declaration test, should throw an exception",
    input: `
          🤚;
          ✏️ a;
          🤚;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter printing multiple variables before declaration test, should throw an exception",
    input: `
          🤚;
          ✏️ a, b;
          🤚;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter printing multiple variables with only one of them declared, should throw an exception",
    input: `
          🤚;
          👉 a = 8;
          ✏️ a, b;
          🤚;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter declaring multiple variables with chain assignment, should throw an exception",
    input: `
          🤚;
          👉 a = b = 8;
          🤚;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter re declare already declared variable, should throw an exception",
    input: `
        🤚;
        👉 a;
        a = 9;
        👉 a = 0;
        🤚;
      `,
    exception: RuntimeException,
  },
  // cases with 🫢
  {
    name: "interpreter use 🫢 variable in expression, should throw an exception",
    input: `
      🤚;
      👉 a;
      ✏️ a + 9;
      🤚;
    `,
    exception: NallaPointerException,
  },
  {
    name: "interpreter use 🫢 variable in expression - 2, should throw an exception",
    input: `
      🤚;
      👉 a = 🫢;
      ✏️ a + 9;
      🤚;
    `,
    exception: NallaPointerException,
  },
  {
    name: "interpreter use 🫢 in variable initialisation expression, should throw an exception",
    input: `
      🤚;
      👉 a = 🫢 + 80;
      🤚;
    `,
    exception: NallaPointerException,
  },
  {
    name: "interpreter use 🫢 in variable initialisation expression - 2, should throw an exception",
    input: `
      🤚;
      👉 a = 🫢 + "jam";
      🤚;
    `,
    exception: NallaPointerException,
  },
  {
    name: "interpreter use 🫢 variable in another variable initialisation expression, should throw an exception",
    input: `
      🤚;
      👉 a;
      👉 b = a + "hello";
      🤚;
    `,
    exception: NallaPointerException,
  },
  {
    name: "interpreter use 🫢 variable in complex expression, should throw an exception",
    input: `
      🤚;
      👉 a;
      👉 b = ((a*9) * a + "hello");
      🤚;
    `,
    exception: NallaPointerException,
  },
  // true - false case
  {
    name: "interpreter use true variable in expression, should throw an exception",
    input: `
      🤚;
      👉 a = true;
      ✏️ a + 9;
      🤚;
    `,
    exception: RuntimeException,
  },
  {
    name: "interpreter use false variable in expression, should throw an exception",
    input: `
      🤚;
      👉 a = false;
      ✏️ a + 9;
      🤚;
    `,
    exception: RuntimeException,
  },
  {
    name: "interpreter use true in variable initialisation expression, should throw an exception",
    input: `
      🤚;
      👉 a = true + 80;
      🤚;
    `,
    exception: RuntimeException,
  },
  {
    name: "interpreter use false in variable initialisation expression, should throw an exception",
    input: `
      🤚;
      👉 a = false + 80;
      🤚;
    `,
    exception: RuntimeException,
  },
  {
    name: "interpreter use true variable in another variable initialisation expression, should throw an exception",
    input: `
      🤚;
      👉 a = true;
      👉 b = a + "hello";
      🤚;
    `,
    exception: RuntimeException,
  },
  {
    name: "interpreter use false variable in complex expression, should throw an exception",
    input: `
      🤚;
      👉 a = false;
      👉 b = ((a*9) * a + "hello");
      🤚;
    `,
    exception: RuntimeException,
  },
  // ##########

  {
    name: "complex expression test with one 🫢 operand, should throw an exception",
    input: `
        🤚
        (🫢 * (4 + 8 + 10));
        🤚
      `,
    output: NallaPointerException,
  },
  {
    name: "complex expression test with one 🫢 operand and one boolean operand, should throw an exception",
    input: `
        🤚
        (🫢 * (true + 8 + 10));
        🤚
      `,
    output: RuntimeException,
  },
  {
    name: "complex expression test with one 🫢 operand and one boolean operand - 2, should throw 🫢 pointer exception",
    input: `
        🤚
        (true * (🫢 + 8 + 10));
        🤚
      `,
    output: NallaPointerException,
  },
  {
    name: "complex expression test with one 🫢 operand and one boolean operand - 3, should throw 🫢 pointer exception",
    input: `
        🤚
        (🫢 + true);
        🤚
      `,
    output: NallaPointerException,
  },
  {
    name: "complex expression test with one boolean operand, should throw an exception",
    input: `
        🤚
        (true * (4 + 8 + 10));
        🤚
      `,
    output: RuntimeException,
  },
  {
    name: "additive expression test with only boolean operand, should throw an exception",
    input: `
        🤚
        true + false;
        🤚
      `,
    output: RuntimeException,
  },
  {
    name: "additive expression test with only variable boolean operand, should throw an exception",
    input: `
        🤚
        👉 a = true, b = false;
        a + b;
        🤚
      `,
    output: RuntimeException,
  },
  {
    name: "multiplicative expression test with only boolean operand, should throw an exception",
    input: `
        🤚
        true * false;
        🤚
      `,
    output: RuntimeException,
  },
  {
    name: "multiplicative expression test with only variable boolean operand, should throw an exception",
    input: `
        🤚
        👉 a = true, b = false;
        a * b;
        🤚
      `,
    output: RuntimeException,
  },
  {
    name: "division expression test with only boolean operand, should throw an exception",
    input: `
        🤚
        true / false;
        🤚
      `,
    output: RuntimeException,
  },
  {
    name: "division expression test with only variable boolean operand, should throw an exception",
    input: `
        🤚
        👉 a = true, b = false;
        a / b;
        🤚
      `,
    output: RuntimeException,
  },
  {
    name: "print statement test with expression containing 🫢, should throw an exception",
    input: `
        🤚
        ✏️ 🫢 + 5;
        🤚;
      `,
    output: NallaPointerException,
  },
  {
    name: "complex assign test with expression containing 🫢, should throw an exception",
    input: `
        🤚
        👉 a;
        a *= 5;
        🤚;
      `,
    output: NallaPointerException,
  },
  {
    name: "complex assign test with expression containing true, should throw an exception",
    input: `
        🤚
        👉 a = true;
        a *= 5;
        🤚;
      `,
    output: NallaPointerException,
  },
  {
    name: "complex assign test with expression containing 🫢 - 2, should throw an exception",
    input: `
        🤚
        👉 a = 🫢;
        a /= 5;
        🤚;
      `,
    output: NallaPointerException,
  },
  // while loop negative tests
  {
    name: "infinite while loop, should throw an exception",
    input: `
        🤚
        🔁 (true) {

        }
        🤚;
      `,
    output: RuntimeException,
  },
  {
    name: "infinite condition while loop, should throw an exception",
    input: `
        🤚
        👉 a = 0;
        🔁 (a < 2) {
          ✏️ "bhai";
        }
        🤚;
      `,
    output: RuntimeException,
  },
  {
    name: "invalid use of break, should throw an exception",
    input: `
        🤚
        👉 a = 0;
        👀 (true)
          🙏🏻;
        🤚;
      `,
    output: RuntimeException,
  },
  // logical expression negative tests
  {
    name: "use of 🫢 with &&, should throw an exception",
    input: `
        🤚
        ✏️ 🫢 && 90;
        🤚;
      `,
    output: NallaPointerException,
  },
  {
    name: "use of 🫢 variable with &&, should throw an exception",
    input: `
        🤚
        👉 a;
        ✏️ a && 90;
        🤚;
      `,
    output: NallaPointerException,
  },
  // modulus operator test
  {
    name: `modulus operator test with invalid operand, should throw an exception`,
    input: `
      🤚;
      ✏️ "true" % 9;
      🤚;
    `,
    output: RuntimeException,
  },
  // continue in loop test
  {
    name: "infinite condition while loop with continue, should throw an exception",
    input: `
        🤚
        👉 a = 0;
        🔁 (a < 2) {
          💔;
          a = 5;
        }
        🤚;
      `,
    output: RuntimeException,
  },
  {
    name: "invalid use of continue, should throw an exception",
    input: `
        🤚
        👉 a = 0;
        👀 (true)
          💔
        🤚;
      `,
    output: RuntimeException,
  },
];
