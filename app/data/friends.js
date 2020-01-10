let friends = [
    {
        name: 'Malcolm "Mal" Reynolds',
        photo: 'https://66.media.tumblr.com/dff6bafd7652e86caef7039bead115db/tumblr_o7t1wgc5T11rxkqbso1_500.png',
        scores: [3,3,3,5,5,4,5,3,2,1]
    },
    {
        name: 'Zoe Washburne',
        photo: 'https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters_opt/p-firefly-gina-torres.jpg',
        scores: [4,2,4,4,5,1,3,2,4,2]
    },
    {
        name: 'Hoban "Wash" Washburne',
        photo: 'https://vignette.wikia.nocookie.net/firefly/images/6/68/Wash03.jpg/revision/latest/scale-to-width-down/340?cb=20060620234550',
        scores: [2,1,2,3,3,3,3,4,4,5]
    },
    {
        name: 'Inara Serra',
        photo: 'https://vignette.wikia.nocookie.net/firefly/images/c/c3/Inara02.jpg/revision/latest/scale-to-width-down/340?cb=20080301063009',
        scores: [4,1,5,3,3,1,2,4,4,4]
    },
    {
        name: 'Jayne Cobb',
        photo: 'https://66.media.tumblr.com/39ef985e2f365acd564b07b728f96efa/tumblr_inline_o2noawmIj71slrvm0_500.jpg',
        scores: [2,5,2,1,5,5,5,1,2,4]
    },
    {
        name: 'Kaywinnet Lee Frye',
        photo: 'https://vignette.wikia.nocookie.net/firefly/images/5/55/Kaylee.jpg/revision/latest/scale-to-width-down/340?cb=20100426173058',
        scores: [5,1,4,4,3,3,2,5,4,4]
    },
    {
        name: 'Simon Tam',
        photo: 'https://i.pinimg.com/originals/d3/5e/f8/d35ef86ac514837982cb48e13a679c7e.jpg',
        scores: [4,1,2,2,3,4,2,2,3,1]
    },
    {
        name: 'River Tam',
        photo: 'https://www.planetclaire.tv/wp-content/uploads/2015/03/firefly-river2.jpg',
        scores: [3,1,2,2,3,5,5,4,5,5]
    },
    {
        name: 'Shepherd Book',
        photo: 'https://fsmedia.imgix.net/15/f1/8a/a8/6058/41c9/a1fc/b3f2f661836d/ron-glass-known-for-his-role-as-shepard-book-on-firefly-has-died-at-age-71.jpeg?rect=0%2C37%2C800%2C400&auto=format%2Ccompress&dpr=2&w=650',
        scores: [5,1,5,2,3,4,2,5,5,1]
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