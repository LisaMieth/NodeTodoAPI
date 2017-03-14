var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://heroku:nodetodoapi@ds145389.mlab.com:45389/node-todo-api');

module.exports = {mongoose};
