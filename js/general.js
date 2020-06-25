// вызываю функции
citiesSelected.addEventListener('change', (event) => {

    const cityName = event.target.value;
    Weather.Api({
        ApiWeatherCity: `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=6924ad4c74da8b4748e6d45269b79768`
        // ApiWeatherUvIndex: 'https://api.openweathermap.org/data/2.5/uvi?&appid=6924ad4c74da8b4748e6d45269b79768&lat=50.08&lon=19.92'

    });
});
Weather.CountryAndCity({
    list: './data/CountriesToCities.json'
});

// Weather.modal();
//====================================================