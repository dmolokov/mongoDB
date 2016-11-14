"use strict"
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/exampleDb";

// Connect to the db
MongoClient.connect(url, function(err, db) {
	if(err) {
		console.log( "Невозможно подключиться к серверу mongoDB, ошибка " + err );
	}
	else {
		console.log( "Соединение установлено." );
	}
	
	// Get the documents collection
    var collection = db.collection('users');

    //Create some users
    var user1 = {name: 'modulus admin', age: 42, roles: ['admin', 'moderator', 'user']};
    var user2 = {name: 'modulus user', age: 22, roles: ['user']};
    var user3 = {name: 'modulus super admin', age: 92, roles: ['super-admin', 'admin', 'moderator', 'user']};

    // Insert some users
    collection.insert([user1, user2, user3], function (err, result) {
		if (err) {
			console.log(err);
		} else {
			console.log('Inserted %d documents into the "users" collection. The documents inserted with "_id" are:', result.length, result);
			collection.find({name: 'modulus admin'}).toArray(function(err, results) {
				if(err) {
					console.log( err );
				}
				else if(results.length){
					console.log( "Найденный:", results );
				}
				else {
					console.log( "Нет документов с данным условием поиска." );
				}
			}); //find
			collection.remove();
		}
		//Close connection
		db.close();
    });
});

