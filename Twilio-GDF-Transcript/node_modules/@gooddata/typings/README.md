# GoodData Typings
> TypeScript interfaces used in UI SDK

## Getting started

### Usage

With [yarn](https://yarnpkg.com) installed, go to your project directory and run
```
$ yarn add -D @gooddata/typings
```

If you prefer [npm](npmjs.com) run
```
$ npm install --save-dev @gooddata/typings
```

## Documentation
[Documentation](https://sdk.gooddata.com/gooddata-ui/)

## Develop

Install [Node.js](http://nodejs.org) (node 12.16.1, npm v6.13.4) and [Yarn](https://classic.yarnpkg.com) 1.22.4.

Install dependencies:
```
yarn install --frozen-lockfile
```

### Running the development

To develop, you need to run the typescript compiler. By running `yarn dev`, the typescript compiler will be run in watch mode.
```sh
$ cd gooddata-typings
$ yarn dev
```

### Running tests

To run tests (including watch mode), use `yarn test`.
```sh
$ yarn test
```

### Deployment

Use [gooddata-typings CI job](https://checklist.intgdc.com/job/client-libs/job/gooddata-typings-release/).

## Contributing
Report bugs and features on our [issues page](https://github.com/gooddata/gooddata-typings/issues).

## License
Copyright (C) 2007-2022, GoodData(R) Corporation. All rights reserved.

For more information, please see [LICENSE](https://github.com/gooddata/gooddata-typings/blob/master/LICENSE) and [NOTICE](https://github.com/gooddata/gooddata-typings/blob/master/NOTICE.txt)
