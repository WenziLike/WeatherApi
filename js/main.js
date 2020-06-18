"use strict";
//===================================================================
// ! сделать вывод в выпадающий список стран мира 
//! сделать настоящее время
// ! вывести погоду

//===================================================================

const Weather = function () {
    //! Переменные
    const searchLocation = document.querySelector('.search__location');
    const city = document.querySelector('.weather__city');
    const countriesSelected = document.querySelector('.dropdown__countries');
    const citiesSelected = document.querySelector('.dropdown__cities');

    //===============================================================
    //! получил JSON file
    // const list = './data/countriesStatesCities.json';
    const list = './data/geo.json';

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

        function addOptions(select, arr) {
            for (let i = 0; i < arr.length; i++) {
                select.add(new Option(arr[i]));
            }
        }
        //===============================================================

        // !  рализация Enter вместо  Button.
        searchLocation.addEventListener('keydown', function (enterClick) {
            if (enterClick.keyCode === 13) {
                city.textContent = this.value;
                searchLocation.value = '';
            }
        });
    })();
    //===============================================================


    //===============================================================
};
window.onload = Weather;