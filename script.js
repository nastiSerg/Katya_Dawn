/*слайдер по стрелочке*/ 
let slideIndex = 0;

function showSlide() {
    const slides = document.querySelectorAll('.slides img');
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideIndex].style.display = 'block';
}

function prevSlide() {
    slideIndex--;
    if (slideIndex < 0) {
        slideIndex = document.querySelectorAll('.slides img').length - 1;
    }
    showSlide();
}

function nextSlide() {
    slideIndex++;
    if (slideIndex >= document.querySelectorAll('.slides img').length) {
        slideIndex = 0;
    }
    showSlide();
}

showSlide();

/*app*/
document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();
   
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
   
    alert('Сообщение отправлено!');
    this.reset();
  });