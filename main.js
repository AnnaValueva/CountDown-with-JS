const items = document.querySelectorAll(".countdown-item > h4")
const countdownElement = document.querySelector(".countdown")
// назначаем точку отсчета
let countdownDate = new Date(2023, 4, 1, 10, 0, 0)

function getCountdownTime() {
    // сначала получаем текущее время
    const now = new Date().getTime();

    // найти разницу времени
    const distance = countdownDate - now;

    // 1сек = 1000мс 1м = 60с 1ч = 60м 1д = 24ч
    // создаем переменные в милисек

    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;

    // производим подсчет для дней часов минут и сек
    let days = Math.floor(distance / oneDay);
    let hours = Math.floor((distance % oneDay) / oneHour);
    let minutes = Math.floor((distance % oneHour) / oneMinute);
    let seconds = Math.floor((distance % oneMinute) / 1000);
    // создаем массив с переменными
    const values = [days, hours, minutes, seconds]

    // добавляем значения переменных на стр
    items.forEach(function(item, index) {
        item.textContent = (values[index])
    })

    // когда разница достигнет 0 то интервал закончится
    if (distance < 0) {
        clearInterval(countdown);
        countdownElement.innerHTML = "<h4 class='expired'>Время вышло</h4>";
    }
}

// обновление счетчика каждую секунду
let countdown = setInterval(getCountdownTime, 1000);

// инициализация текущего времени
getCountdownTime();