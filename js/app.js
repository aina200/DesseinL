
"use strict"

//*****************************ABOUT SECTION ***************************************

const slide = document.querySelector('.aboutSection'); 


window.addEventListener('scroll', ()=> {  


	if(window.scrollY>2100) { 
		slide.classList.add('aboutAnimation');
	}
	else {
		slide.classList.remove('aboutAnimation');
	}
});


//*****************************FORM ANIMATION ***************************************

const homeForm = document.querySelector('.homeForm');
const input = document.querySelectorAll('.formLabel');


document.addEventListener('input', function(e) {
    
    if(e.target.value !== "") {
        e.target.parentNode.classList.add('activeInput');
    } 
    else if (e.target.value === "") {
        e.target.parentNode.classList.remove('activeInput');
    }

});
//*****************************FORM VALIDATION ***************************************

let formButton = document.querySelector('.submitButton');

let lastName = document.querySelector('.nameInput');
let lastNameError = document.querySelector('.lastNameError');
let regexName = /^([a-zA-Z ]+)$/;


let email = document.querySelector('.emailInput');
let emailError = document.querySelector('.emailError');
let regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


let phone = document.querySelector('.phoneInput');
let phoneError = document.querySelector('.phoneError');
let regexPhone =  /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;


let textarea = document.querySelector('.textareaInput');
let textareaError = document.querySelector('.textareaError');


formButton.addEventListener('click',validation);

function validation (e)
{
    //***********************************EMPTY VALIDATION*****************
    if (lastName.validity.valueMissing && email.validity.valueMissing 
        && textarea.validity.valueMissing&& phone.validity.valueMissing) {

        event.preventDefault();

        lastNameError.textContent = '*Nom manquant*';
        lastNameError.style.color = 'red';

        emailError.textContent = '*Email manquant*';
        emailError.style.color = 'red';

        phoneError.textContent = '*Numéro manquant*';
        phoneError.style.color = 'red';

        textareaError.textContent = '*Veuillez remplir le champ*';
        textareaError.style.color = 'red';
    }
    
    //***********************************CARACTERES VALIDATION*****************

    if (regexName.test(lastName.value) === false) {
        event.preventDefault();

        lastNameError.textContent = '*Nom Ivalide*';
        lastNameError.style.color = 'red';
    }
    if (regexEmail.test(email.value) === false) {
        event.preventDefault();

        emailError.textContent = 'Email invalide';
        emailError.style.color = 'red';
    }
    if (regexPhone.test(phone.value) === false) {
        event.preventDefault();

        phoneError.textContent = 'Numéro invalide';
        phoneError.style.color = 'red';
    }

}


