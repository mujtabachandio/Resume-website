"use strict";
const toggleOpen = document.getElementById('toggleOpen');
const toggleClose = document.getElementById('toggleClose');
const collapseMenu = document.getElementById('collapseMenu');
if (toggleOpen && collapseMenu) {
    toggleOpen.addEventListener('click', () => {
        collapseMenu.classList.toggle('max-lg:hidden');
    });
}
if (toggleClose && collapseMenu) {
    toggleClose.addEventListener('click', () => {
        collapseMenu.classList.add('max-lg:hidden');
    });
}
const scrollToTopBtn = document.getElementById('scrollToTopBtn');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.classList.remove('hidden');
        scrollToTopBtn.classList.add('visible');
    }
    else {
        scrollToTopBtn.classList.remove('visible');
        scrollToTopBtn.classList.add('hidden');
    }
});
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
});
const faqItems = [
    { question: 'question1', answer: 'answer1', icon: 'icon1' },
    { question: 'question2', answer: 'answer2', icon: 'icon2' },
    { question: 'question3', answer: 'answer3', icon: 'icon3' },
];
faqItems.forEach((item) => {
    const questionBtn = document.getElementById(item.question);
    const answerDiv = document.getElementById(item.answer);
    const icon = document.getElementById(item.icon);
    questionBtn.addEventListener('click', () => {
        answerDiv.classList.toggle('hidden');
        icon.classList.toggle('rotate-180');
    });
});
function navigateToPage(url) {
    window.location.href = url;
}
const button = document.getElementById("navigateButton");
if (button) {
    button.addEventListener("click", () => navigateToPage("/resume.html"));
}
