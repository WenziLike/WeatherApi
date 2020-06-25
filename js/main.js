const Weather = {};
// ======================================

const icon = document.querySelector('.icon-search');
const searchLocat = document.querySelector('.search__location');
const searchCity = document.querySelector('.search__city');
const city = document.querySelector('.weather__city');
const weathInfo = document.querySelector('.weather__info');
const weathTemp = document.querySelector('.weather__temp');

//===============
//TODO добавления класс Active в  модального окна
icon.addEventListener('click', () => {
    searchCity.classList.toggle("active");
    searchLocat.classList.toggle("active");
    document.querySelector("input[type='text']").focus();

});
//===============
//TODO реализация Enter по вводу в input значения
searchCity.addEventListener('keydown', function (enterClick) {
    //===============
    //TODO проверка на пустоту
    let checkFoEmpStr = '';
    checkFoEmpStr = checkFoEmpStr.replace(/^\s+|\s+$/g, '');
    //===============
    if (enterClick.key === "Enter" && searchCity.value == checkFoEmpStr) {
        alert('noooo');
    } else if (enterClick.key === "Enter") {
        city.textContent = this.value;
        // cityName = this.value;
        searchCity.value = '';
    }
});