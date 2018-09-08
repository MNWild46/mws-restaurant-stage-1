if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('./js/offline_service_worker.js')
	.then(function() {
		console.log('Registration worked!');
	})
	.catch(function() {
		console.log('Registration failed!');
	});
}