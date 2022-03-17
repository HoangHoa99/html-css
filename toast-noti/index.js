const success = document.querySelector('.success');
const warning = document.querySelector('.warning');
const error = document.querySelector('.error');

success.addEventListener('click', function() {
    createToast('success');
});

warning.addEventListener('click', function() {
    createToast('warning');
});

error.addEventListener('click', function() {
    createToast('error');
});

function createToast(status) {

    let templeteRender = undefined;
    switch(status) {
        case 'success':
            templeteRender = `<i class="fa-solid fa-circle-check"></i>`;
            break;
        case 'warning':
            templeteRender = `<i class="fa-solid fa-circle-exclamation"></i>`;
            break;
        case 'error':
            templeteRender = `<i class="fa-solid fa-triangle-exclamation"></i>`;
            break;
        default:
            break;
    }

    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.classList.add(status + '-noti');
    toast.innerHTML = `
            ${templeteRender}
            <span class="message">This is a ${status} message !</span>
            <span class="countdown"></span>
    `;

    let toastList = document.getElementById('toasts');
    toastList.appendChild(toast);

    setTimeout(function() {
        toast.style.animation = `slide_hide 1.5s ease forwards`;
    }, 3000);

    setTimeout(function() {
        toast.remove();
    }, 5000);
}