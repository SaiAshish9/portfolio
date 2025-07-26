// .eslintrc.js
module.exports = {
  parser: "babel-eslint", // ⬅️ Important: enables JSX parsing
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    es2021: true,
  },
  plugins: ["react", "react-hooks", "jsx-a11y"],
  extends: ["react-app", "eslint:recommended", "plugin:react/recommended"],
  rules: {
    // Your custom rules (optional)
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
