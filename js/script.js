var options = {
    accessibility: true,
    prevNextButtons: true,
    pageDots: true,
    setGallerySize: false,
    arrowShape: {
        x0: 10,
        x1: 60,
        y1: 50,
        x2: 60,
        y2: 45,
        x3: 15
    }
};

var carousel = document.querySelector('[data-carousel]');
var slides = document.getElementsByClassName('carousel-cell');
var flkty = new Flickity(carousel, options);

flkty.on('scroll', function () {
    flkty.slides.forEach(function (slide, i) {
        var image = slides[i];
        var x = (slide.target + flkty.x) * -1 / 3;
        image.style.backgroundPosition = x + 'px';
    });
});


const timeEl = document.getElementById('time');
const dateEl = document.getElementById('date');
const days = ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'];
const months = ['Gen', 'Feb', 'Mar', 'Apr', 'Mag', 'Giu', 'Lug', 'Aug', 'Set', 'Ott', 'Nov', 'Dic'];


const timezone = document.getElementById('time-zone-londra');
const timezone2 = document.getElementById('time-zone-milano');
const timezone3 = document.getElementById('time-zone-bangkok');
const timezone4 = document.getElementById('time-zone-los-angeles');
const timezone5 = document.getElementById('time-zone-nairobi');


//LONDRA
const weatherForecastElLondra = document.getElementById('weather-forecast-londra');
const currentTempElLondra = document.getElementById('current-temp-londra');

// MILANO
const weatherForecastElMilano = document.getElementById('weather-forecast-milano');
const currentTempElMilano = document.getElementById('current-temp-milano');

// BANGKOK
const weatherForecastElBangkok = document.getElementById('weather-forecast-bangkok');
const currentTempElBangkok = document.getElementById('current-temp-bangkok');


// Los Angeles
const weatherForecastElLosAngeles = document.getElementById('weather-forecast-losAngeles');
const currentTempElLosAngeles = document.getElementById('current-temp-losAngeles');


// Nairobi
const weatherForecastElNairobi = document.getElementById('weather-forecast-nairobi');
const currentTempElNairobi = document.getElementById('current-temp-nairobi');


/* API -> Registrarsi */
const API_KEY = '1459a1d5ba9ea0eeef9e1efa5cfdd61d';




setInterval(() => {
    const time = new Date();
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    const hour = time.getHours();
    const hoursIn12HrFormat = hour >= 13 ? hour % 12 : hour;
    const minutes = time.getMinutes();
    const ampm = hour >= 12 ? 'PM' : 'AM';

    timeEl.innerHTML = (hoursIn12HrFormat < 10 ? '0' + hoursIn12HrFormat : hoursIn12HrFormat) + ':' + (minutes < 10 ? '0' + minutes : minutes) + ' ' + `<span in="am-pm">${ampm}</span>`;

    dateEl.innerHTML = days[day] + ', ' + date + ' ' + months[month]

}, 1000);



getLondonData()
function getLondonData() {
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=51.50853&lon=-0.12574&exclude=hourly,minutely&units=metric&appid=${API_KEY}`).then(res => res.json()).then(data => {
        console.log(data)
        showWeatherLondonData(data);
    });
};

function showWeatherLondonData(data) {
    timezone.innerHTML = data.timezone;
    let otherDayForcast = ''
    data.daily.forEach((day, idx) => {
        if (idx == 0) {
            currentTempElLondra.innerHTML = `
            <img src="http://openweathermap.org/img/wn/${day.weather[0].icon}@4x.png" alt="weather icon" class="w-icon">
            <div class="other">
                <div class="day">${window.moment(day.dt * 1000).format('ddd')}</div>       
                <div class="temp">Night: ${day.temp.night}&#176;C </div>
                <div class="temp">Day: ${day.temp.day}&#176;C </div>
            </div>`
        } else {
            otherDayForcast += `
            <div class="weather-forecast-item">
                <div class="day">${window.moment(day.dt * 1000).format('ddd')}</div>
                <img src="http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png" alt="weather icon" class="w-icon" width="80px">
                <div class="temp">Night: ${day.temp.night}&#176; C</div>
                <div class="temp">Day: ${day.temp.day}&#176; C</div>
            </div>`
        }
    })
    weatherForecastElLondra.innerHTML = otherDayForcast;
}


getMilanoData()
function getMilanoData() {
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=45.5&lon=9.5&exclude=hourly,minutely&units=metric&appid=${API_KEY}`).then(res => res.json()).then(data => {
        // console.log(data)
        showWeatherMilanData(data);
    });
};

function showWeatherMilanData(data) {
    timezone2.innerHTML = data.timezone;
    let otherDayForcast = ''
    data.daily.forEach((day, idx) => {
        if (idx == 0) {
            currentTempElMilano.innerHTML = `
            <img src="http://openweathermap.org/img/wn/${day.weather[0].icon}@4x.png" alt="weather icon" class="w-icon">
            <div class="other">
                <div class="day">${window.moment(day.dt * 1000).format('ddd')}</div>
                <div class="temp">Night: ${day.temp.night}&#176;C </div>
                <div class="temp">Day: ${day.temp.day}&#176;C </div>
            </div>`
        } else {
            otherDayForcast += `
            <div class="weather-forecast-item">
                <div class="day">${window.moment(day.dt * 1000).format('ddd')}</div>
                <img src="http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png" alt="weather icon" class="w-icon" width="80px">
                <div class="temp">Night: ${day.temp.night}&#176; C </div>
                <div class="temp">Day: ${day.temp.day}&#176; C </div>
            </div>`
        }
    })
    weatherForecastElMilano.innerHTML = otherDayForcast;
}



getBangkokData()
function getBangkokData() {
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=13.75&lon=100.51667&exclude=hourly,minutely&units=metric&appid=${API_KEY}`).then(res => res.json()).then(data => {
        // console.log(data)
        showWeatherBangkokData(data);
    });
};

function showWeatherBangkokData(data) {
    timezone3.innerHTML = data.timezone;
    let otherDayForcast = ''
    data.daily.forEach((day, idx) => {
        if (idx == 0) {
            currentTempElBangkok.innerHTML = `
            <img src="http://openweathermap.org/img/wn/${day.weather[0].icon}@4x.png" alt="weather icon" class="w-icon">
            <div class="other">
                <div class="day">${window.moment(day.dt * 1000).format('ddd')}</div>
                <div class="temp">Night: ${day.temp.night}&#176;C </div>
                <div class="temp">Day: ${day.temp.day}&#176;C </div>
            </div>`
        } else {
            otherDayForcast += `
            <div class="weather-forecast-item">
                <div class="day">${window.moment(day.dt * 1000).format('ddd')}</div>
                <img src="http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png" alt="weather icon" class="w-icon" width="80px">
                <div class="temp">Night: ${day.temp.night}&#176;C </div>
                <div class="temp">Day: ${day.temp.day}&#176;C </div>
            </div>`
        }
    })
    weatherForecastElBangkok.innerHTML = otherDayForcast;
}




getLosAngelesData()
function getLosAngelesData() {
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=34.052231&lon=-118.243683&exclude=hourly,minutely&units=metric&appid=${API_KEY}`).then(res => res.json()).then(data => {
        // console.log(data)
        showWeatherLosAngelesData(data);
    });
};

function showWeatherLosAngelesData(data) {
    timezone4.innerHTML = data.timezone;
    let otherDayForcast = ''
    data.daily.forEach((day, idx) => {
        if (idx == 0) {
            currentTempElLosAngeles.innerHTML = `
            <img src="http://openweathermap.org/img/wn/${day.weather[0].icon}@4x.png" alt="weather icon" class="w-icon">
            <div class="other">
                <div class="day">${window.moment(day.dt * 1000).format('ddd')}</div>
                <div class="temp">Night: ${day.temp.night}&#176;C </div>
                <div class="temp">Day: ${day.temp.day}&#176;C </div>
            </div>`
        } else {
            otherDayForcast += `
            <div class="weather-forecast-item">
                <div class="day">${window.moment(day.dt * 1000).format('ddd')}</div>
                <img src="http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png" alt="weather icon" class="w-icon" width="80px">
                <div class="temp">Night: ${day.temp.night}&#176;C </div>
                <div class="temp">Day: ${day.temp.day}&#176;C </div>
            </div>`
        }
    })
    weatherForecastElLosAngeles.innerHTML = otherDayForcast;
}



getNairobiData()
function getNairobiData() {
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=-1.28333&lon=36.833328&exclude=hourly,minutely&units=metric&appid=${API_KEY}`).then(res => res.json()).then(data => {
        console.log(data)
        showWeatherNairobiData(data);
    });
};

function showWeatherNairobiData(data) {
    timezone5.innerHTML = data.timezone;
    let otherDayForcast = ''

    data.daily.forEach((day, idx) => {
        if (idx == 0) {
            currentTempElNairobi.innerHTML = `
            <img src="http://openweathermap.org/img/wn/${day.weather[0].icon}@4x.png" alt="weather icon" class="w-icon">
            <div class="other">
                <div class="day">${window.moment(day.dt * 1000).format('ddd')}</div>
                <div class="temp">Night: ${day.temp.night}&#176;C </div>
                <div class="temp">Day: ${day.temp.day}&#176;C </div>
            </div>`
        } else {
            otherDayForcast += `
            <div class="weather-forecast-item">
                <div class="day">${window.moment(day.dt * 1000).format('ddd')}</div>
                <img src="http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png" alt="weather icon" class="w-icon" width="80px">
                <div class="temp">Night: ${day.temp.night}&#176;C </div>
                <div class="temp">Day: ${day.temp.day}&#176;C </div>
            </div>`
        }
    })
    weatherForecastElNairobi.innerHTML = otherDayForcast;
}













