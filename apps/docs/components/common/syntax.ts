import Prism, { languages } from "prismjs";


export const bhaiLangSyntax = languages.extend("clike", {
  comment: [
    {
      pattern: /(^|[^\\:])\/\/.*/,
      lookbehind: true,
      greedy: true,
    },
    {
      pattern: /\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/,
      lookbehind: true,
      greedy: true,
    },
  ],
  string: {
    pattern: /(["'])((?:\\\1|(?:(?!\1)).)*)(\1)/,
    greedy: true,
  },
  keyword: /\b(?:🤚|🤚|✏️|👉|🫢|👀|🧿|👁️|🔁|🙏🏻|💔)\b/,
  boolean: /\b(?:true|false)\b/,
  number: /(?:(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[-+]?\d+)?)i?/i,
  operator:
    /[*/%^!=]=?|~|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,
});

Prism.languages.bhaiLang = bhaiLangSyntax;
