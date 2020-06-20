// "use strict";
//===================================================================
//! сделать проверку инпут
//! сделать скрытие селекта  города и какой селект выбран

//===================================================================

const Weather = function () {
    const countriesSelected = document.querySelector('.dropdown__countries');
    const citiesSelected = document.querySelector('.dropdown__cities');
    const city = document.querySelector('.weather__city');

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
        const countries = Object.keys(data);
        countries.sort();
        addOptions(countriesSelected, countries);


        const cities = data[countries[0]];
        addOptions(citiesSelected, cities);
        //=================
        countriesSelected.addEventListener('change', function () {
            const listCities = data[this.value];
            listCities.sort();
            citiesSelected.length = 0;

            // let index = countriesSelected.selectedIndex;
            // console.log('selectedIndex: ' + index);// выбранный селект





            addOptions(citiesSelected, listCities);
        });
    })();
    //===============================================================
    // !  рализация Enter вместо  Button.

    const icon = document.querySelector('.icon-search');
    const searchLocat = document.querySelector('.search__location');
    const searchCity = document.querySelector('.search__city');


    icon.addEventListener('click', () => {
        searchCity.classList.toggle("active");
        searchLocat.classList.toggle("active");
        document.querySelector("input[type='text']").focus();

    });

    searchCity.addEventListener('keydown', function (enterClick) {

        let checkFoEmpStr = '';
        checkFoEmpStr = checkFoEmpStr.replace(/^\s+|\s+$/g, '');

        if (enterClick.key === "Enter" && searchCity.value == checkFoEmpStr) {
            alert('noooo');
        } else if (enterClick.key === "Enter") {
            city.textContent = this.value;
            searchCity.value = '';
        }
    });

    //===============================================================
};
window.onload = Weather;