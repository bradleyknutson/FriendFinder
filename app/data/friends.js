let friends = [
    {
        name: "Bradley",
        photo: "https://media.licdn.com/dms/image/C4E03AQHG90y9k0vkKA/profile-displayphoto-shrink_200_200/0?e=1583971200&v=beta&t=yZIN7XC5VwgDAyBjNIUrUOzASuShOjk0reVKhmZpJSc",
        scores: [5,1,4,4,5,1,2,5,4,1]
    },
    {
        name: "Steven",
        photo: "https://thingamajig.com",
        scores: [1,3,5,5,4,3,6,8,4,1]
    }
];

function findFriend(user){
    let friendScoreDifference = 51;
    let friend;
    friends.forEach(person => {
        let personScoreDifference = 0;
        for(let i = 0; i<person.scores.length; i++) {
            personScoreDifference += Math.abs(person.scores[i] - user.scores[i]);
        }
        if(personScoreDifference < friendScoreDifference){
            friend = person;
        }
    });
    return friend;
}

module.exports = {
    friends: friends,
    findFriend: findFriend
}