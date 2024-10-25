const toggleOpen = document.getElementById('toggleOpen') as HTMLElement | null;
const toggleClose = document.getElementById('toggleClose') as HTMLElement | null;
const collapseMenu = document.getElementById('collapseMenu') as HTMLElement | null;

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



const scrollToTopBtn = document.getElementById('scrollToTopBtn') as HTMLButtonElement;

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollToTopBtn.classList.remove('hidden');
    scrollToTopBtn.classList.add('visible');
  } else {
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



interface FAQItem {
  question: string;
  answer: string;
  icon: string;
}

const faqItems: FAQItem[] = [
  { question: 'question1', answer: 'answer1', icon: 'icon1' },
  { question: 'question2', answer: 'answer2', icon: 'icon2' },
  { question: 'question3', answer: 'answer3', icon: 'icon3' },
];

faqItems.forEach((item) => {
  const questionBtn = document.getElementById(item.question) as HTMLButtonElement;
  const answerDiv = document.getElementById(item.answer) as HTMLDivElement;
  const icon = document.getElementById(item.icon) as any;

  questionBtn.addEventListener('click', () => {
    answerDiv.classList.toggle('hidden');
    icon.classList.toggle('rotate-180');
  });
});


function navigateToPage(url: string): void {
  window.location.href = url;
}

const button = document.getElementById("navigateButton");
if (button) {
  button.addEventListener("click", () => navigateToPage("/resume.html"));
}
