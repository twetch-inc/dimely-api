const firebase = require('firebase');

const client = firebase.initializeApp({
	apiKey: 'AIzaSyB-6R2FuYbW7yWnwdiTRMZ_oXYD8F0uDq4',
	authDomain: 'dimely-d764e.firebaseapp.com',
	databaseURL: 'https://dimely-d764e.firebaseio.com',
	projectId: 'dimely-d764e',
	storageBucket: 'dimely-d764e.appspot.com',
	messagingSenderId: '789366303149',
	appId: '1:789366303149:web:112e567a59d8cd92fed924',
	measurementId: 'G-67PSZ43W23'
});

module.exports = client;
