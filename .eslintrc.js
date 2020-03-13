module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'plugin:react/recommended',
    'standard',
    'plugin:import/errors',
    'plugin:import/warnings'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  settings: {
    "import/resolver": {
      "babel-module": {}
    }
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
  }
}
