// "use strict";
//===================================================================
// ! сделать вывод в выпадающий список стран мира 
//! сделать настоящее время
// ! вывести погоду

//===================================================================

const Weather = function () {
    const city = document.querySelector('.weather__city');
    const countriesSelected = document.querySelector('.dropdown__countries');
    const citiesSelected = document.querySelector('.dropdown__cities');

    //===============================================================
    //! получил JSON file
    const list = './data/CountriesToCities.json';

    (async function () {
        const response = await fetch(list);
        const data = await response.json();
        //=================
        // ! функция добаления Options
        function addOptions(select, arr) {
            for (let i = 0; i < arr.length; i++) {
                select.add(new Option(arr[i]));
            }
        }
        //=================
        // ! добавляем страны и города
        let countries = Object.keys(data);
        countries.sort();
        addOptions(countriesSelected, countries);

        let cities = data[countries[0]];
        addOptions(citiesSelected, cities);
        //=================

        countriesSelected.addEventListener('change', function () {
            let listCities = data[this.value];
            listCities.sort();
            citiesSelected.length = 0;

            addOptions(citiesSelected, listCities);
        });
        //===============================================================

        // !  рализация Enter вместо  Button.
        searchCity.addEventListener('keydown', function (enterClick) {
            if (enterClick.keyCode === 13) {
                city.textContent = this.value;
                searchCity.value = '';
            }
        });
    })();
    //===============================================================
    const icon = document.querySelector('.icon-search');
    const searchLocat = document.querySelector('.search__location');
    const searchCity = document.querySelector('.search__city');

    icon.addEventListener('click', () => {
        searchCity.classList.toggle("active");
        searchLocat.classList.toggle("active");
        document.querySelector("input[type='text']").focus();

    });

    //===============================================================
};
window.onload = Weather;