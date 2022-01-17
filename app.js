//  query form and result
const quiz = document.querySelector('.quiz')
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');
const percentage = document.querySelector('.percentage')
const images = document.querySelectorAll('.stuff');
const errors = document.querySelectorAll('.error')
const totalAnswers = document.querySelector('.total-answers');


//  correct answers
const correctAnswers = ['A', 'B', 'B', 'A'];

//  submit logic
form.addEventListener('submit', e => {
  e.preventDefault();

  //  save the user's answers
  const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

  //  create the score
  let score = 0;
  let scoreAnswers = 0;

  //  check the answers
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 25;
      scoreAnswers += 1;
      images[index].classList.remove('d-none')
      errors[index].classList.add('d-none')
    }
  });

  //  refresh number answers
  totalAnswers.textContent = scoreAnswers;

  // animation - create a random counter animation and set ripetition 
  let randomNumber = 0;
  let timerRepetitions = 20;

  const timer = setInterval(() => {
    percentage.textContent = `${randomNumber}%`;
    if (timerRepetitions === 0) {
      //  conditional formatting result
      if (score < 25) {
        percentage.classList.remove('text-warning');
        percentage.classList.add('text-danger');
      } else if (score > 75) {
        percentage.classList.remove('text-warning');
        percentage.classList.add('text-success');
      }
      percentage.textContent = `${score}%`;
      clearInterval(timer);
    } else {
      randomNumber = Math.floor(Math.random() * 100);
      timerRepetitions--;
    }
  }, 70);

  // show the result
  scrollTo(0, 0);
  result.classList.remove('d-none');
  quiz.classList.add('d-none');
});