export const TokenTypes = {
  NULL_TYPE: null,
  // HI_BHAI_TYPE: "\u{1F91A}",
  // BYE_BHAI_TYPE: "\u{1F91A}",
  // BOL_BHAI_TYPE: "\u270F\uFE0F",
  // BHAI_YE_HAI_TYPE: "\u{1F914}",
  // AGAR_BHAI: "\u{1F440}",
  // WARNA_BHAI: "\u{1F441}\uFE0F",
  // NAHI_TO_BHAI: "\u{1F9FF}",
  // JAB_TAK_BHAI: "\u{1F501}",
  // BAS_KAR_BHAI: "\u270A",
  // AGLA_DEKH_BHAI: "\u{1F494}",
  // NALLA_TYPE: "\u{1F4B0}",
  
HI_BHAI_TYPE: "🤚",

  BYE_BHAI_TYPE: "🤚",

  BOL_BHAI_TYPE: "✏️",

  BHAI_YE_HAI_TYPE: "👉",

  AGAR_BHAI: "👀",

  WARNA_BHAI: "👁️",

  NAHI_TO_BHAI: "🧿",

  JAB_TAK_BHAI: "🔁",

  BAS_KAR_BHAI: "✊",

  AGLA_DEKH_BHAI: "💔",

  NALLA_TYPE: "🫢",

  SEMI_COLON_TYPE: ";",

  OPEN_CURLY_BRACE_TYPE: "{",

  CLOSED_CURLY_BRACE_TYPE: "}",

  OPEN_PARENTHESIS_TYPE: "(",

  CLOSED_PARENTHESIS_TYPE: ")",

  COMMA_TYPE: ",",

  NUMBER_TYPE: "NUMBER",

  IDENTIFIER_TYPE: "IDENTIFIER",

  SIMPLE_ASSIGN_TYPE: "SIMPLE_ASSIGN",

  COMPLEX_ASSIGN_TYPE: "COMPLEX_ASSIGN",

  ADDITIVE_OPERATOR_TYPE: "ADDITIVE_OPERATOR",

  MULTIPLICATIVE_OPERATOR_TYPE: "MULTIPLICATIVE_OPERATOR",

  RELATIONAL_OPERATOR: "RELATIONAL_OPERATOR",

  EQUALITY_OPERATOR: "EQUALITY_OPERATOR",

  STRING_TYPE: "STRING",

  BOOLEAN_TYPE: "BOOLEAN",

  LOGICAL_AND: "LOGICAL_AND",

  LOGICAL_OR: "LOGICAL_OR"
};

export const SPEC = [
  // Whitespcaes
  { regex: /^\s+/, tokenType: TokenTypes.NULL_TYPE },

  // singke line Comments
  { regex: /^\/\/.*/, tokenType: TokenTypes.NULL_TYPE },

  // multi line comments
  { regex: /^\/\*[\s\S]*?\*\//, tokenType: TokenTypes.NULL_TYPE },

  // Symbols, delimiters
  { regex: /^;/, tokenType: TokenTypes.SEMI_COLON_TYPE },
  { regex: /^\{/, tokenType: TokenTypes.OPEN_CURLY_BRACE_TYPE },
  { regex: /^\}/, tokenType: TokenTypes.CLOSED_CURLY_BRACE_TYPE },
  { regex: /^\(/, tokenType: TokenTypes.OPEN_PARENTHESIS_TYPE },
  { regex: /^\)/, tokenType: TokenTypes.CLOSED_PARENTHESIS_TYPE },
  { regex: /^,/, tokenType: TokenTypes.COMMA_TYPE },

  //Keywords
  // { regex: /^\b🤚\b/, tokenType: TokenTypes.HI_BHAI_TYPE },
  // { regex: /^\b🤚\b/, tokenType: TokenTypes.BYE_BHAI_TYPE },
  // { regex: /^\b✏️\b/, tokenType: TokenTypes.BOL_BHAI_TYPE },
  // { regex: /^\b👉\b/, tokenType: TokenTypes.BHAI_YE_HAI_TYPE },
  // { regex: /^\b👀\b/, tokenType: TokenTypes.AGAR_BHAI },
  // { regex: /^\b🧿\b/, tokenType: TokenTypes.NAHI_TO_BHAI },
  // { regex: /^\b👁️\b/, tokenType: TokenTypes.WARNA_BHAI },
  // { regex: /^\b🫢\b/, tokenType: TokenTypes.NALLA_TYPE },
  // { regex: /^\b🔁\b/, tokenType: TokenTypes.JAB_TAK_BHAI },
  // { regex: /^\b✊\b/, tokenType: TokenTypes.BAS_KAR_BHAI },
  // { regex: /^\b💔\b/, tokenType: TokenTypes.AGLA_DEKH_BHAI },

  { regex: /^🤚/, tokenType: TokenTypes.HI_BHAI_TYPE },
  { regex: /^🤚/, tokenType: TokenTypes.BYE_BHAI_TYPE },
  { regex: /^✏️/, tokenType: TokenTypes.BOL_BHAI_TYPE },
  { regex: /^👉/, tokenType: TokenTypes.BHAI_YE_HAI_TYPE },
  { regex: /^👀/, tokenType: TokenTypes.AGAR_BHAI },
  { regex: /^🧿/, tokenType: TokenTypes.NAHI_TO_BHAI },
  { regex: /^👁️/, tokenType: TokenTypes.WARNA_BHAI },
  { regex: /^🫢/, tokenType: TokenTypes.NALLA_TYPE },
  { regex: /^🔁/, tokenType: TokenTypes.JAB_TAK_BHAI },
  { regex: /^✊/, tokenType: TokenTypes.BAS_KAR_BHAI },
  { regex: /^💔/, tokenType: TokenTypes.AGLA_DEKH_BHAI },

  // { regex: /^\b\u{1F91A}\b/, tokenType: TokenTypes.HI_BHAI_TYPE },
  // { regex: /^\b\u{1F91A}\b/, tokenType: TokenTypes.BYE_BHAI_TYPE },
  // { regex: /^\b\u270F\uFE0F\b/, tokenType: TokenTypes.BOL_BHAI_TYPE },
  // { regex: /^\b\u{1F914}\b/, tokenType: TokenTypes.BHAI_YE_HAI_TYPE },
  // { regex: /^\b\u{1F440}\b/, tokenType: TokenTypes.AGAR_BHAI },
  // { regex: /^\b\u{1F441}\uFE0F\b/, tokenType: TokenTypes.NAHI_TO_BHAI },
  // { regex: /^\b\u{1F9FF}\b/, tokenType: TokenTypes.WARNA_BHAI },
  // { regex: /^\b\u{1F501}\b/, tokenType: TokenTypes.NALLA_TYPE },
  // { regex: /^\b\u270A\b/, tokenType: TokenTypes.JAB_TAK_BHAI },
  // { regex: /^\b\u{1F494}\b/, tokenType: TokenTypes.BAS_KAR_BHAI },
  // { regex: /^\b\u{1F4B0}\b/, tokenType: TokenTypes.AGLA_DEKH_BHAI },

  // Number
  { regex: /^[+-]?([\d]*[.])?[\d]+/, tokenType: TokenTypes.NUMBER_TYPE },

  // Boolean
  { regex: /^\btrue\b/, tokenType: TokenTypes.BOOLEAN_TYPE },
  { regex: /^\bfalse\b/, tokenType: TokenTypes.BOOLEAN_TYPE },

  // Identifier
  { regex: /^\w+/, tokenType: TokenTypes.IDENTIFIER_TYPE },

  // Equality operator: ==, !=
  {regex: /^[=!]=/, tokenType: TokenTypes.EQUALITY_OPERATOR},

  // Assignment operators: =, *=, /=, +=, -=
  { regex: /^=/, tokenType: TokenTypes.SIMPLE_ASSIGN_TYPE },
  { regex: /^[\*\%\/\+\-]=/, tokenType: TokenTypes.COMPLEX_ASSIGN_TYPE },

  // operator
  { regex: /^[+\-]/, tokenType: TokenTypes.ADDITIVE_OPERATOR_TYPE },
  { regex: /^[*\/\%]/, tokenType: TokenTypes.MULTIPLICATIVE_OPERATOR_TYPE },
  {regex: /^[><]=?/, tokenType: TokenTypes.RELATIONAL_OPERATOR},

  // logical operators: &&, ||
  {regex: /^&&/, tokenType: TokenTypes.LOGICAL_AND},
  {regex: /^\|\|/, tokenType: TokenTypes.LOGICAL_OR},

  // String
  { regex: /^"[^"]*"/, tokenType: TokenTypes.STRING_TYPE },
  { regex: /^'[^']*'/, tokenType: TokenTypes.STRING_TYPE },
];

export type Spec = typeof SPEC;
