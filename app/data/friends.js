let friends = [];

function findFriend(user){
    let friendScoreDifference = 51;
    let friend;
    friends.forEach(person => {
        let personScoreDifference = 0;
        for(let i = 0; i<person.scores.length; i++) {
            personScoreDifference += Math.abs(parseInt(person.scores[i]) - parseInt(user.scores[i]));
        }
        if(personScoreDifference < friendScoreDifference){
            friendScoreDifference = personScoreDifference;
            friend = person;
        }
    });
    return friend;
}

module.exports = {
    friends: friends,
    findFriend: findFriend
}