/*carousel*/ document.addEventListener("DOMContentLoaded", function () { const slides = document.querySelectorAll(".slide"); const points = document.querySelectorAll(".point"); let index = 0; function showSlide(n) { slides.forEach(slide => slide.style.display = "none"); points.forEach(point => point.classList.remove("active")); slides[n].style.display = "block"; points[n].classList.add("active"); } function nextSlide() { index = (index + 1) % slides.length; showSlide(index); } function prevSlide() { index = (index - 1 + slides.length) % slides.length; showSlide(index); } function goToSlide(n) { index = n; showSlide(index); } function autoSlide() { nextSlide(); setTimeout(autoSlide, 2000); } document.querySelector(".next").addEventListener("click", nextSlide); document.querySelector(".prev").addEventListener("click", prevSlide); points.forEach((point, i) => point.addEventListener("click", () => goToSlide(i))); autoSlide(); });