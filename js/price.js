const price = document.querySelector(".price");
let number = 2.812;

// Устанавливаем интервал в 5 минут
const interval = 1 * 60 * 1000;
// const interval = 1 * 60 * 100;

// Устанавливаем время работы в 1 час
const duration = 60 * 60 * 1000;
// const duration = 5 * 60 * 100;

// Функция для уменьшения числа на 8%
function decreaseNumber() {
  number *= 0.92; // 100% - 8% = 92%
  console.log(number);
  price.textContent = number.toFixed(4).slice(0, -1);
}

const intervalId = setInterval(decreaseNumber, interval);
setTimeout(() => clearInterval(intervalId), duration); // Остановка интервала через 1 час
