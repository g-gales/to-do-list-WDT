import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
    ignores: ["dist/*", "docs/*"],
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn",
    },
    files: ["*.js"],
  },
  pluginJs.configs.recommended,
];
