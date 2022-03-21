let boxes = document.querySelectorAll('.box');
let targetList = document.querySelectorAll('.target');
let curTarget = null;

targetList.forEach(item => {
    item.addEventListener('dragstart', function(e) {
        this.classList.add('dragging');
        curTarget = this;
    });

    item.addEventListener('dragend', function(e) {
        this.classList.remove('dragging');
    });
})

boxes.forEach(item => {
    item.addEventListener('dragover', function(e) {
        e.preventDefault();
    });
    item.addEventListener('drop', function(e){
        if(!item.querySelector('.target')) {
            this.appendChild(curTarget);
        }
    });
});
// dragover
// dropover