# Front End Environment using React, Redux, Redux Sagas, Sass, and Bootstrap

A demo for The Night Sky.

## Build and Run

- `npm start`: Will start up the dev webserver
- `npm run serve:staging`: Will start up the staging webserver
- `npm run serve:prod`: Will start up the prod webserver

- `npm run staging`: Create the packed version of staging, pushes to current github branch(should always be STAGING) and deploys to https://app-staging.presscleaners.com/account.
- `npm run prod`: Create the packed version of prod and deploys to https://app.presscleaners.com/account. Does not push to github. All code should be merged into master from staging branch.

- `npm test`: Run unit tests

## Getting Started
The web app is built on the [react-webpack-redux](https://github.com/weblogixx/react-webpack-template) yeoman generator. This generator provides some helpful tools for generating new elements of the app such as components, actions, reducers, etc.. For the most part these generators build out the elements according to best practice. See special instructions below, if any, for generating elements in accordance with best practices.

### Generating new reducers
```bash
yo react-webpack-redux:reducer my/namespaced/reducers/name
yo react-webpack-redux:reducer items
```

### Generating new actions
```bash
yo react-webpack-redux:action my/namespaced/actions/name
yo react-webpack-redux:action addItem
```

### Generating new components
```bash
yo react-webpack-redux:component my/namespaced/components/name
yo react-webpack-redux:component button
```

### Generating new containers
```bash
yo react-webpack-redux:container my/namespaced/container/Name
yo react-webpack-redux:container wrapper
```

## React Bootstrap
React Bootstrap Componenets replace functionality provided by Bootstrap's included jQuery. 

https://react-bootstrap.github.io/getting-started.html

React Bootstrap does not include any stylesheets and thus does not interfere with the press themed Bootstrap stylesheets.

## React Router Redux
The app uses react router redux, a version of react router that syncs the applications route state to the redux store. This allows route information to be passed as props to components. 

Docs and example:
https://github.com/reactjs/react-router-redux

Other than syncing the routing state to the store, the redux router is no different than react router still supports the entire react router API:
https://github.com/ReactTraining/react-router

## Redux Sagas
Redux Sagas is Redux middleware tfor asynchronous actions and also provides tools that make API interaction easier. Sagas have gained traction over the use of thunks and is generally accepted as a better alternative from here on out within the Redux community. 

Read More here:
https://github.com/redux-saga/redux-saga
