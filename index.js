require('babel-register');
require('./src/server/server.js');

/*
    This file used for debuggin set-up. See:
    https://medium.com/@katopz/how-to-debug-es6-nodejs-with-vscode-8d00bd6c4f94

    In .babelrc, this:

        "sourceMaps": true,
        "retainLines": true
    
    helps the debugger to break properly
*/