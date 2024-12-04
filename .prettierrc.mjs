/** @type {import("prettier").Config} */
export default {
  plugins: ["prettier-plugin-astro", "prettier-plugin-svelte"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro"
      }
    },
    {
      files: "*.svelte",
      options: {
        parser: "svelte"
      }
    }
  ],
  arrowParens: "always",
  semi: true,
  singleQuote: false,
  trailingComma: "none"
};
