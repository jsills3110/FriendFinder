var friendsData = require("../data/friends");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });

    app.post("/api/friends", function (req, res) {
        var newFriend = req.body;
        var scoreInts = [];
        for (var i = 0; i < newFriend.scores.length; i++) {
            scoreInts.push(parseInt(newFriend.scores[i]));
        }
        newFriend.scores = scoreInts;
        friendsData.push(newFriend);
        res.json(true);
    });
};