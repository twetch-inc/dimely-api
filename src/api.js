const firebase = require('./firebase');

class Api {
	static async user(id) {
		await firebase.auth().signInAnonymously();
		const doc = await firebase
			.firestore()
			.collection('users')
			.where('paymail', '==', id)
			.limit(1)
			.get();
		return doc.docs[0].data();
	}

	static async initiateCall() {
		const roomId = await firebase
			.firestore()
			.collection('twilioRooms')
			.doc().id;

		return `https://dimely.io/room/${roomId}`;
	}
}

module.exports = Api;
