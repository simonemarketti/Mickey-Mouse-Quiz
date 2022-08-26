//  query form and result
const quiz = document.querySelector('.quiz')
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');
const percentage = document.querySelector('.percentage')
const images = document.querySelectorAll('.stuff');
const errors = document.querySelectorAll('.error')
const totalCorrectAnswers = document.querySelector('.total-answers');

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

    //  render number of correct answers
    totalCorrectAnswers.textContent = scoreAnswers;

    // animation - create a random number and set repetitions
    let randomNumber = 0;
    let timerRepetitionsCount = 20;

    // create animation
    const timer = setInterval(() => {
        // render random number
        percentage.textContent = `${randomNumber}%`;

        // animation run when counter > 0
        if (timerRepetitionsCount > 0) {
            randomNumber = Math.floor(Math.random() * 100);
            timerRepetitionsCount--;
        } else {
            // stop animation (counter === 0)
            clearInterval(timer);

            // conditional formatting result
            if (score < 25) {
                percentage.classList.remove('text-warning');
                percentage.classList.add('text-danger');
            } else if (score > 75) {
                percentage.classList.remove('text-warning');
                percentage.classList.add('text-success');
            }

            // render result
            percentage.textContent = `${score}%`;
        }
    }, 70);

    // show result page
    result.classList.remove('d-none');
    quiz.classList.add('d-none');
});