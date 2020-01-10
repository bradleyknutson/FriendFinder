const friends = require('../data/friends');

module.exports = (app) => {
    app.get(`/api/friends`, (req, res) => {
        res.json(friends.friends);
    });

    app.post(`/api/friends`, (req, res) => {
        newFriend = req.body;
        for(let i =0; i < newFriend.scores.length; i++){
            newFriend.scores[i] = parseInt(newFriend.scores[i]);
        }
        res.json(friends.findFriend(newFriend));
        friends.friends.push(newFriend);
    });
}