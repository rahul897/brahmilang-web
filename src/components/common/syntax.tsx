import Prism, { languages } from "prismjs";


export const brahmiLangSyntax = languages.extend("clike", {
  comment: [
    {
      pattern: /(^|[^\\:])#.*/,
      lookbehind: true,
      greedy: true,
    }
  ],
  string: {
    pattern: /(["])((?:\\\1|(?:(?!\1)).)*)(\1)/,
    greedy: true,
  },
  keyword: /\b(?:ipudu|kani|idi ok antaventra|kaneesam idi|inka ide|nuv line lo undu|nannu involve cheyakandi|aapandroi|aa chupentra idi chudu|inka|excuse me|nen vastanu babu)\b/,
  number: /(?:(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[-+]?\d+)?)i?/i,
  operator:
    /[*/%^!=]=?|~|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,
});

Prism.languages.brahmiLang = brahmiLangSyntax;