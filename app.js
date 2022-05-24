
// Добавление класса
let popup = document.querySelector('.logo__lenovo2');
let openPopupButton = document.querySelector('.button');
openPopupButton.addEventListener('click', () => {
    if (!popup.classList.contains('logo_hidden')) {
        popup.classList.add('logo_hidden');
        document.querySelector('.button').value = 'Показать все';
        document.querySelector('#arrows').style.transform = 'rotate(360deg)';

    } else {
        popup.classList.remove('logo_hidden')
        document.querySelector('.button').value = 'Скрыть';
        document.querySelector('#arrows').style.transform = 'rotate(180deg)';

    }
});

let popup1 = document.querySelector('.logo__samsung2');
let openPopupButton1 = document.querySelector('.button');
openPopupButton.addEventListener('click', () => {
    if (!popup1.classList.contains('logo_hidden')) {
        popup1.classList.add('logo_hidden');
    } else {
        popup1.classList.remove('logo_hidden')
    }
});

let popup2 = document.querySelector('.logo__apple2');
let openPopupButton2 = document.querySelector('.button');
openPopupButton.addEventListener('click', function () {
    if (!popup2.classList.contains('logo_hidden')) {
        popup2.classList.add('logo_hidden');
    } else {
        popup2.classList.remove('logo_hidden')
    }

});

let popup3 = document.querySelector('.logo__apple3');
let openPopupButton3 = document.querySelector('.button');
openPopupButton.addEventListener('click', function () {
    if (!popup3.classList.contains('logo_hidden')) {
        popup3.classList.add('logo_hidden');
    } else {
        popup3.classList.remove('logo_hidden')
    }

});




// Получаем видимую часть слайда
let viewport = document.getElementById("viewport").offsetWidth;
// Получаем кнопку вперёд
let btnNext = document.getElementById("next");
// Получаем кнопку назад
let btnPrev = document.getElementById("prev");
// Получаем элемент со всеми слайдами
let slider = document.querySelector("div.slider");
// Получаем элементы показа слайда
let viewSliders = document.querySelectorAll(".viewSlide");
// Объявляем переменную номера слайда
let viewSlide = 0;

// Назначаем цвет индикатор слайда зелёный
viewSliders[0].style.backgroundColor = "green";

// Обработка клика на кнопку вперёд
btnNext.addEventListener("click", function () {
    // Делаем индикатор слайда красный
    viewSliders[viewSlide].style.backgroundColor = "rgb(43, 247, 247)   ";
    // Условие, если номер слайда меньше четырёх
    if (viewSlide < 6) { // Если верно то
        // Увеличиваем номер слайда на один
        viewSlide++;
    } else { // Иначе
        // Номер слайда равен нулю
        viewSlide = 0;
    }
    // Закрашиваем индикатор слайда в зелёный
    viewSliders[viewSlide].style.backgroundColor = "green";
    // Меняем позицию всего слайда
    slider.style.left = -viewSlide * viewport + "px";
});

// Обработка клика на кнопку назад
btnPrev.addEventListener("click", function () {
    // Делаем индикатор слайда красный
    viewSliders[viewSlide].style.backgroundColor = "rgb(32, 218, 243)";
    // Условие, если номер слайда больше нуля
    if (viewSlide > 0) { // Если верно то
        // Уменьшаем номер слайда
        viewSlide--;
    } else { // Иначе
        // Номер слайда равен четырём
        viewSlide = 6;
    }
    // Закрашиваем индикатор слайда в зелёный
    viewSliders[viewSlide].style.backgroundColor = "green";
    // Меняем позицию всего слайда
    slider.style.left = -viewSlide * viewport + "px";
});