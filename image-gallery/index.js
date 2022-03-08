var image = document.querySelectorAll('.image img');
var prevBtn = document.querySelector('.control_prev');
var nextBtn = document.querySelector('.control_next');
var closeBtn = document.querySelector('.control_close');
var galleryImg = document.querySelector('.gallery_inner img');
var gallery = document.querySelector('.gallery');

var currentIndex = 0;

function showGallery() {
    if(currentIndex === 0) {
        prevBtn.classList.add('hide');
    }
    else {
        prevBtn.classList.remove('hide');
    }

    if(currentIndex === image.length - 1) {
        nextBtn.classList.add('hide');
    }
    else {
        nextBtn.classList.remove('hide');
    }

    galleryImg.src = image[currentIndex].src;
    gallery.classList.add('show');
}

function nextImg() {
    if(currentIndex < image.length - 1) {
        currentIndex += 1;
    }
    showGallery();
}

function prevImg() {
    if(currentIndex > 0) {
        currentIndex -= 1;
    }
    showGallery();
}

image.forEach((item, index) => {
    item.addEventListener('click', function() {
        currentIndex = index;
        showGallery();
    })
});

closeBtn.addEventListener('click', function() {
    gallery.classList.remove('show');
});

prevBtn.addEventListener('click', function() {
    prevImg();
});

nextBtn.addEventListener('click', function() {
    nextImg();
});

document.addEventListener('keydown', function(e) {
    if(e.keyCode == 27) {
        gallery.classList.remove('show');
    }

    if(e.keyCode == 37) {
        prevImg();
    }

    if(e.keyCode == 39) {
        nextImg();
    }
})
