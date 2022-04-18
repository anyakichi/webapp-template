module.exports = {
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!**/*.gen.tsx",
    "!**/__tests__/**",
  ],
  testEnvironment: "jsdom",
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[jt]s?(x)",
    "tests/**/*.bs.js",
    "**/?(*_)+(spec|test).bs.js",
  ],
  transform: {
    "^.+\\.[jt]sx?$": "esbuild-jest",
  },
  transformIgnorePatterns: [
    "node_modules/(?!(@glennsl/rescript-jest|rescript|rescript-dom-testing-library|rescript-react-testing-library)/)",
  ],
};
