// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friendsArray = [
    {
        "name": "Ahmed",
        "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        "scores": [
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
        ]
    },
    {
        "name": "Jamie",
        "photo": "https://d2mkcg26uvg1cz.cloudfront.net/wp-content/uploads/elder-african-american-business-woman.jpg",
        "scores": [
            3,
            5,
            2,
            3,
            1,
            3,
            1,
            4,
            2,
            5
        ]
    },
    {
        "name": "Paul",
        "photo": "https://images.thestar.com/F0VhDpMu7NB9Waf6wxVcgPEfbL0=/650x650/smart/filters:cb(1548689313694)/https://www.thestar.com/content/dam/thestar/entertainment/television/analysis/2019/01/25/is-this-the-breakout-year-for-asian-men-in-leading-roles/simu_liu.jpg",
        "scores": [
            3,
            2,
            5,
            1,
            4,
            3,
            5,
            1,
            2,
            4
        ]
    }

];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;