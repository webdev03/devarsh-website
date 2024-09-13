/** @type {import("prettier").Config} */
export default {
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro"
      }
    }
  ],
  arrowParens: "always",
  semi: true,
  singleQuote: false,
  trailingComma: "none"
};
