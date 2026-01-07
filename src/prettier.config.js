/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
  singleQuote: false,
  trailingComma: 'es5',
  tabWidth: 2,
  plugins: ['prettier-plugin-tailwindcss'],
};

export default config;
