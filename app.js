//  query form and result
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');
const images = document.querySelectorAll('.stuff');

//  correct answers
const correctAnswers = ['A', 'B', 'B', 'A'];

//  submit logic
form.addEventListener('submit', e => {
  e.preventDefault();

  //  save the answers
  const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

  //  create the score
  let score = 0;

  //  check the answers
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 25;
      images[index].classList.remove('d-none')
    }
  });

  //  animation
  //  create a counter
  let counter = 0;
  //  create animation
  const timer = setInterval(() => {
    result.querySelector('.percentage').textContent = `${counter}%`;
    if (counter === score) {
      clearInterval(timer);
    } else {
      counter++;
    }
  }, 70);

  // show the result
  scrollTo(0, 0);
  result.classList.remove('d-none');
});