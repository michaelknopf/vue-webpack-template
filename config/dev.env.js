var merge = require('webpack-merge')
var prodEnv = require('./prod.env')
var personal_config = {
}
try{
    personal_config = require('./personal')
}catch(e){
    console.warn("You should specify the dev auth")
}

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  HTTP_U:personal_config.HTTP_U, //in this way, the username/password won't show up in build process
  HTTP_P:personal_config.HTTP_P //should be changed to a common dev combination
})
