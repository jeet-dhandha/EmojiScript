<h1 align="center">Bhai Lang</h1>
<p align="center">
<a href="https://lgtm.com/projects/g/DulLabs/bhai-lang/alerts/"><img alt="Total alerts" src="https://img.shields.io/lgtm/alerts/g/DulLabs/bhai-lang.svg?logo=lgtm&logoWidth=18"/></a>
<a href="https://lgtm.com/projects/g/DulLabs/bhai-lang/context:javascript"><img alt="Language grade: JavaScript" src="https://img.shields.io/lgtm/grade/javascript/g/DulLabs/bhai-lang.svg?logo=lgtm&logoWidth=18"/></a>
<a href="https://github.com/DulLabs/bhai-lang/actions/workflows/node.js.yml/badge.svg"><img alt="Build" src="https://github.com/DulLabs/bhai-lang/actions/workflows/node.js.yml/badge.svg"/></a>
<a href="https://bhailang.js.org/"><img alt="Build" src="https://img.shields.io/badge/website-bhailang.js.org-orange"/></a>
<a href="https://www.npmjs.com/package/bhailang"><img alt="Build" src="https://img.shields.io/badge/npm-bhailang-orange"/></a>
  
</p>
<p align="center">
  <b>Bhai lang is a toy programming language written in Typescript.</b>
</p>
<br>

<h2 align="center">Installation</h2>

```
npm i -g bhailang
```

<h2 align="center">Usage</h2>

<h4 align="left">Create a new file</h4><br/>


<h4 align="left">Edit the file with a text editor.
You can also try out your code on <a href="https://bhailang.js.org/#playground">Bhai Lang PlayGround</a></h4>

```
🤚
  ✏️ "Hello bhai";
🤚

```

<h4 align="left">Run</h4>

```
bhailang test.bhai
```

<h4 align="left">Output</h4>

```
hello bhai
```



<h2 align="center">Documentation</h2>

<h3 align="center">General</h3>
<p align="center"><code>🤚</code> is the entrypoint for the program and all program must end with <code>🤚</code>. Anything outside of it will be ignored.</p>

```

This will be ignored

🤚
// Write code here
🤚

This too
```

<h3 align="center">Variables</h3>
<p align="center">Variables can be declared using <code>👉</code>.</p>

```

🤚
  👉 a = 10;
  👉 b = "two";
  👉 c = 15;
  a = a + 1;
  b = 21;
  c *= 2;
🤚
```

<h3 align="center">Types</h3>
<p align="center">Numbers and strings are like other languages. Null values can be denoted using <code>🫢. true and false</code> are the boolean values.</p>

```

🤚
  👉 a = 10;
  👉 b = 10 + (15*20);
  👉 c = "two";
  👉 d = 'ok';
  👉 e = 🫢;
  👉 f = true;
  👉 g = false;
🤚
```

<h3 align="center">Built-ins</h3>
<p align="center">Use <code>✏️</code> to print anything to console.</p>

```

🤚
  ✏️ "Hello World";
  👉 a = 10;
  {
    👉 b = 20;
    ✏️ a + b;
  }
  ✏️ 5, 'ok', 🫢 , true , false;
🤚
```

<h3 align="center">Conditionals</h3>
<p align="center">Bhailang supports simple if else construct , <code>👀</code> block will execute if condition is <code>true</code> and <code>👁️</code> block will execute if condition is <code>false</code>.</p>

```

🤚
  👉 a = 10;
  👀 (a < 25) {
   ✏️ "a is less than 25";
  } 👁️ {
   ✏️ "a is greater than or equal to 25";
  }
🤚
```

<h3 align="center">Loops</h3>
<p align="center">Statements inside <code>🔁</code> blocks are executed as long as a specified condition evaluates to true. If the condition becomes <code>false</code>, statement within the loop stops executing and control passes to the statement following the loop. Use <code>🙏🏻</code> to break the loop and <code className="language-cpp">💔</code> to continue within loop.</p>


```

🤚
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
```



