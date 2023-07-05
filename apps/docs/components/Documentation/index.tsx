import Snippet from "./Snippet";


/* This example requires Tailwind CSS v2.0+ */
const features = [
  {
    name: "General",
    description: (
      <>
        <code className="language-cpp">🤚</code> is the entrypoint for the
        program and all program must end with{" "}
        <code className="language-cpp">🤚</code>. Anything outside of it
        will be ignored.
      </>
    ),
    code: `This will be ignored

🤚
  // Write code here
🤚

This too
    `,
  },
  {
    name: "Variables",
    description: (
      <>
        Variables can be declared using{" "}
        <code className="language-cpp">👉</code>.
      </>
    ),
    code: `🤚
    👉 a = 10;
    👉 b = "two";
    👉 c = 15;
    a = a + 1;
    b = 21;
    c *= 2;
🤚
    `,
  },
  {
    name: "Types",
    description: (
      <>
        Numbers and strings are like other languages. Null values can be denoted
        using <code className="language-cpp">🫢</code>.{" "}
        <code className="language-cpp">true</code> and{" "}
        <code className="language-cpp">false</code> are the boolean values.
      </>
    ),
    code: `🤚
    👉 a = 10;
    👉 b = 10 + (15*20);
    👉 c = "two";
    👉 d = 'ok';
    👉 e = 🫢;
    👉 f = true;
    👉 g = false;
🤚
    `,
  },
  {
    name: "Built-ins",
    description: (
      <>
        Use <code className="language-cpp">✏️</code> to print anything to
        console.
      </>
    ),
    code: `🤚
    ✏️ "Hello World";
    👉 a = 10;
    {
       👉 b = 20;
       ✏️ a + b;
    }
    ✏️ 5, 'ok', 🫢 , true , false;
🤚
    `,
  },
  {
    name: "Conditionals",
    description: (
      <>
        Bhailang supports if-else-if ladder construct , <code className="language-cpp">👀</code> block will execute if condition is <code className="language-cpp">true</code>, otherwise one of the subsequently added <code className="language-cpp">🧿</code> blocks will execute if their respective condition is <code className="language-cpp">true</code>, and the <code className="language-cpp">👁️</code> block will eventually execute if all of the above conditions are <code className="language-cpp">false</code>.
      </>
    ),
    code: `🤚
    👉 a = 10;
    👀 (a < 20) {
      ✏️ "a is less than 20";
    } 🧿 ( a < 25 ) {
      ✏️ "a is less than 25";
    } 👁️ {
      ✏️ "a is greater than or equal to 25";
    }
🤚
    `
  },
  {
    name: "Loops",
    description: (
      <>
        Statements inside <code className="language-cpp">🔁</code> blocks are executed as long as a specified condition evaluates to <code className="language-cpp">true</code>. If the condition becomes <code className="language-cpp">false</code>, statement within the loop stops executing and control passes to the statement following the loop. 
        Use <code className="language-cpp">🙏🏻</code> to break the loop and <code className="language-cpp">💔</code> to continue within loop.
      </>
    ),
    code: `🤚
    👉 a = 0;
    🔁 (a < 10) {
      a += 1;
      👀 (a == 5) {
        ✏️ "andar se ✏️ ", a;
        💔;
      }
      👀 (a == 6) {
        🙏🏻;
      }
      ✏️ a;
    }
    ✏️ "done";
🤚
    `
  }

];

export default function Documentation() {
  return (
    <div>
      <div className="max-w-2xl mx-auto py-24 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-100 sm:text-4xl">
            Documentation
          </h2>
          <p className="mt-4 text-gray-300">
            Bhailang is dynamically typed toy programming language, based on an
            inside joke, written in Typescript.
          </p>

          <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <div className="font-medium text-gray-300">{feature.name}</div>
                <div className="mt-2 text-sm text-gray-200">
                  {feature.description}
                </div>
                <Snippet code={feature.code} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
