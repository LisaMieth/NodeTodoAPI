var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://heroku:nodetodoapi@ds145389.mlab.com:45389/node-todo-api');
//mongoose.connect('mongodb://127.0.0.1:27017/TodoApp');
//mongoose.connect('mongodb://127.0.0.1:27017/TodoAppTest');
mongoose.connect(process.env.MONGODB_URI);

module.exports = {mongoose};
