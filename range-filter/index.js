let process = document.querySelector('.process');
let value = document.querySelector('.process span');
let range = document.querySelector('.range');

function updateProcess(percent) {
    console.log(percent);
    process.style.width = `${percent}%`;
    value.innerHTML = `${percent}%`;
}

range.addEventListener('mousemove', function(e) {
    let processWidth = e.pageX - this.offsetLeft;
    let percent = processWidth / this.offsetWidth;
    percent = Math.round(percent * 100);
    updateProcess(percent);
})