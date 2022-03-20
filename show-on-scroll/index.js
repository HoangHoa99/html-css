let title = document.querySelector('#home h1');
let homeDesc = document.querySelector('#home .description');

let animationItem = document.querySelectorAll('.show-on-scroll');

function toggleAnimation(element) {
    let rectItem = element.getClientRects()[0];
    let heightScreen = window.innerHeight;

    if(!(rectItem.bottom < 0 || rectItem.top > heightScreen)) {
        // ben trong
        element.classList.add('start');
    }
    else {
        element.classList.remove('start');
    }
}

function checkAnimation() {
    animationItem.forEach(item => {
        toggleAnimation(item);
    });

}

window.onscroll = checkAnimation;
    // title.classList.add('start');
    // homeDesc.classList.add('start');
    // calculate position of div
    // top + height = bottom
    // left + width = right