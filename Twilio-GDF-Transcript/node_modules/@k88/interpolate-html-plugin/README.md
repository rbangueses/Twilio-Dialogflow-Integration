<h1 align="center">@k88/interpolate-html-plugin</h1>
<p align="center">Taken from <a href="https://github.com/facebook/create-react-app/blob/master/packages/react-dev-utils/InterpolateHtmlPlugin.js" target="_blank">react-dev-utils</a>, but is published as a standalone plugin and has Typescript definition.</p>

<p align="center">
    <a href="https://www.npmjs.com/package/@k88/interpolate-html-plugin">
        <img src="https://img.shields.io/npm/v/@k88/interpolate-html-plugin.svg?style=square" title="npm" />
    </a>
    <a href="https://www.npmjs.com/package/@k88/interpolate-html-plugin">
        <img src="https://img.shields.io/npm/dt/@k88/interpolate-html-plugin.svg?style=square" title="npm" />
    </a>
    <a href="https://www.npmjs.com/package/@k88/interpolate-html-plugin?activeTab=dependents">
        <img src="https://badgen.net/npm/dependents/@k88/interpolate-html-plugin" title="Number of Dependencies" />
    </a>
    <a href="./LICENSE">
        <img src="https://img.shields.io/npm/l/@k88/interpolate-html-plugin.svg?style=square" title="License" />
    </a>
</p>


## Installation

Install using 

```bash
npm install @k88/interpolate-html-plugin
```

This is an extension to [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin), so you also need to install the dependenc.

## Usage

You can use `%VARIABLE_NAME%` within your template HTML file and then use this plugin to replace them:

```javascript
module.exports = {
  ...webpackConfig,
  plugins: [
    new InterpolateHtmlPlugin({
      'NODE_ENV': 'development',
      'VARIABLE_NAME': 'some-variable-value',
    }),
  ],
}
```