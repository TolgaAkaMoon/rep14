document.addEventListener('DOMContentLoaded', function(){

    var backbutton = document.querySelector('.search__anker');

    backbutton.addEventListener('click', function(){
        history.back();
    });

});
