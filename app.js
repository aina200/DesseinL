"use strict"

//*****************************PROGRESSBAR LECTURE***************************************

 const progressBar = document.querySelector('.progressBarLecture');

 window.addEventListener('scroll',lectureProgress);

 function lectureProgress(e)
 {

    //on recupere la taille de scroll et la taille de la fenetre 
    let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let percent = windowScroll / windowHeight * 100;

    progressBar.style.width = percent + '%';
 }

//*****************************NAVBAR***************************************

// let toggle = document.querySelector('.toggle'),
//     button = document.querySelector('.btn_menu'),
//     nav = document.querySelector('nav');

// button.addEventListener('click', () => {
//   toggle.classList.toggle('active-toggle');
//   nav.classList.toggle('openNav');
// });

//*****************************ABOUT SECTION ***************************************

const slide = document.querySelector('.aboutSection'); 


window.addEventListener('scroll', ()=>{  


	if(window.scrollY>2100)
	{ 
		slide.classList.add('aboutAnimation');
	}
	else
	{
		slide.classList.remove('aboutAnimation');
	}
});


//*****************************FORM SECTION ***************************************
// const formBorder = document.querySelector('.formAnimation'); 

//     formBorder.addEventListener('click', ()=>{  

// 		formBorder.classList.add('formAnimationsJSCalss');
// });








//*****************************ARROW UP ***************************************


const arrowUpButton = document.querySelector('.arrowUp');

arrowUpButton.addEventListener('click', () => {

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })

})