var btnOpen = document.querySelector('.open_popup_btn')
var modal = document.querySelector('.modal')
var btnClose = document.querySelector('.btn-close')
var iconClose = document.querySelector('.icon-close')

function toggleModal() {
    modal.classList.toggle('hide');
}

btnOpen.addEventListener('click', toggleModal);
btnClose.addEventListener('click', toggleModal);
iconClose.addEventListener('click', toggleModal);

