# Webpack Template

Template for a webpack project using Vue.js, Pug, Sass, Babel, etc.

## Setup
1. Run npm install.
2. *Create a personal.js in config folder with the credentials you want to use for making dev ajax calls(which will be ignored by git)
    ```javascript
    module.exports = {
        HTTP_U:'"username"', //in this way, the username/password won't show up in build process
        HTTP_P:'"password"' //should be changed to a common dev combination
    }
    ```
3. The port for the dev server can be set in config/index.js
    
## Commands
1. npm run dev: to create a server for development
2. npm run build: create a "index.gsp" in grails/views, generate dependencies in assets/javascripts
3. npm run test: run unit tests
