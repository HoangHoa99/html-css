var search = document.querySelector('.search');
var city = document.querySelector('.city');
var country = document.querySelector('.country');
var time = document.querySelector('.time');
var value = document.querySelector('.value');
var shortDesc = document.querySelector('.short-desc');
var visibility = document.querySelector('.visibility span');
var windy = document.querySelector('.windy span');
var cloudy = document.querySelector('.cloudy span');
var form = document.querySelector('form');
var body = document.querySelector('body');
var weather = document.querySelector('.weather');

const apiKey = 'bdafc5b62397a7cf90caf6b7d62d6bda';
const curLocale = 'Gia Lai';

function assignData(data) {
    city.innerText = data.name;
    country.innerText = data.sys.country;
    const temp = Math.round(data.main.temp);
    if(temp <= 20) {
        body.classList.add('cold');
        body.classList.remove('hot');
        weather.classList.add('cold');
        weather.classList.remove('hot');
    }
    else {
        body.classList.remove('cold');
        body.classList.add('hot');
        weather.classList.remove('cold');
        weather.classList.add('hot');
    }

    const curDate = new Date();
    time.innerText = curDate.toLocaleString();
    value.innerText = temp;
    cloudy.innerText = data.clouds.all + ' %';
    visibility.innerText = data.visibility + ' m';
    windy.innerText = data.wind.speed + ' (m/s)';
    shortDesc.innerText = data.weather[0].main;

    search.value = '';
}

function handlerError(err, city) {
    alert(`Can not find data of ${city} city`);
    search.value = '';
}

async function changeWeather() {
    search.value.trim();
    const searchParam = search.value === '' ? curLocale : search.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchParam}&appid=${apiKey}&units=metric`;

    const dataResponse = await fetch(url)
    .then(res => res.json())
    .then(data => assignData(data))
    .catch(error => handlerError(error, search.value));
}

changeWeather();

form.addEventListener('submit', function(e) {
    e.preventDefault();
    changeWeather();
})