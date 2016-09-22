var server = require('./server');
var repository = require('./repository');
var config = require('./config');

console.log("Please wait while getting cakes...");

// Log exceptions.
process.on('uncaughtException', (err) => {
  console.error('uncaughtException', err);
});

process.on('unhandledRejection', (err, promise) => {
  console.error('unhandledRejection', err);
});

repository.connect({
  host: config.db.host,
  database: config.db.database,
  user: config.db.user,
  password: config.db.password,
  port: config.db.port
}).then((repo) => {
  console.log("Starting server...");
  return server.start({
    port: config.port,
    repo: repo
  });
}).then((app) => {
  console.log("Serving cakes on port " + config.port + ".");
  app.on('close', () => {
    repository.disconnect();
  });
});
