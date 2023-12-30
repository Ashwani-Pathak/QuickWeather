function fetchWeatherData(cityName) {
    
    const apiKey = 'b127131e14914ad4a01134112233012';
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        // Update temperature
        const temperature = data.current.temp_c;
        document.querySelector('.temp').textContent = `${temperature}°C`;

        // Update city name
        const city = data.location.name;
        document.querySelector('.city').textContent = city;

        // Update humidity
        const humidity = data.current.humidity;
        document.querySelector('.humidity').textContent = `${humidity}%`;

        // Update wind speed
        const windSpeed = data.current.wind_kph;
        document.querySelector('.wind').textContent = `${windSpeed} KM/H`;

        // Update weather icon
        const weatherIcon = data.current.condition.icon;
        document.querySelector('.icon').src = weatherIcon;
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  // Event listener for search button click
  document.querySelector('button').addEventListener('click', function () {
    const cityName = document.querySelector('input').value;
    fetchWeatherData(cityName);
  });