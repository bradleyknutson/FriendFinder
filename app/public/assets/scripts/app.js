$(document).ready(() => {
    $('#submit').on('click', (e) => {
        e.preventDefault();
        let name = $('#name').val();
        let photo = $('#photo').val();
        let answersArr = [parseInt($('#q1').val()), parseInt($('#q2').val()), parseInt($('#q3').val()), parseInt($('#q4').val()), parseInt($('#q5').val()), parseInt($('#q6').val()), parseInt($('#q7').val()), parseInt($('#q8').val()), parseInt($('#q9').val()), parseInt($('#q10').val())];
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
