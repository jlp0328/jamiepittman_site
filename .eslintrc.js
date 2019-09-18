module.exports = {
  env: {
    node: true,
    browser: true,
    es6: true
  },
  plugins: ["gridsome"],
  rules: {
    "gridsome/format-query-block": "error"
  },
  parser: "vue-eslint-parser"
};
