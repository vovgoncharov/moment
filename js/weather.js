export function initWeather() {
    const city = document.querySelector('.city');
    const formWeather = document.querySelector('.weather');
    const icon = document.querySelector('.weather-icon');
    const temp = document.querySelector('.temperature');
    const description = document.querySelector('.weather-description');
    const wind = document.querySelector('.wind');
    const humidity = document.querySelector('.humidity');
  
    const getWeather = () => {
      window.addEventListener('load', (e) => {
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
      formWeather.addEventListener('submit', (e) => {
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
  
    function setLocalStorage() {
      localStorage.setItem('city', city.value);
    }
    window.addEventListener('beforeunload', setLocalStorage);
  
    function getLocalStorage() {
      if (localStorage.getItem('city')) {
        city.value = localStorage.getItem('city');
      }
    }
    window.addEventListener('load', getLocalStorage);
  
    getWeather();
  }
  
