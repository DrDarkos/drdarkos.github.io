// Переменные игры
let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 10;
const messageElement = document.getElementById('message');
const attemptsElement = document.getElementById('attempts');
const guessInput = document.getElementById('guess-input');
const submitBtn = document.getElementById('submit-btn');
const restartBtn = document.getElementById('restart-btn');

// Функция для проверки введенного числа
function checkGuess() {
    const userGuess = parseInt(guessInput.value);
    
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        messageElement.textContent = 'Пожалуйста, введите число от 1 до 100!';
        return;
    }
    
    attempts--;
    attemptsElement.textContent = `Осталось попыток: ${attempts}`;
    
    if (userGuess === randomNumber) {
        messageElement.textContent = 'Поздравляем! Вы угадали число!';
        gameOver();
    } else if (attempts === 0) {
        messageElement.textContent = `Вы проиграли! Загаданное число было: ${randomNumber}`;
        gameOver();
    } else if (userGuess < randomNumber) {
        messageElement.textContent = 'Ваше число меньше загаданного. Попробуйте еще раз!';
    } else {
        messageElement.textContent = 'Ваше число больше загаданного. Попробуйте еще раз!';
    }
    
    guessInput.value = ''; // Очистить поле ввода
}

// Функция завершения игры
function gameOver() {
    guessInput.disabled = true;
    submitBtn.disabled = true;
    restartBtn.style.display = 'block'; // Показываем кнопку для перезапуска игры
}

// Функция перезапуска игры
function restartGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 10;
    guessInput.disabled = false;
    submitBtn.disabled = false;
    restartBtn.style.display = 'none';
    messageElement.textContent = 'Попробуйте угадать число!';
    attemptsElement.textContent = `Осталось попыток: ${attempts}`;
}

// События
submitBtn.addEventListener('click', checkGuess);
restartBtn.addEventListener('click', restartGame);
