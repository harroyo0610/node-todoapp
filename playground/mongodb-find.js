//const MongoClient = require('mongodb').MongoClient;
const {
	MongoClient,
	ObjectID
} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server');
	}

	console.log('Connect to MongoDb server');

	// db.collection('Todos').find({
	// 	text: 'Something to do'
	// }).count().then((count) => {
	// 	console.log('Todos ' + count);
	// }, (err) => {	// 	console.log('Unable to fetch todos', err);
	// });
	db.collection('Users').find({
		name: 'Humberto Arroyo'
	}).count().then((count) => {
		console.log(count);
	});

	//db.close();
});