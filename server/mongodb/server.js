var express = require('express');
var apicache = require('apicache');
var glob = require('glob');
var mongoose = require('mongoose');
var config = require('./config/config');
var configGlobal = require('./../../config');

mongoose.connect(config.db, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
var db = mongoose.connection;
db.on('error', function () {
  throw new Error('unable to connect to database at ' + config.db);
});

var models = glob.sync(config.root + '/app/models/*.js');
models.forEach(function (model) {
  require(model);
});
var app = express();
var cache = apicache.middleware
app.use(cache('5 minutes'))

module.exports = require('./config/express')(app, config);

app.listen(config.port, function () {
  console.log(`Express listening for 'mongodb' on ${configGlobal.URL_BASE_DEV}${config.port} 🚀`);
});
