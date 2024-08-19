
// ________________________________ Script pour le Carrousel ________________________________

let currentIndex = 0;
const images = document.querySelectorAll('#slider > div');
const totalImages = images.length;

document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalImages;
    updateSlider();
});

document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateSlider();
});

function updateSlider() {
    const newTransformValue = -currentIndex * 100;
    document.getElementById('slider').style.transform = `translateX(${newTransformValue}%)`;
}

function autoSlide() {
    currentIndex = (currentIndex + 1) % totalImages;
    updateSlider();
}


setInterval(autoSlide, 3000);


updateSlider();

