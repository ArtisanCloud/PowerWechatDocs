const fs = require('fs')
const path = require('path')

const packages = fs.readdirSync(path.resolve(__dirname, 'packages/@vuepress'))
const docsPackages = fs.readdirSync(path.resolve(__dirname, 'docs/zh'))

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [
      2,
      'always',
      ['vuepress', 'vuepress-vite', ...packages, ...docsPackages],
    ],
  },
}
