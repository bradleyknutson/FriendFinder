let friends = [
    {
        name: "Bradley",
        photo: "https://media.licdn.com/dms/image/C4E03AQHG90y9k0vkKA/profile-displayphoto-shrink_200_200/0?e=1583971200&v=beta&t=yZIN7XC5VwgDAyBjNIUrUOzASuShOjk0reVKhmZpJSc",
        scores: [5,1,4,4,5,1,2,5,4,1]
    }
];

function findFriend(user){
    return friends[0];
}

module.exports = {
    friends: friends,
    findFriend: findFriend
}