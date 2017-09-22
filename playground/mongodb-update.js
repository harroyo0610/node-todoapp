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

	// db.collection('Todos').findOneAndUpdate({
	// 	completed: false

	// },{
	// 	$set:{
	// 		completed: true
	// 	}
	// },{
	// 	returnOriginal: false
	// }).then((result) => {
	// 	console.log(result);
	// });

	db.collection('Users').findOneAndUpdate({
		location: 'Cdmx'
	},{ 
		$set:{ 
		location: 'michoacan'
		}
	},{
	 returnOriginal: false
	}).then((result) => {
		console.log(result);
	});
});