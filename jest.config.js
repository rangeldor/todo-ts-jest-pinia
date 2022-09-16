module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  transformIgnorePatterns: ['<rootDir>/node_modules/(?!vuetify)'],
  testMatch: [
    '**/*.spec.js',
    '**/*.spec.ts',
  ],
};
