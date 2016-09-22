const mysql = require('mysql');

class Repository {
    constructor(connection) {
        this.connection = connection;
    }

    getCakes() {
        return new Promise((resolve, reject) => {
            this.connection.query('SELECT name, calories FROM cakes', (err, cakes) => {
                if (err) {
                    return resolve(new Error('No cakes for you, check the error: ' + err));
                }
                //Don't need to change the result, just to show some data manipulation
                return resolve((cakes || []).map((cake) => {
                    return {
                        name: cake.name,
                        calories: cake.calories
                    };
                }));
            });
        });
    }

    disconnect() {
        this.connection.end();
    }
}

module.exports.connect = (connConfig) => {
    return new Promise((resolve, reject) => {
        if(!connConfig.host) throw new Error("Please provide a host.");
        if(!connConfig.user) throw new Error("Please provide a user.");
        if(!connConfig.password) throw new Error("Please provide a password.");
        if(!connConfig.port) throw new Error("Please provide a port.");

        resolve(new Repository(mysql.createConnection(connConfig)));
    });
};
