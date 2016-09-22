'use strict';

module.exports = (app, options) => {
    app.get('/cakes', (req, res, next) => {
        options.repo.getCakes().then((cakes) => {
            res.status(200).send(cakes.map((cake) => {
                return {
                    name: cake.name,
                    calories: cake.calories
                };
            }));
        })
        .catch(next);
    });
};
