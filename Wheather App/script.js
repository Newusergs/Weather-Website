function getWeather() {
    const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';
    const city = document.getElementById('city').value;

    // Check if the city input is not empty
    if (city.trim() === '') {
        alert('Please enter a city name.');
        return;
    }

    // Fetch weather data from OpenWeatherMap API
    fetch(https,//api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric)
        .then(response => response.json())
        .then(data => {
            // Update the weather information on the page
            document.getElementById('city-name').innerText = data.name;
            document.getElementById('temperature').innerText = Temperature; $; { data.main.temp }
            C;
            document.getElementById('description').innerText = Description; $; { data.weather[0].description };
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('Error fetching weather data. Please try again.');
        })
    }