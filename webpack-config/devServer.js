const path = require('path')
const envs = require('./envs')
const { PORT, SECURE, API_URL } = envs
module.exports = {
	static: {
		directory: path.join(__dirname, '../dist'),
		serveIndex: true,
	},
	watchFiles: {
		paths: ['src/**/*.*'],
		options: {
		  usePolling: true,
		},
	},
	compress: true,
	port: PORT,
	hot: true,
	open: true,
	
	headers: {
		"Access-Control-Allow-Origin": "*",
		"Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
		"Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization",
	},
	client: {
		overlay: {
			errors: true,
			warnings: false,
		}
	},
	server: SECURE,
	historyApiFallback: true,
	proxy: {
		"/api/*": {
		  changeOrigin: true,
		  cookieDomainRewrite: "localhost",
		  logLevel: "debug",
		  target: `${API_URL}`,
	
		  onProxyReq: (proxyReq) => {
			if (proxyReq.getHeader("origin")) {
			  proxyReq.setHeader("origin", `${API_URL}`);
			}
		  },
		  secure: false,
		  pathRewrite: {
			"^/api": "",
		  },
		},
	
	  },
  }