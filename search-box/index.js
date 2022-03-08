var searchBtn = document.querySelector('.search_box-btn');

searchBtn.addEventListener('click', function() {
    this.parentElement.classList.toggle('extend-width');
    this.previousElementSibling.focus();
});