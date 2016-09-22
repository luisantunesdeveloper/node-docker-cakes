// config file

module.exports = {
	port: process.env.PORT || 8888,
  db: {
    host: process.env.DB_HOST || '127.0.0.1',
    database: 'sweet',
    user: 'cake_service',
    password: '123',
    port: 3306
  }
};
