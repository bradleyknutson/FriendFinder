$(document).ready(() => {
    $('#submit').on('click', (e) => {
        e.preventDefault();
        let name = $('#name').val();
        let photo = $('#photo').val();
        let answersArr = [$('#q1').val(), $('#q2').val(), $('#q3').val(), $('#q4').val(), $('#q5').val(), $('#q6').val(), $('#q7').val(), $('#q8').val(), $('#q9').val(), $('#q10').val()];
        if(!answersArr.includes('') && name !== '' && photo !== ''){
            $('#name, #photo, #q1, #q2, #q3, #q4, #q5, #q6, #q7, #q8, #q9, #q10').val('');
            let friendObj = {
                name: name,
                photo: photo,
                scores: answersArr
            }
            checkFriend(friendObj);
        }else{
            //Show missing answers
            $(`.modal-body`).append(`<h3>Please answer all questions`);
            $(`#friendModal`).modal(`show`);
        }
    });

    $('#modal_close').on('click', (e) => {
        $('.modal-body').empty();
    });

});

function checkFriend(friendObj){
    $.post(`/api/friends`, friendObj, (data, status) => {
        //Return closest matched friend as data
        $('.modal-body').append(`<h3>Your Best Friend Is ...<h3><h5>${data.name}!!!</h5><img src="${data.photo}" width="100%">`);
        $('#friendModal').modal('show');
    });
}
