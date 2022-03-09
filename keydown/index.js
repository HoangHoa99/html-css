var eKey = document.querySelector('.card.key p:last-child');
var eLocation = document.querySelector('.card.location p:last-child');
var eWhich = document.querySelector('.card.which p:last-child');
var result = document.querySelector('.result p:first-child');
var eCode = document.querySelector('.card.code p:last-child');
var alertBtn = document.querySelector('.alert');
var box = document.querySelector('.box');


document.addEventListener('keydown', e => {

    eKey.innerText = e.key;
    eLocation.innerText = e.location;
    eWhich.innerText = result.innerText = e.which;
    eCode.innerText = e.code;
    if(e.keyCode == 32) {
        eKey.innerText = e.code;
    }

    alertBtn.classList.add('hide');
    box.classList.remove('hide');
})