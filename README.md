# Introduction

Angular 1.x and Webpack2 starter with ES 2015/ES 2016, SASS, ui-router and bootstrap. For unit testing Jasmine and karma are used. ESLint is used to lint JavaScript.

Key Points :

  1. Application entry point is *.../app/app.js*. (Only application specific code/files need to be imported here). All these are bundle into */bundle.js/*.

  2. All third party library files needs to be imported in *.../app/vendor.js*. All these are bundle into a separate file *vendor.js*

  3. All scss/css are bundle into a separate files *app.css*(for application specific styles) and *vendor.css*(for third party styles) to achieve parallel loading of styles along with js.

  4. For unit tests *testContext.js* file will be used, which prepares and bundles all the files required for unit testing using Webpack and karma.
  

# Setup

1. Install all dependencies `npm install`

2. To run in dev mode `npm run start`. Access app via localhost:8080

    Note :

      1. In Dev mode, the bundles are virtual loaded into memory. (Physical files are not generated in the disk)

      2. Live reload is enabled using Webpack's hot reload module.

      3. Enabling source-map for debug

3. To run unit tests `npm test`.

      1. Code coverage report will be available in */coverage/*

      2. Test cases report will be available in */karma_html/*

4. For production build `npm run build`. Prod build will be available in */dist*.

      Note : Minified bundles are created on disk with all optimizations.

5. To add precommit hook (it doesn't allow us to commit un linted files and it try to fix basic eslint errors using --fix option).
    1. copy the code in precommit.txt
    2. remove the file extension .git/hooks/pre-commit.sample (rename it to pre-commit or remove .sample)
    2. paste the copied code in .git/hooks/pre-commit

6. To test the production build `npm run test-prod-build`. Application can be accessed via *localhost:3000/*.

7. To generate documentation for the code `npm run doc`. The documentation will be available in */docs/*.

    Sample Document:

    ![alt text]("Sample ES Doc")


# Tools & Frameworks Used

1. Angular(v1.x)

2. Eslint - for linting JavaScript

3. Babel - for transpiling ES2015/ES2016 code to ES5

4. Karma & Jasmine - for unit tests

5. Webpack(v2) - for minification/optimization and bundling(building) the package.

6. ESDoc(v0.5.2) - for generating documentation (Refer : https://esdoc.org/)

7. Editor Config - To make sure all the developers follow same editor configurations.
