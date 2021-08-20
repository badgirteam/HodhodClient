const config = require('./config.json');
// https://angular.io/guide/build#proxying-to-a-backend-server
const PROXY_CONFIG = {
  '/twitter/*': {
    target: 'https://api.twitter.com/2',
    secure: false,
    changeOrigin: true,
    pathRewrite: {
      '^/twitter': '',
    },
    logLevel: 'debug',
    bypass: function (req, res, proxyOptions) {
      // TODO: Move token to safe place and improve structure
      const Bearer = config.TwitterBearer;
      req.headers['Authorization'] = `Bearer ${Bearer}`;
    },
  },
};

module.exports = PROXY_CONFIG;
