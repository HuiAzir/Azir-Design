module.exports = {
  singleQuote: true,
  trailingComma: "all",
  printWidth: 80,
  proseWrap: "never",
  arrowParens: "avoid",
  semi: true,
  overrides: [
    {
      files: ".prettierrc",
      options: {
        parser: "json"
      }
    }
  ]
};
