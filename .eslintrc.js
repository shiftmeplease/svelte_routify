module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: "module",
  },
  rules: {},
  plugins: ["svelte3"],
  ignorePatterns: ["dist/build/", "/.routify"],
  overrides: [
    {
      files: ["**/*.svelte"],
      processor: "svelte3/svelte3",
    },
  ],
  settings: {
    // ...
  },
};
