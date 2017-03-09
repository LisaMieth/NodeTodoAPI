//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://127.0.0.1:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unabel to connect to server', err);
  }
  console.log('Connected to MongoDB server');

  // db.collection('todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // Insert new doc into Users (name, age, location)
  // db.collection('users').insertOne({
  //   //_id: 123,
  //   name: 'Lisa',
  //   age: 27,
  //   location: 'Sydney'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to intert user', err);
  //   }
  //
  //   console.log(result.ops[0]._id.getTimestamp());
  // })

  db.close();
});
