import globals from "globals";
import tseslint from "typescript-eslint";


export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { languageOptions: { globals: globals.browser } },
  ...tseslint.configs.recommended,
  {
    rules: {
      "indent": ["error", 2],
    },
    ignores: ["node_modules/**/*", "dist/**/*"]
  },
];