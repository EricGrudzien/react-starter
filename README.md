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

    $ npm install --save-dev babel-eslint

    #Install React
    $ npm install --save react react-dom
    
        Issues with Linting
            resolved by installing new npm package (babel-eslint)
            resolved by undating .babelrc
            resolved by updating webpack.config.js
                https://stackoverflow.com/questions/34678314/webpack-cant-find-module-if-file-named-jsx 
                [0] ERROR in Entry module not found: Error: Can't resolve '/Users/ericgrudzien/Git/Starters/react-starter/src/client/scripts/client.js' in '/Users/ericgrudzien/Git/Starters/react-starter'

            resolved by updating .eslintrc
                https://stackoverflow.com/questions/41858052/solving-linter-error-no-undef-for-document

            resolved by updating webpack.confi.js

                 { test: /\.jsx$/, loader: 'babel-loader', exclude: '/node_modules/' },


                [0] ERROR in ./src/client/scripts/client.jsx
                [0] Module parse failed: /Users/ericgrudzien/Git/Starters/react-starter/src/client/scripts/client.jsx Unexpected token (6:16)
                [0] You may need an appropriate loader to handle this file type.
                [0] | import LayoutView from '../../app/views/Landing';
                [0] |
                [0] | ReactDOM.render(<LayoutView />, document.getElementById('app'));

                https://github.com/babel/babel-loader/issues/370
           
        For reference:
        https://github.com/babel/babel-loader/#usage

            
            webpack --display-error-details

    #Install css / scsss

        $ npm install --save-dev sass-loader css-loader style-loader

        $ npm install --save classnames

        $ npm install --save-dev node-sass

            [0] ERROR in ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./src/app/views/Landing/styles.scss
            [0] Module build failed: Error: Cannot find module 'node-sass'

        $ npm install --save-dev extract-text-webpack-plugin
            (move styles to a css file in dist)

         ### this took a long time.  require(xxx.scss) in React file did not resolve until using this in Webpack: css?modules 
        See
            https://www.jonathan-petitcolas.com/2015/05/15/howto-setup-webpack-on-es6-react-application-with-sass.html
            https://github.com/webpack-contrib/extract-text-webpack-plugin
            https://github.com/gajus/react-css-modules            
            General Read:  https://survivejs.com/react/advanced-techniques/styling-react/
            General  https://javascriptplayground.com/blog/2016/07/css-modules-webpack-react/ 

            // To help identify where to look for resolving import or require statements
            https://webpack.js.org/configuration/resolve/


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


Learning lessons:

You add brackets when the thing you are importing is not the default export in that module or file. In case of react, it's the default export.

    import React, { Component } from 'react';