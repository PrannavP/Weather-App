const button = document.getElementById('get');

const apiKey = 'ee317f8280f598aca9be557d9f52ade8';

const city = "Kathmandu"

const fetchWeatherData = () => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
        .then(response => response.json())
        .then((data) => {
            console.log(data);
        });
};

// button.addEventListener('click', fetchWeatherData);