module.exports = {
  testEnvironment: "jsdom",
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[jt]s?(x)",
    "tests/**/*.bs.js",
    "**/?(*_)+(spec|test).bs.js",
  ],
  transform: {
    "^.+\\.jsx?$": "esbuild-jest",
  },
  transformIgnorePatterns: [
    "node_modules/(?!(@glennsl/rescript-jest|rescript|rescript-dom-testing-library|rescript-react-testing-library)/)",
  ],
};
