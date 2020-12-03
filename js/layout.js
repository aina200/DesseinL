//******************PROGRESSBAR LECTURE***************************************

 const progressBar = document.querySelector('.progressBarLecture');

 window.addEventListener('scroll',lectureProgress);

 function lectureProgress(e) {

    //on recupere la taille de scroll et la taille de la fenetre 
    let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let percent = windowScroll / windowHeight * 100;

    progressBar.style.width = percent + '%';
 }


//*****************************NAVBAR***************************************

let toggle = document.querySelector('.toggle');
let button = document.querySelector('.btn_menu');
let nav = document.querySelector('nav');

button.addEventListener('click', () => {

  toggle.classList.toggle('active-toggle');
  nav.classList.toggle('openNav');
});
//*****************************ARROW UP ***************************************


const arrowUpButton = document.querySelector('.arrowUp');

arrowUpButton.addEventListener('click', () => {

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })

})