//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);
// var user = {name: 'humberto', age: 23}  
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server');
	}

	console.log('Connect to MongoDb server');

	// db.collection('TodoApp').insertOne({
	// 	text: "Something to do",
	// 	completed: false

	// }, (err, result) =>{
	// 	if (err) {
	// 		return console.log('Unable to insert todo', err);
	// 	}
	// 	console.log(JSON.stringify(result.ops, undefined, 2));
	// });
	// db.collection('Users').insertOne({
	// 	name: "Humberto Arroyo",
	// 	age: 23,
	// 	location: "Cdmx"

	// }, (err, result) =>{
	// 	if (err) {
	// 		return console.log('Unable to insert todo', err);
	// 	}
	// 	console.log(result.ops[0];
	// });
	db.close();
});