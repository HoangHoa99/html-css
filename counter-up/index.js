let countItem = document.querySelectorAll('.counter');

function count(element) {
    let eNumber = element.querySelector('.count');
    let to = parseInt(eNumber.innerText);
    let count = 0;
    let time = 250;
    let step = Math.round(to / time);
    let counting = setInterval(() => {
        if(count > to) {
            clearInterval(counting);
            eNumber.innerText = to;
        }
        else {
            count += step;
            eNumber.innerText = count;
        }
    }, 1);
}

countItem.forEach(item => {
    count(item);
})
