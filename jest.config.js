module.exports = {
  projects: [
    {
      runner: "jest-runner-eslint",
      displayName: "lint",
      testMatch: ["<rootDir>/**/*.ts"],
    },
    {
      preset: "ts-jest",
    },
  ],
};
