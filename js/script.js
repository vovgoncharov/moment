"use strict";

const date = document.querySelector(".date");
const time = document.querySelector(".time");
const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "November",
    "December",
];
const getData = () => {
    let data = new Date();
    let hours = data.getHours();
    let min = data.getMinutes();
    let seconds = data.getSeconds();
    let today = data.getDay();
    let dates = data.getDate();
    let month = data.getMonth();
    date.innerHTML = `${days[today]}, ${months[month]} ${dates}`;
    if (hours < 10) {
        hours = `0${hours}`;
    }
    if (min < 10) {
        min = `0${min}`;
    }
    if (seconds < 10) {
        seconds = `0${seconds}`;
    }
    time.innerHTML = `${hours}:${min}:${seconds}`;
};
setInterval(getData, 1000);

const greet = document.querySelector(".greeting");
const name = document.querySelector(".name");
const dates = new Date();
const greets = ["Good morning,", "Good day,", "Good evening,", "Good night,"];
const getGreet = () => {
    let hours = dates.getHours();
    if (hours > 6 && hours < 12) {
        greet.innerHTML = `${greets[0]}`;
    } else if (hours > 12 && hours < 18) {
        greet.innerHTML = `${greets[1]}`;
    } else if (hours > 18 && hours < 23) {
        greet.innerHTML = `${greets[2]}`;
    } else {
        greet.innerHTML = `${greets[3]}`;
    }
};
function setLocalStorage() {
    localStorage.setItem("name", name.value);
}
window.addEventListener("beforeunload", setLocalStorage);

function getLocalStorage() {
    if (localStorage.getItem("name")) {
        name.value = localStorage.getItem("name");
    }
}
window.addEventListener("load", getLocalStorage);

getGreet();

const data = [
    {
        text: "Пишите код так, как будто сопровождать его будет склонный к насилию психопат, который знает, где вы живете",
        author: "Стив Макконнелл",
    },
    {
        text: "Сложность программы растет до тех пор, пока не превысит способности программиста",
        author: "Артур Блох. Законы Мэрфи",
    },
    {
        text: "Ходить по воде и разрабатывать программы, следуя ТЗ, очень просто… если они заморожены",
        author: "И. Берард",
    },
    {
        text: "Измерять продуктивность программиста подсчетом строк кода — это так же, как оценивать постройку самолета по его весу.",
        author: "Bill Gates",
    },
    {
        text: "Многие из вас знакомы с достоинствами программиста. Их всего три, и разумеется это: лень, нетерпеливость и гордыня.",
        author: "Larry Wall",
    },
    {
        text: "Отладка кода — это как охота. Охота на баги.",
        author: "Amit Kalantri",
    },
    {
        text: "Любой дурак сможет написать код, который поймет машина. Хорошие программисты пишут код, который сможет понять человек.",
        author: "Martin Fowler",
    },
    {
        text: "Если вы хотите, чтобы код было легко и быстро писать — делайте его удобным для чтения.",
        author: "Robert C. Martin",
    },
    {
        text: "Пренебрегая подготовкой, вы готовитесь к поражению.",
        author: "B. Franklin",
    },
];

const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
const changeQuote = document.querySelector(".change-quote");

data.forEach(() => {
    quote.textContent = `${data[0].text}`;
    author.textContent = `${data[0].author}`;
});
changeQuote.addEventListener("click", (e) => {
    e.preventDefault();
    let number = Math.random() * 8;
    let numberIndex = Math.round(number);

    data.forEach(() => {
        quote.textContent = `${data[numberIndex].text}`;
        author.textContent = `${data[numberIndex].author}`;
    });
});

const next = document.querySelector(".slide-next");
const prev = document.querySelector(".slide-prev");
const body = document.querySelector("body");
const day = new Date();
const img = new Image();

const timeOfDays = ["morning", "afternoon", "evening", "night"];
let times;
const getTimeOfDay = () => {
    let hours = day.getHours();
    if (hours > 6 && hours < 12) {
        times = `${timeOfDays[0]}`;
    } else if (hours > 12 && hours < 18) {
        times = `${timeOfDays[1]}`;
    } else if (hours > 18 && hours < 23) {
        times = `${timeOfDays[2]}`;
    } else {
        times = `${timeOfDays[3]}`;
    }
};
getTimeOfDay();

let number;
const getRandom = () => {
    let randomNumber = Math.random() * 20;
    if (randomNumber < 1) {
        number = `01`;
    } else if (randomNumber < 9.5) {
        number = Math.round(randomNumber);
        number = `0${number}`;
        return parseInt(number, 10);
    } else {
        return (number = Math.round(randomNumber));
    }
};

const getSlideNext = () => {
    getRandom();
    img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${times}/${number}.jpg`;
    img.onload = () => {
        body.style.backgroundImage = `url("https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${times}/${number}.jpg")`;
        console.log(number);
    };
};
const getSlidePrev = () => {
    getRandom();
    img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${times}/${number}.jpg`;
    img.onload = () => {
        body.style.backgroundImage = `url("https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${times}/${number}.jpg")`;
        console.log(number);
    };
};

const nextSlide = () => {
    next.addEventListener("click", getSlideNext);
};
const prevSlide = () => {
    prev.addEventListener("click", getSlidePrev);
};

prevSlide();
nextSlide();

// import { initWeather } from "./weather.js";
// initWeather();
const city = document.querySelector(".city");
const formWeather = document.querySelector(".weather");
const icon = document.querySelector(".weather-icon");
const temp = document.querySelector(".temperature");
const description = document.querySelector(".weather-description");
const wind = document.querySelector(".wind");
const humidity = document.querySelector(".humidity");

const getWeather = () => {
    window.addEventListener("load", (e) => {
        e.preventDefault();
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=bb49e8df3718c70c26e991bdb8394fa7&units=metric`
        )
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                icon.classList.add(`owf-${data.weather[0].id}`);
                city.value = `${data.name}`;
                temp.innerHTML = `${data.main.temp} &degC`;
                description.innerHTML = `${data.weather[0].description}`;
                wind.innerHTML = `Wind speed: ${data.wind.speed} m/s`;
                humidity.innerHTML = `Humidity: ${data.main.humidity} %`;
            });
    });
    formWeather.addEventListener("submit", (e) => {
        e.preventDefault();
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=bb49e8df3718c70c26e991bdb8394fa7&units=metric`
        )
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                icon.classList.add(`owf-${data.weather[0].id}`);
                city.value = `${data.name}`;
                temp.innerHTML = `${data.main.temp} &degC`;
                description.innerHTML = `${data.weather[0].description}`;
                wind.innerHTML = `Wind speed: ${data.wind.speed} m/s`;
                humidity.innerHTML = `Humidity: ${data.main.humidity} %`;
            });
    });
};

function setLocalStorages() {
    localStorage.setItem("city", city.value);
}
window.addEventListener("beforeunload", setLocalStorages);

function getLocalStorages() {
    if (localStorage.getItem("city")) {
        city.value = localStorage.getItem("city");
    }
}
window.addEventListener("load", getLocalStorages);
getWeather();
