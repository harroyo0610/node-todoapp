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

	// db.collection('Todos').deleteMany({completed: true}).then((result) =>{
	// 	console.log(result);
	// });
	// db.collection('Todos').deleteOne({text: "Something to do"}).then((result) => {
	// 	console.log(result);
	// });

	// db.collection('Todos').findOneAndDelete({text: "etc"}).then((result) => {
	// 	console.log(result);
	// });
	db.collection('Users').deleteOne({
		name: "Humberto Arroyo"
	}).then((result) => {
		console.log(JSON.stringify(result, undefined, 2));
	});

});