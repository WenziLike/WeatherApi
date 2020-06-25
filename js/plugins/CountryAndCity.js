//Todo получения  Json Object , создания, и добавления выпадающего списка Стран и городов
/* 
1 получения данных Json файла
2 выпадающие списки Стран и городов
*/
//=================================================================================
//===== 1 =====
Weather.CountryAndCity = options => {

    let request = new XMLHttpRequest();

    request.open('GET', options.list);
    request.responseType = 'json';
    request.send();

    request.onload = () => {
        let JsonObj = request.response;
        addCountryToCity(JsonObj);
        // console.dir(JsonObj);
    };
};
//=================================================================================
const countriesSelected = document.querySelector('.dropdown__countries');
const citiesSelected = document.querySelector('.dropdown__cities');
//=================================================================================
//===== 2 =====
function addCountryToCity(JsonObj) {
    function addOptions(select, arr) {
        for (let i = 0; i < arr.length; i++) {
            select.add(new Option(arr[i]));
        }
    }

    //=================
    const countries = Object.keys(JsonObj);
    countries.sort();
    addOptions(countriesSelected, countries);

    const cities = JsonObj[countries[0]];
    addOptions(citiesSelected, cities);
    //=================
    // добавляет и сортирует города из Json файла
    countriesSelected.addEventListener('change', function () {
        const listCities = JsonObj[this.value];
        listCities.sort();
        citiesSelected.length = 0;

        addOptions(citiesSelected, listCities);
    });
}