﻿// Retrieve
"use strict"
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:88/exampleDb";

//var server=require('mongodb').Server;

//var mongoclient=new MongoClient(new server('localhost',27017));

// Connect to the db
MongoClient.connect(url, function(err, db) {
	if(err) {
		console.log( "Невозможно подключиться к серверу mongoDB, ошибка " + err );
	}
	else {
		console.log( "Соединение установлено." );
	}
	
	//var collection = db.collection('test');
	//var doc1 = {'hello':'doc1'};
	//var doc2 = {'hello':'doc2'};
	//var lotsOfDocs = [{'hello':'doc3'}, {'hello':'doc4'}];
	//
	//collection.insert(doc1);
	//
	//collection.insert(doc2, {w:1}, function(err, result) {});
	//
	//collection.insert(lotsOfDocs, {w:1}, function(err, result) {});
	
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
      }
      //Close connection
      db.close();
    });
	
	
});

