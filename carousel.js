let slideIndex = 0;
const slides = document.querySelectorAll('.carousel img');
const dots = document.querySelectorAll('.dot');


function showSlide(index) {
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex = index;
    }

    // Скрываем все слайды
    slides.forEach((slide, i) => {
        slide.style.display = 'none';
		slide.style.transform = 'scale(0.9)';
        dots[i].classList.remove('active');
    });

    // Показываем текущий слайд и активируем соответствующую точку
    slides[slideIndex].style.display = 'block';
    dots[slideIndex].classList.add('active');
}

// Функция для перехода на следующий слайд
function nextSlide() {
    showSlide(slideIndex + 1);
}

// Функция для перехода на предыдущий слайд
function prevSlide() {
    showSlide(slideIndex - 1);
}

// Устанавливаем начальный слайд
showSlide(slideIndex);

// Добавляем обработчики событий для кнопок
document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);

// Добавляем обработчики событий для точек
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showSlide(index);
    });
});
