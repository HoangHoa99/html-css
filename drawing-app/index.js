let color = document.querySelector('#color');
let erase = document.querySelector('#erase');
let descrease = document.querySelector('#descrease');
let size = document.querySelector('#size');
let increase = document.querySelector('#increase');
let save = document.querySelector('#save');
let clear = document.querySelector('#clear');
let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

let drawing = false;
let drawingColor = '#000000';
let drawingSize = 20;
size.innerText = drawingSize;

let x, y;

canvas.addEventListener('mousedown', function(e) {
    x = e.offsetX,
    y = e.offsetY
    drawing = true;
})

document.addEventListener('mousemove', function(e) {
    if(drawing) {

        x2 = e.offsetX;
        y2 = e.offsetY;

        // drawing line
        ctx.beginPath();
        ctx.arc(x2, y2, drawingSize, 0, 2 * Math.PI);
        ctx.fillStyle = drawingColor;
        ctx.fill();

        // drawing outline
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = drawingColor;
        ctx.lineWidth = drawingSize * 2;
        ctx.stroke();

        x = x2;
        y = y2;
    }
})

document.addEventListener('mouseup', function(e) {
    drawing = false;

    x = undefined;
	y = undefined;
})

color.addEventListener('change', function(e) {
    drawingColor = e.target.value;
})

erase.addEventListener('click', function() {
    drawingColor = '#ffffff';
})

descrease.addEventListener('click', function() {
    drawingSize -= 5;
    drawingSize = drawingSize > 5 ? drawingSize : 5;

    size.innerText = drawingSize;
})

increase.addEventListener('click', function() {
    drawingSize += 5;
    drawingSize = drawingSize < 30 ? drawingSize : 30;

    size.innerText = drawingSize;
})

clear.addEventListener('click', function(e) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
})

save.addEventListener('click', function(e) {
    let output = canvas.toDataURL('image/png');
    let a = document.createElement('a');
    a.setAttribute('download', 'drawing.png');
    a.setAttribute('href', output.replace('image/png', 'image/octet-stream'));
    a.click();
})