<h1 align="center">@k88/typescript-compile-error-formatter</h1>
<p align="center">A error formatter for typescript compile errors, taken from <a href="hhttps://github.com/facebook/create-react-app/blob/master/packages/react-dev-utils/typescriptFormatter.js" target="_blank">react-dev-utils</a>, but is published as a standalone module and has Typescript definition.</p>

<p align="center">
    <a href="https://www.npmjs.com/package/@k88/typescript-compile-error-formatter">
        <img src="https://img.shields.io/npm/v/@k88/typescript-compile-error-formatter.svg?style=square" title="npm" />
    </a>
    <a href="https://www.npmjs.com/package/@k88/typescript-compile-error-formatter">
        <img src="https://img.shields.io/npm/dt/@k88/typescript-compile-error-formatter.svg?style=square" title="npm" />
    </a>
    <a href="https://www.npmjs.com/package/@k88/typescript-compile-error-formatter?activeTab=dependents">
        <img src="https://badgen.net/npm/dependents/@k88/typescript-compile-error-formatter" title="Number of Dependencies" />
    </a>
    <a href="./LICENSE">
        <img src="https://img.shields.io/npm/l/@k88/typescript-compile-error-formatter.svg?style=square" title="License" />
    </a>
</p>

## Installation

This formatter best works with the output of [fork-ts-checker-webpack-plugin](https://www.npmjs.com/package/fork-ts-checker-webpack-plugin) and is used as a peer dependency. Install both using:

```bash
npm install @k88/typescript-compile-error-formatter fork-ts-checker-webpack-plugin --save-dev
```

## Usage

Use it for a formatted error message form [fork-ts-checker-webpack-plugin](https://www.npmjs.com/package/fork-ts-checker-webpack-plugin):

```javascript
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import typescriptFormatter from '@k88/typescript-compile-error-formatter';

forkTsCheckerWebpackPlugin
    .getCompilerHooks(compiler)
    .receive.tap('afterTypeScriptCheck', (diagnostics, lints) => {
        [...diagnostics, ...lints].forEach(msg, => typescriptFormatter(msg, true));
      });
```
