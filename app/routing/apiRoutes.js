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
        console.log("New Friend Scores: " + newFriend.scores);

        var scoreComparisons = [];
        for (var i = 0; i < friendsData.length; i++) {
            var tempSum = 0;
            for (var j = 0; j < friendsData[i].scores.length; j++) {
                tempSum += Math.abs(friendsData[i].scores[j] - newFriend.scores[j]);
                console.log(tempSum);
            }
            scoreComparisons.push(tempSum);
        }
        console.log("Score Comparisons: " + scoreComparisons);

        var bestMatch = 0;
        for (var i = 1; i < scoreComparisons.length; i++) {
            if (scoreComparisons[i] < scoreComparisons[bestMatch]) {
                bestMatch = i;
            }
        }
        console.log("Best Match: " + bestMatch);

        friendsData.push(newFriend);
        res.json(friendsData[bestMatch]);
    });
};