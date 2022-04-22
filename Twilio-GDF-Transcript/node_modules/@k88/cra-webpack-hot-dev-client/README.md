<h1 align="center">@k88/cra-webpack-hot-dev-client</h1>
<p align="center">Taken from <a href="https://github.com/facebook/create-react-app/blob/master/packages/react-dev-utils/webpackHotDevClient.js" target="_blank">react-dev-utils</a>, but is published as a standalone plugin and has Typescript definition.</p>

<p align="center">
    <a href="https://www.npmjs.com/package/@k88/cra-webpack-hot-dev-client">
        <img src="https://img.shields.io/npm/v/@k88/cra-webpack-hot-dev-client.svg?style=square" title="npm" />
    </a>
    <a href="https://www.npmjs.com/package/@k88/cra-webpack-hot-dev-client">
        <img src="https://img.shields.io/npm/dt/@k88/cra-webpack-hot-dev-client.svg?style=square" title="npm" />
    </a>
    <a href="https://www.npmjs.com/package/@k88/cra-webpack-hot-dev-client?activeTab=dependents">
        <img src="https://badgen.net/npm/dependents/@k88/cra-webpack-hot-dev-client" title="Number of Dependencies" />
    </a>
    <a href="./LICENSE">
        <img src="https://img.shields.io/npm/l/@k88/cra-webpack-hot-dev-client.svg?style=square" title="License" />
    </a>
</p>

## Installation

Install using 

```bash
npm install @k88/cra-webpack-hot-dev-client
```

## Usage

Add the path to webpack `entry`:

```javascript
module.exports = {
    /* webpack configuration */
    entry: [
        isDev && require.resolve('@k88/cra-webpack-hot-dev-client'),
        /* Other entry paths */
    ],
};
```
