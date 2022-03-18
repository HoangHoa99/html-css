let upload = document.querySelector('#myImage');
let preview = document.querySelector('.preview');
let warning = document.querySelector('.warning-message');

function validateImg(file) {
    if(!file) {
        warning.innerHTML = `Image required`;
        return;
    }

    if(!file.name.endsWith('.png')) {
        warning.innerHTML = `png type required`;
        return;
    }

    if(file.size / (1024 * 1024) > 3) {
        warning.innerHTML = `Image should less then 3Mb`;
        return;
    }
}

upload.addEventListener('change', function(e) {

    let file = upload.files[0];

    if(!file) {
        warning.innerHTML = `Image required`;
        return;
    }

    if(!file.name.endsWith('.jpeg')) {
        warning.innerHTML = `ipeg type required`;
        return;
    }

    if(file.size / (1024 * 1024) > 3) {
        warning.innerHTML = `Image should less then 3Mb`;
        return;
    }

    let img = document.createElement('img');
    // using url
    img.src = URL.createObjectURL(file);

    //using base64
    // let fileReader = new FileReader();
    // fileReader.readAsDataURL(file);
    // fileReader.onloadend = function(e) {
    //     console.log(e.target.result);
    //     img.src = e.target.result;
    // }
    preview.appendChild(img);
});