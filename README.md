# react-starter

GitHub to create new repository.

Create new SSH key and install to GitHub

Clone Repository

Create package.json using npm init

Reference these guides for set-up:
    https://github.com/babel/example-node-server
    https://tylermcginnis.com/react-js-tutorial-1-5-utilizing-webpack-and-babel-to-build-a-react-js-app/
    https://css-tricks.com/css-modules-part-2-getting-started/


Commands
    #Install Babel
    $ npm install --save-dev babel-cli

    # old:  $ npm install --save-dev babel-preset-latest babel-preset-stage-0

    $ npm install --save-dev babel-preset-env babel-preset-stage-0
        note:  '{ "presets": ["latest"] }' to '{ "presets": ["env"] }

    #install Nodemon
    $ npm install --save-dev nodemon


    # Install Test
    $ npm install --save-dev mocha

    $ npm install --save-dev babel-register

    # Install webpack
    $ npm install --save-dev webpack
    $ npm install --save-dev babel-core babel-loader babel-preset-react

    References
        https://github.com/webpack/webpack/blob/master/examples/source-map/webpack.config.js
        https://github.com/risingstack/react-way-getting-started

    Examples
        https://github.com/webpack/webpack/tree/master/examples
    

    #Install Express
    $ npm install --save express

    #Install concurrently
    $ npm install concurrently --save

    #old:  "start": "nodemon src/server.js --exec babel-node",

    #Install ESLint

    $ npm install --save-dev eslint-config-airbnb eslint eslint-plugin-jsx-a11y eslint-plugin-import eslint-plugin-react

    See:
        https://www.npmjs.com/package/eslint-config-airbnb
        https://www.sitepoint.com/up-and-running-with-eslint-the-pluggable-javascript-linter/


    Commands
    npm start
    npm run build
    npm run serve
    npm run tests-server
    npm run lint            (note, only covers src directory)

Notes:

.babelrc
{
  "presets": [
    ["env", {"modules": false}],
    "stage-1",
    "react"
  ],
  "plugins": [
    "transform-runtime"
  ]
}
Note that we want to use the env preset with the modules option set to false, since Webpack can better optimize our code this way. This is a new feature as of Webpack 2.
Also note that the transform-runtime plugin is likely only needed if you want to use the new async and await keywords.

npm install --save-dev babel-plugin-transform-runtime

npm install --save babel-runtime


Running Script with NPM
https://blog.jayway.com/2014/03/28/running-scripts-with-npm/


For debugging comments, see index.js (root)