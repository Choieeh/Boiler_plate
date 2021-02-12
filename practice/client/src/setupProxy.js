const proxy = require('http-proxy-middleware');
module.exports = function(app) {
	app.use(
		'/api',
			proxy({
			target : 'https://practice-react-asdf.run.goorm.io/',
			changeOrigin: true,
		})
	);
};