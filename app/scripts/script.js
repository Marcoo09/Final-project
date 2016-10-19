'use strict'

var db= firebase.database();

var data={

	id:1,
	nombre:'Marco',
	email:'marcofiorito1@hotmail.com'
};

db.ref('persona').set(data);