Weather.Api = options => {
    fetch(options.ApiWeatherCity)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            city.textContent = data.name;
            weathInfo.textContent = data.weather[0].description;
            weathTemp.textContent = Math.floor(data.main.temp) + ' º';
        })
        .catch(Err => alert('Noooo'));
};