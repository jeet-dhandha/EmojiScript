import { RuntimeException } from "../../src";
import Interpreter from "../../src/components/interpreter";
import InterpreterModule from "../../src/module/interpreterModule";

import { NegativeTestCases } from "./negativeTestsProvider";
import {
  NoOutputPositiveTests,
  WithOutputPositiveTests
} from "./positiveTestsProvider";


let interpreter: Interpreter = InterpreterModule.getInterpreter();

console.log = jest.fn();

beforeEach(() => {
  jest.clearAllMocks();
});

NoOutputPositiveTests.forEach((testCase) => {
  test(testCase.name, () => {
    expect(() => interpreter.interpret(testCase.input)).not.toThrowError();
  });
});

WithOutputPositiveTests.forEach((testCase) => {
  test(testCase.name, () => {
    expect(() => interpreter.interpret(testCase.input)).not.toThrowError();

    expect(console.log).toHaveBeenCalledWith(testCase.output);
  });
});

NegativeTestCases.forEach((testCase) => {
  test(testCase.name, () => {
    expect(() => interpreter.interpret(testCase.input)).toThrowError(
      testCase.exception
    );
  });
});

test("test redeclaring & printing variables in different scopes", () => {
  expect(() =>
    interpreter.interpret(`🤚;
    👉 a = 4;
    {
      👉 a = 90;
      ✏️ a;
    }
    ✏️ a;
    🤚;`)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("90");
  expect(console.log).toHaveBeenCalledWith("4");
});

test("test assigning variable in parent scope", () => {
  expect(() =>
    interpreter.interpret(`🤚;
    👉 a = 4;
    {
      a = 90;
      ✏️ a;
    }
    ✏️ a;
    🤚;`)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("90");
  expect(console.log).toHaveBeenCalledWith("90");
});

test("test accessing variable in parent scope", () => {
  expect(() =>
    interpreter.interpret(`🤚;
    👉 a = 4;
    {
      ✏️ a;
    }
    ✏️ a;
    🤚;`)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("4");
  expect(console.log).toHaveBeenCalledWith("4");
});

test("whileStatement test with 2 times loop, should success", () => {
  expect(() =>
    interpreter.interpret(`
    🤚;
    👉 a = 0;
    🔁 (a < 2) {
      ✏️ "bhai";
      a += 1;
    }
    🤚;`)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("bhai");
  expect(console.log).toHaveBeenCalledWith("bhai");
});

test("whileStatement test with nested loops - 2, should success", () => {
  expect(() =>
    interpreter.interpret(`
    🤚;
    👉 a = 0, b = 0;
    🔁 (a < 2) {
      🔁 (b < 1) {
        ✏️ "bhai";
        b += 1;
      }
      a += 1;
    }
    🤚;
    `)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("bhai");
});

test("whileStatement test with nested loops - 3, should success", () => {
  expect(() =>
    interpreter.interpret(`
    🤚;
    👉 a = 0;
    🔁 (a < 2) {
      👉 b = 0;
      🔁 (b < 2) {
        ✏️ "bhai";
        b += 1;
        👀 (b == 1)
          🙏🏻;
      }
      a += 1;
    }
    🤚;
    `)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("bhai");
  expect(console.log).toHaveBeenCalledWith("bhai");
});


test("whileStatement test with nested loops - 4, should success", () => {
  expect(() =>
    interpreter.interpret(`
    🤚
    👉 a = 0;
    🔁 (a < 10) {
      ✏️ a;
      a += 1;
      👀 (a == 6) {
        🙏🏻;
      }
    }
    ✏️ "done";
    🤚
    `)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("0");
  expect(console.log).toHaveBeenCalledWith("1");
  expect(console.log).toHaveBeenCalledWith("2");
  expect(console.log).toHaveBeenCalledWith("3");
  expect(console.log).toHaveBeenCalledWith("4");
  expect(console.log).toHaveBeenCalledWith("5");
});

test("whileStatement test with nested loops - 5, should success", () => {
  expect(() =>
    interpreter.interpret(`
    🤚
    👉 a = 0;
    🔁 (a < 10) {
      ✏️ a;
      a += 1;
      👀 (a == 6)
        🙏🏻;
    }
    ✏️ "done";
    🤚
    `)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("0");
  expect(console.log).toHaveBeenCalledWith("1");
  expect(console.log).toHaveBeenCalledWith("2");
  expect(console.log).toHaveBeenCalledWith("3");
  expect(console.log).toHaveBeenCalledWith("4");
  expect(console.log).toHaveBeenCalledWith("5");
});

test("whileStatement test with nested loops - 6, should success", () => {
  expect(() =>
    interpreter.interpret(`
    🤚
    👉 a = 0;
    🔁 (a < 10) {
      ✏️ a;
      a += 1;
      👀 (a == 3) {
        🙏🏻;
      }
      ✏️ "2 baar hi chapunga";
    }
    ✏️ "done";
    🤚
    `)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("0");
  expect(console.log).toHaveBeenCalledWith("1");
  expect(console.log).toHaveBeenCalledWith("2");
  expect(console.log).toHaveBeenCalledWith("2 baar hi chapunga");
  expect(console.log).toHaveBeenCalledWith("2 baar hi chapunga");
});

test("whileStatement test with infinite loop, should throw runtime exception after 5000 executions", () => {
  expect(() =>
    interpreter.interpret(`
    🤚
    
    🔁 (true) {
      ✏️ "bhai";
    }
    🤚;
    
    `)
  ).toThrowError(RuntimeException);

  expect(console.log).toHaveBeenCalledTimes(5001);
  expect(console.log).toHaveBeenCalledWith("bhai");
});

test("if-else ladders one after the other, should be evaluated separately", () => {
  expect(() =>
    interpreter.interpret(`
    🤚
    👉 x = 6;
    👀 (x < 5) {
      ✏️ "x < 5";
    } 🧿 (x < 8) {
      ✏️ "x < 8";
    } 👀 (x < 4) {
      ✏️ "x < 4";
    } 👁️ {
      ✏️ "x > 4";
    }
    🤚;
    
    `)
  ).not.toThrowError();

  expect(console.log).toHaveBeenCalledWith("x < 8");
  expect(console.log).toHaveBeenCalledWith("x > 4");
});

// test("jest", () => {
//     interpreter.interpret(`
//     🤚
//     👉 a = 0;
//     🔁 (a < 10) {
//       ✏️ a;
//       a += 1;
//       👀 (a == 3) {
//         🙏🏻;
//       }
//       ✏️ "2 baar hi chapunga";
//     }
//     ✏️ "done";
//     🤚
//     `);
// });
