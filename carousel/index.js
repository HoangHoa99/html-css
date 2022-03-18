let image = document.querySelectorAll('.image img');
var prevBtn = document.querySelector('.control.prev');
var nextBtn = document.querySelector('.control.next');
let mainImg = document.querySelector('.main img');

var currentIndex = 0;

function changeImage() {
    mainImg.src = image[currentIndex].src;
    image[currentIndex].classList.add('border');
}

image.forEach((item, index) => {
    item.addEventListener('click', function() {
        let previous = currentIndex;
        currentIndex = index;
        changeImage();
        removeBoder(previous);
    });
});

function removeBoder(index) {
    image[index].classList.remove('border');
}

changeImage();

function nextImg() {
    removeBoder(currentIndex);
    if(currentIndex + 1 === image.length) {
        currentIndex = 0;
    }
    else {
        currentIndex += 1;
    }
    changeImage();
}

nextBtn.addEventListener('click', function() {
    nextImg();
});

function prevImg() {
    removeBoder(currentIndex);
    if(currentIndex - 1 < 0) {
        currentIndex = image.length - 1;
    }
    else {
        currentIndex -= 1;
    }
    changeImage();
}

prevBtn.addEventListener('click', function() {
    prevImg();
});

document.addEventListener('keydown', function(e) {
    if(e.keyCode == 37) {
        prevImg();
    }

    if(e.keyCode == 39) {
        nextImg();
    }
});



