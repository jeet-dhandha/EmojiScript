export const NoOutputPositiveTests = [
  // init statement tests
  {
    name: "interpreter empty init statement test, should success",
    input: `
      🤚
      🤚
    `,
  },
  {
    name: "interpreter empty init statement test with random charaters initially, should success",
    input: `
      some random characters
      random random random
      🤚
      🤚
    `,
  },
  // empty statement tests
  {
    name: "interpreter empty statement test, should success",
    input: `
      🤚
      ;
      🤚
    `,
  },
  {
    name: "interpreter multiple empty statements test, should success",
    input: `
      🤚
      ;
      ;
      ;;
      🤚
    `,
  },
  // block statement tests
  {
    name: "interpreter block statement test with empty block, should success",
    input: `
      🤚
      {};
      🤚
    `,
  },
  {
    name: "interpreter block statement test with variable statement inside, should success",
    input: `
      🤚
      {
        👉 a = 4;
      }
      🤚
    `,
  },
  // variable statement test
  {
    name: "interpreter variable statement test with basic variable declaration, should success",
    input: `
      🤚
      👉 a, b, c;
      🤚
    `,
  },
  {
    name: "interpreter variable statement test with basic variable declaration and initialisation, should success",
    input: `
      🤚
      👉 a = 10, b = "crap";
      🤚
    `,
  },
  {
    name: "interpreter variable statement test with multiple variable initialisation, should success",
    input: `
      🤚
      👉 a = 10, b = 5;
      🤚
    `,
  },
  {
    name: "interpreter variable statement test with variable initialisation with some expression, should success",
    input: `
      🤚
      👉 a = 7 + 90;
      🤚
    `,
  },
  // assignment expression tests
  {
    name: "simple assignment expression test with only one identifer, should success",
    input: `
      🤚
      👉 a = true;
      a = 4;
      🤚
    `,
  },
  {
    name: "complex assignment expression test with only one identifer, should success",
    input: `
      🤚
      👉 a = 2;
      a *= 4;
      🤚
    `,
  },
  // paranthesized expression tests
  {
    name: "paranthesized expression test with one parenthesis and simple expression, should success",
    input: `
      🤚
      👉 a = 2;
      (a + 4);
      🤚
    `,
  },
  {
    name: "paranthesized expression test with one parenthesis and complex expression, should success",
    input: `
      🤚
      👉 a = 2;
      (a + 4) * 10 + (5 - 4);
      🤚
    `,
  },
  {
    name: "paranthesized expression test with multiple parenthesis, should success",
    input: `
      🤚
      👉 a = 2;
      (a * (4 + 8) + 10);
      🤚
    `,
  },
  // if statement test
  {
    name: "paranthesized expression test with multiple parenthesis, should success",
    input: `
    🤚
    👉 x = 9;
    👀 (x != 9) {
      x = 5;
      ✏️ x;
    } 👁️ (x >= 9);
    🤚;
    `,
  },
];

export const WithOutputPositiveTests = [
  {
    name: "variable assignment test with multiple variables, should success",
    input: `
      🤚;
      👉 a , b;
      a = b = 60;
      ✏️ a, b;
      🤚
    `,
    output: "60 60",
  },
  {
    name: `binaryExpression print test with 🫢 and "==", should success`,
    input: `
      🤚;
      👉 a;
      👀 (a == 🫢) {
        ✏️ a;
      }
      🤚
    `,
    output: "🫢",
  },
  {
    name: `binaryExpression print test with 🫢 without any operator, should success`,
    input: `
      🤚;
      👉 a;
      👀 (a) {
        ✏️ a;
      } 👁️ {
        ✏️ "not 🫢";
      }
      🤚
    `,
    output: "not 🫢",
  },
  {
    name: `binaryExpression print test - comparing 🫢 with 🫢 "==", should success`,
    input: `
      🤚;
      👀 (🫢 == 🫢) {
        ✏️ "hai 🫢";
      }
      🤚
    `,
    output: "hai 🫢",
  },
  {
    name: `binaryExpression print test with comparing 🫢 with var "a", should success`,
    input: `
      🤚;
      👉 a;
      👀 (🫢 == a) {
        ✏️ "hai 🫢";
      }
      🤚
    `,
    output: "hai 🫢",
  },
  {
    name: `binaryExpression print test with comparing 🫢 with var "a" explicit initialization, should success`,
    input: `
      🤚;
      👉 a = 🫢;
      👀 (🫢 == a) {
        ✏️ "hai 🫢";
      }
      🤚
    `,
    output: "hai 🫢",
  },
  {
    name: `binaryExpression print test with comparing 🫢 with string 🫢, should success`,
    input: `
      🤚;
      👉 a = 🫢;
      👀 ("🫢" == a) {
        ✏️ "hai 🫢";
      } 👁️ {
        ✏️ "not 🫢";
      }
      🤚
    `,
    output: "not 🫢",
  },
  {
    name: `binaryExpression print test with comparing 🫢 with string 🫢, should success`,
    input: `
      🤚;
      👉 a = "🫢";
      👀 (🫢 == a) {
        ✏️ "hai 🫢";
      } 👁️ {
        ✏️ "not 🫢";
      }
      🤚
    `,
    output: "not 🫢",
  },
  {
    name: `binaryExpression print test with comparing 🫢 with string null, should success`,
    input: `
      🤚;
      👉 a = "null";
      👀 (🫢 == a) {
        ✏️ "hai 🫢";
      } 👁️ {
        ✏️ "not 🫢";
      }
      🤚
    `,
    output: "not 🫢",
  },
  {
    name: `binaryExpression print test with 🫢 var "a" & "b" - 0, should success`,
    input: `
      🤚;
      👉 a;
      👉 b;
      👀 (a == b) {
        ✏️ "hai 🫢";
      } 👁️ {
        ✏️ "nahi 🫢";
      }
      🤚
    `,
    output: "hai 🫢",
  },
  {
    name: `binaryExpression print test with 🫢 var "a" & "b" - 1, should success`,
    input: `
      🤚;
      👉 a;
      👉 b = 🫢;
      👀 (a == b) {
        ✏️ "hai 🫢";
      } 👁️ {
        ✏️ "nahi 🫢";
      }
      🤚
    `,
    output: "hai 🫢",
  },
  {
    name: `binaryExpression print test with 🫢 var "a" & "b" -2, should success`,
    input: `
      🤚;
      👉 a;
      👉 b = "🫢";
      👀 (a == b) {
        ✏️ "hai 🫢";
      } 👁️ {
        ✏️ "nahi 🫢";
      }
      🤚
    `,
    output: "nahi 🫢",
  },
  // Boolean test
  {
    name: `binaryExpression print test with boolean expression - true, should success`,
    input: `
      🤚;
      👉 a = true;
      👀 (true == a) {
        ✏️ "hai true";
      } 👁️ {
        ✏️ "nahi true";
      }
      🤚
    `,
    output: "hai true",
  },
  {
    name: `binaryExpression print test with boolean expression - false, should success`,
    input: `
      🤚;
      👉 a = false;
      👀 (false == a) {
        ✏️ "hai false";
      } 👁️ {
        ✏️ "nahi false";
      }
      🤚
    `,
    output: "hai false",
  },
  {
    name: `binaryExpression print test with boolean expression - true with string true, should success`,
    input: `
      🤚;
      👉 a = "true";
      👀 (true == a) {
        ✏️ "hai true";
      } 👁️ {
        ✏️ "nahi true";
      }
      🤚
    `,
    output: "nahi true",
  },
  {
    name: `binaryExpression print test with boolean expression - true expression, should success`,
    input: `
      🤚;
      👉 a = 7;
      👀 (true == (a > 5)) {
        ✏️ "hai true";
      } 👁️ {
        ✏️ "nahi true";
      }
      🤚
    `,
    output: "hai true",
  },
  {
    name: `binaryExpression print test with boolean expression - true expression & string "true", should success`,
    input: `
      🤚;
      👉 a = 7;
      👀 ("true" == (a > 5)) {
        ✏️ "hai true";
      } 👁️ {
        ✏️ "nahi true";
      }
      🤚
    `,
    output: "nahi true",
  },
  {
    name: `binaryExpression print test with boolean expression - true expression & two expressions, should success`,
    input: `
      🤚;
      👉 a = true;
      👀 ("true" == (a == true)) {
        ✏️ "hai true";
      } 👁️ {
        ✏️ "nahi true";
      }
      🤚
    `,
    output: "nahi true",
  },
  {
    name: `binaryExpression print test with boolean expression - true expression -3, should success`,
    input: `
      🤚;
      👉 a = true;
      👀 ((a == true) == (a == true)) {
        ✏️ "hai true";
      } 👁️ {
        ✏️ "nahi true";
      }
      🤚
    `,
    output: "hai true",
  },
  {
    name: `binaryExpression print test with boolean expression - true expression - 4, should success`,
    input: `
      🤚;
      👉 a;
      👀 ((a == 🫢) == (a == true)) {
        ✏️ "hai true";
      } 👁️ {
        ✏️ "nahi true";
      }
      🤚
    `,
    output: "nahi true",
  },
  {
    name: `binaryExpression print test with boolean expression - true expression - 5, should success`,
    input: `
      🤚;
      👉 a;
      👀 ((a == 🫢) == (a == true)) {
        ✏️ "hai true";
      } 👁️ {
        ✏️ "nahi true";
      }
      🤚
    `,
    output: "nahi true",
  },
  {
    name: `binaryExpression print test with boolean expression - true expression - 5, should success`,
    input: `
      🤚;
      👉 a;
      👉 b = false;
      👀 (a == b) {
        ✏️ "hai true";
      } 👁️ {
        ✏️ "nahi true";
      }
      🤚
    `,
    output: "nahi true",
  },
  {
    name: `binaryExpression print test with boolean expression - false variables comparison, should success`,
    input: `
      🤚;
      👉 a = false;
      👉 b = false;
      👀 (a == b) {
        ✏️ "hai false";
      } 👁️ {
        ✏️ "nahi false";
      }
      🤚
    `,
    output: "hai false",
  },
  {
    name: `binaryExpression print test with boolean expression - false variables comparison with string false, should success`,
    input: `
      🤚;
      👉 a = "false";
      👉 b = false;
      👀 (a == b) {
        ✏️ "hai false";
      } 👁️ {
        ✏️ "nahi false";
      }
      🤚
    `,
    output: "nahi false",
  },
  {
    name: "float value addition with integer value test, should success",
    input: `
      🤚
      👉 a = 1.2, b = 2;
      ✏️ a + b;
      🤚
    `,
    output: "3.2"
  },
  {
    name: "float value addition with float value value test, should success",
    input: `
      🤚
      👉 a = 1.2, b = 2.3;
      ✏️ a + b;
      🤚
    `,
    output: "3.5"
  },
  {
    name: "printStatement test with multiple expressions, should success",
    input: `
      🤚;
      👉 a = 2, b = 60;
      ✏️ (a * (4 + 8) + 10), b;
      🤚
    `,
    output: "34 60",
  },
  {
    name: "printStatement test with multiple expressions and re assigning value of one variable, should success",
    input: `
      🤚;
      👉 a = 2, b = 60;

      a = b + 3;
      ✏️ a, b;
      🤚
    `,
    output: "63 60",
  },
  {
    name: "printStatement test with multiple expressions & without any variables, should success",
    input: `
      🤚;
      ✏️ "hello", true, false;
      🤚
    `,
    output: "hello true false",
  },
  {
    name: "printStatement test with 🫢, should success",
    input: `
      🤚;
      ✏️ 🫢;
      🤚;
    `,
    output: "🫢",
  },
  {
    name: "printStatement test with 🫢 as second parameter, should success",
    input: `
      🤚;
      ✏️ 10, 🫢;
      🤚;
    `,
    output: "10 🫢",
  },
  {
    name: "printStatement test with string concatenation, should success",
    input: `
      🤚;
      ✏️ "hello" + "crap";
      🤚;
    `,
    output: "hellocrap",
  },
  {
    name: "printStatement test with multiple expresions including 🫢, should success",
    input: `
      🤚;
      👉 a = 70;
      ✏️ 6*5, 🫢, "jamtara", a;
      🤚;
    `,
    output: "30 🫢 jamtara 70",
  },
  {
    name: "printStatement test with 🫢 variable, should success",
    input: `
      🤚;
      👉 a;
      ✏️ a;
      🤚;
    `,
    output: "🫢",
  },
  {
    name: `printStatement test with string "undefined", should success`,
    input: `
      🤚;
      ✏️ "undefined";
      🤚;
    `,
    output: "undefined",
  },
  {
    name: `printStatement test with 🫢 variable, should success`,
    input: `
      🤚;
      👉 a;
      ✏️ a;
      🤚;
    `,
    output: "🫢",
  },
  {
    name: `printStatement test with true variable, should success`,
    input: `
      🤚;
      👉 a = true;
      ✏️ a;
      🤚;
    `,
    output: "true",
  },
  {
    name: `printStatement test with false variable, should success`,
    input: `
      🤚;
      👉 a = false;
      ✏️ a;
      🤚;
    `,
    output: "false",
  },
  {
    name: `printStatement test with assignment expression, should success`,
    input: `
      🤚;
      👉 a;
      ✏️ a = 90;
      🤚;
    `,
    output: "90",
  },
  {
    name: `printStatement test with logical AND, should success`,
    input: `
      🤚;
      ✏️ 9 && 10;
      🤚;
    `,
    output: "10",
  },
  {
    name: `printStatement test with logical OR, should success`,
    input: `
      🤚;
      ✏️ 9 || 10;
      🤚;
    `,
    output: "9",
  },
  {
    name: `printStatement test with logical - 1, should success`,
    input: `
      🤚;
      ✏️ false && true;
      🤚;
    `,
    output: "false",
  },
  {
    name: `printStatement test with logical - 2, should success`,
    input: `
    🤚;
    👉 a = true;
    ✏️ a && false;
    🤚;
    `,
    output: "false",
  },
  {
    name: `printStatement test with logical - 3, should success`,
    input: `
    🤚;
    👉 a = true;
    ✏️ a && true;
    🤚;
    `,
    output: "true",
  },
  {
    name: `printStatement test with equality, should success`,
    input: `
      🤚;
      ✏️ 9 == 10;
      🤚;
    `,
    output: "false",
  },
  {
    name: `printStatement test with inequality, should success`,
    input: `
      🤚;
      ✏️ 9 != 10;
      🤚;
    `,
    output: "true",
  },
  {
    name: `printStatement test with logical OR, should success`,
    input: `
      🤚;
      ✏️ 9 || 10;
      🤚;
    `,
    output: "9",
  },
  {
    name: `printStatement test with logical OR - 2, should success`,
    input: `
      🤚;
      ✏️ false || true;
      🤚;
    `,
    output: "true",
  },
  {
    name: `printStatement test with boolean true false and logical, should success`,
    input: `
      🤚;
      ✏️ true != 10;
      🤚;
    `,
    output: "true",
  },
  {
    name: `printStatement test with boolean true and string "true", should success`,
    input: `
      🤚;
      ✏️ "true" == true;
      🤚;
    `,
    output: "false",
  },
  // while statement / loop tests
  {
    name: `whileStatement test with 1 time loop, should success`,
    input: `
      🤚;
      👉 a = 0;
      🔁 (a < 1) {
        ✏️ "bhai";
        a += 1;
      }
      🤚;
    `,
    output: "bhai",
  },
  {
    name: `whileStatement test with single break statement, should success`,
    input: `
      🤚;
      🔁 (true) 
        🙏🏻;
      ✏️ "end";
      🤚;
    `,
    output: "end",
  },
  {
    name: `whileStatement test with nested loops, should success`,
    input: `
      🤚;
      👉 a = 0;
      🔁 (a < 2) {
        🔁 (true)
          🙏🏻;
        ✏️ "hello";
        👀 (true)
          🙏🏻;
      }
      🤚;
    `,
    output: "hello",
  },
  {
    name: `whileStatement with multiple breaks, should success`,
    input: `
      🤚;
      👉 a = 0;
      🔁 (a < 2) {
        ✏️ "hello";
        👀 (true)
          🙏🏻;
        🙏🏻;
        🙏🏻;
      }
      🤚;
    `,
    output: "hello",
  },
  // if statement tests
  {
    name: `if statement success test - 1: only if, should success`,
    input: `
    🤚
    👀 (true) {
      ✏️ "bhai";
    }
    🤚;
    `,
    output: "bhai",
  },
  {
    name: `if statement success test - 2: if else both, should success`,
    input: `
    🤚
    👀 (true) {
      ✏️ "true";
    } 👁️ {
      ✏️ "false";
    }
    🤚;
    `,
    output: "true",
  },
  {
    name: `if statement success test - 3: if only with comarison condn, should success`,
    input: `
    🤚
    👉 x = 9;
    👀 (x >= 9) {
      x = 5;
      ✏️ x;
    } 
    🤚;
    `,
    output: "5",
  },
  // else-if statement tests
  {
    name: `else-if statement success test - 1: if with one else-if, should success`,
    input: `
    🤚
    👀 (false) {
      ✏️ "false";
    } 🧿 (true) {
      ✏️ "true";
    }
    🤚;
    `,
    output: "true",
  },
  {
    name: `else-if statement success test - 2: if with multiple else-ifs, should success`,
    input: `
    🤚
    👉 x = 10;
    👀 (x < 5) {
      ✏️ "x < 5";
    } 🧿 (x < 8) {
      ✏️ "x < 8";
    } 🧿 (x < 12) {
      ✏️ "x < 12";
    } 🧿 (x < 15) {
      ✏️ "x < 15";
    }
    🤚;
    `,
    output: "x < 12",
  },
  {
    name: `else-if statement success test - 3: nested if-else-if ladder, should success`,
    input: `
    🤚
    👉 a = 15;
    👀 (a < 0) {
      ✏️ "a < 0";
    } 🧿 (a > 0) {
      👀 (a < 10) {
        ✏️ "a < 10";
      } 🧿 (a < 20) {
        ✏️ "a < 20";
      }
    }
    🤚
    `,
    output: "a < 20",
  },
  {
    name: `else-if statement success test - 4: if-else-if ladder evaluating to else, should success`,
    input: `
    🤚
    👉 x = 15;
    👀 (x < 5) {
      ✏️ "x < 5";
    } 🧿 (x < 8) {
      ✏️ "x < 8";
    } 🧿 (x < 12) {
      ✏️ "x < 12";
    } 👁️ {
      ✏️ "x > 12";
    }
    🤚;
    `,
    output: "x > 12",
  },
  // logical expression test
  {
    name: `logical "&&" test with true false, should success`,
    input: `
        🤚
        👀 (true && false) {
          ✏️ "true";
        } 👁️ {
          ✏️ "false";
        }
        🤚;
      `,
    output: `false`,
  },
  // modulus operator test
  {
    name: `modulus operator "%" test, should success`,
    input: `
        🤚
        ✏️ 90 % 9;
        🤚;
      `,
    output: `0`,
  },
  {
    name: `modulus operator "%" test - 2, should success`,
    input: `
        🤚
        ✏️ 27 % 5;
        🤚;
      `,
    output: `2`,
  },
  {
    name: `modulus operator "%" test - 2, should success`,
    input: `
        🤚
        ✏️ 5 % 20;
        🤚;
      `,
    output: `5`,
  },
  {
    name: `whileStatement test with single continue statement, should success`,
    input: `
      🤚;
      👉 a = 5;
      👉 step = 0;
      🔁 (a > 0) {
        step += 1;
        👀 (a % 2 != 0){
          a -= 2;
          💔;
        }
        a -= 1;
      }
      ✏️ step;
      🤚;
    `,
    output: "3",
  },
  {
    name: `whileStatement test with multiple continue statement, should success`,
    input: `
      🤚;
      👉 a = 5;
      👉 step = 0;
      🔁 (a > 0) {
        step += 1;
        👀 (a % 2 == 0){
          a -= 2;
          💔;
        }
        a -= 1;
        💔;
        ✏️ "oye oye oye.. yha tk nhi aana tha bhai";
      }
      ✏️ step;
      🤚;
    `,
    output: "3",
  },
  {
    // step:  1 => 2
    // a: 10 => 7 => 6 => 3 => 2 => -1
    name: `whileStatement test with single continue statement without block, should success`,
    input: `
      🤚;
      👉 a = 10;
      👉 step = 0;
      🔁 (a > 0) {
        👀 (a % 2 == 0){
          a -= 3;
          💔;
        }
        a -= 1;
        👀 (step == 1) 💔
        step += 1;
      }
      ✏️ step;
      🤚;
    `,
    output: "1",
  },
];