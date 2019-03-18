document.addEventListener('DOMContentLoaded', function(){
    var backbutton  = document.querySelector('.backbutton');
    backbutton.addEventListener('click', function(){
        history.back();
    });
});