# Angular.js with Jest example

This is a proof-of-concept project to build a concept for testing [angular.js](https://angularjs.org/) with [jest](https://jestjs.io/).

## Getting started

Before you start make sure that you run `yarn` to install all required dependencies.

- `yarn start`

  Starts a webpack-dev-server for developing the application.

- `yarn test`

  Runs the tests with jest.

## Constraints

Since this is a proof-of-concept for an much bigger application, there are some constraints which are transferred from the bigger app to this example:

- `angular` has to be available as global variable
- `moment` has to be available as global variable
- Templates are external `.html`-modules which are imported by webpack

## Author

<!-- prettier-ignore-start -->

| [<img src="https://avatars0.githubusercontent.com/u/472867?v=4" width="100px;"/><br /><sub><b>Felix Haus</b></sub>](https://github.com/ofhouse)<br /><sub>[Website](https://felix.house/) • [Twitter](https://twitter.com/ofhouse)</sub>|
| :---: |

<!-- prettier-ignore-end -->

## License

MIT - see [LICENSE](./LICENSE) for details.
