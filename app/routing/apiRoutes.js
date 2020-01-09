const friends = require('../data/friends');

module.exports = (app) => {
    app.get(`/api/friends`, (req, res) => {
        res.json(friends.friends);
    });

    app.post(`/api/friends`, (req, res) => {
        res.json(friends.findFriend(req.body));
        friends.friends.push(req.body);
    });
}