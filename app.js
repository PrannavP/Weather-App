const apiKey = 'ee317f8280f598aca9be557d9f52ade8'; // Use your own api key here :)

const inputField = document.querySelector('input');
const button = document.querySelector('button');

const fetchWeatherData = () => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${inputField.value}&units=metric&appid=${apiKey}`)
        .then(response => response.json())
        .then((data) => {
            // console.log(data);

            // error display
            const errorMessageDisplay = document.querySelector('.error-container');
            const statusCode = data.cod;

            if(statusCode === "400"){
                errorMessageDisplay.style.display = "block";
            };

            // delete the error message onclick
            errorMessageDisplay.addEventListener('click', () => {
                errorMessageDisplay.remove();
            });

            const currentMainWeather = data.weather[0].main;
            const currentMainTemperature = Math.floor(data.main.temp);
            const cityName = data.name;

            const cityHolder = document.querySelector('h2');
            const imgHolder = document.querySelector('img');
            const descriptionHolder = document.querySelector('#description');
            const temperatureHolder = document.querySelector('#temperature');

            // displaying the image according to the main weather.
            switch(data.weather[0].main){
                case "Clear":
                    imgHolder.src = 'imgs/clear.png';
                    break;
                case "Rain":
                    imgHolder.src = 'imgs/rain.png';
                    break;
                case "Clouds":
                    imgHolder.src = 'imgs/cloud.png';
                    break;
                case "Snow":
                    imgHolder.src = 'imgs/snow.png';
                    break;
                case "Haze":
                    imgHolder.src = 'imgs/mist.png';
                    break
                default:
                    imgHolder.src = '';
            }

            cityHolder.innerHTML = `${cityName}`;
            descriptionHolder.innerHTML = `${currentMainWeather}`;
            temperatureHolder.innerHTML = `Feels like ${currentMainTemperature}°C`;
        });
};

button.addEventListener('click', fetchWeatherData);