<h1 align="center">@k88/format-webpack-messages</h1>
<p align="center">Taken from <a href="https://github.com/facebook/create-react-app/blob/master/packages/react-dev-utils/formatWebpackMessages.js" target="_blank">react-dev-utils</a>, but is published as a standalone package and has Typescript definition.</p>

<p align="center">
    <a href="https://www.npmjs.com/package/@k88/format-webpack-messages">
        <img src="https://img.shields.io/npm/v/@k88/format-webpack-messages.svg?style=square" title="npm" />
    </a>
    <a href="https://www.npmjs.com/package/@k88/format-webpack-messages">
        <img src="https://img.shields.io/npm/dt/@k88/format-webpack-messages.svg?style=square" title="npm" />
    </a>
    <a href="https://www.npmjs.com/package/@k88/format-webpack-messages?activeTab=dependents">
        <img src="https://badgen.net/npm/dependents/@k88/format-webpack-messages" title="Number of Dependencies" />
    </a>
    <a href="./LICENSE">
        <img src="https://img.shields.io/npm/l/@k88/format-webpack-messages.svg?style=square" title="License" />
    </a>
</p>

## Installation

Install using 

```bash
npm install @k88/format-webpack-messages
```

## Usage

Use this to format webpack warnings/errors:

```javascript
const webpack = require('webpack');
const formatMessages = require('@k88/webpack-format-messages');

const compiler = webpack(/* webpack-config */);

compiler.hooks.done.tap('done', (stats) => {
  const isSuccessful = stats.hasErrors() || stats.hasWarnings();
  
  if (!isSuccessful) {
    const messages = formatMessages(stats);

    if (messages.errors.length) {
      console.log('Failed to compile.');
      messages.errors.forEach(e => console.log(e));
    }

    if (messages.warnings.length) {
      console.log('Compiled with warnings.');
      messages.warnings.forEach(w => console.log(w));
    }  
  }
});
```