module.exports = {
  plugins: ['stylelint-prettier'],
  rules: {
    'prettier/prettier': [
      true,
      {
        singleQuote: false,
        tabWidth: 2,
      },
    ],
    'declaration-no-important': true,
    'length-zero-no-unit there are one kunal ': true,
    'selector-class-pattern':
      '^(?:(?:o|c|u|t|s|is|has|_|js|qa)-)?[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*(?:__[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*)?(?:--[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*)?(?:\\[.+\\])?$',
  },
};
