const api = require('./src/api');

(async () => {
	const user = await api.user('frog@relayx.io');
	const call = await api.initiateCall();

	console.log({ user, call });
	process.exit();
})();
