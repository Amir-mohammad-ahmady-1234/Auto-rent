module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  plugins: ['react', '@typescript-eslint', 'react-hooks'],
  env: {
    browser: true,
    es2021: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    // اینجا می‌تونی قوانین شخصی‌سازی‌شده بذاری
    'react/react-in-jsx-scope': 'off', // برای پروژه‌های React 17+
    '@typescript-eslint/no-unused-vars': ['warn'],
  },
};
