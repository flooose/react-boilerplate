# react-boilerplate

[![Build Status](https://travis-ci.org/flooose/react-boilerplate.svg?branch=master)](https://travis-ci.org/flooose/react-boilerplate)

## What's this?

This is a minimal "boilerplate" for react projects and uses the following:

1. Karma for tests with Jasmine for it's test framework and, webpack as a
   preprocessor and support for tests in Firefox and Chrom(e)(ium)
2. Webpack with Babel and `style-loader`.
  - Babel **only** has the `react-preset`configured (this seems to come with
   support of the `es2015-preset`).
  - Webpack is configured with `webpack.config.js` and builds in to `dist/`
3. Express.js to run `__project_root__/dev-app.js`, which can be used to see the app loaded into `dist/bundle.js`

### File and project structure

1. Files are kept in `src/`. Being a boilerplate project, there is no support for
   sources in subfolders of source (though this may change in the future).
2. Test files are meant to be kept alongside their source files in the `src/`
   folder.
3. Compilation of the app with `yarn build` uses Webpack to deliver a `bundle.js` into `dist/`

## Getting started

- clone
- cd react-boilerplate
- yarn install

## Testing

`karma start` runs a single karma test-run on dummy instances, components, etc and exits.

## Building

`webpack --config webpack.config.js` builds into `dist/bundle.js`
