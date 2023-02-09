const btnHamburger = document.querySelector('#btnHamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeELems = document.querySelectorAll('.has-fade');

btnHamburger.addEventListener('click', function(){
    console.log('click hamburger');

    if(    //close hamburger menu
        header.classList.contains('open')){ 
        body.classList.remove('noscroll');
        header.classList.remove('open');
        fadeELems.forEach(function(element){
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });

    }
    else{    //open hamburger menu
        body.classList.add('noscroll');
        header.classList.add('open'); 
        fadeELems.forEach(function(element){
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        });
    }
});