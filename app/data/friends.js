let friends = [
    {
        name: 'Megaman',
        photo: 'https://vignette.wikia.nocookie.net/megaman/images/3/30/MM11-MegaMan.png/revision/latest/scale-to-width-down/700?cb=20190127075055',
        scores: ["5", "2", "3", "2", "2", "2", "4", "3", "2", "5"]
    }
];

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