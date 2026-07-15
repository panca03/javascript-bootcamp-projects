const questions = [
  {
    question: 'What is the capital of France?',
    answers: [
      { text: 'Berlin', correct: false },
      { text: 'Beirut', correct: false },
      { text: 'Paris', correct: true },
      { text: 'London', correct: false },
    ],
  },

  {
    question: 'What is 2 + 3?',
    answers: [
      { text: '8', correct: false },
      { text: '5', correct: true },
      { text: '9', correct: false },
      { text: '4', correct: false },
    ],
  },

  {
    question: 'Which galaxy does the solar sytem exist?',
    answers: [
      { text: 'Nebulla', correct: false },
      { text: 'Red Star', correct: false },
      { text: 'Crabby', correct: false },
      { text: 'Milky-Way', correct: true },
    ],
  },
];

const questionElement = document.getElementById('question');
const asnwerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = 'Next';
  nextButton.style.display = 'none';
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  questionElement.innerText = currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn');
    button.addEventListener('click', () => selectAnswer(answer));
    asnwerButtons.appendChild(button);
  });
}

function resetState() {
  nextButton.style.display = 'none';
  asnwerButtons.innerHTML = '';
}

function selectAnswer(answer) {
  if (answer.correct) {
    score++;
  }

  nextButton.style.display = 'block';
}

nextButton.addEventListener('click', () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
});

function showScore() {
  resetState();
  questionElement.innerText = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = 'Restart Quiz';
  nextButton.style.display = 'block';
  nextButton.onclick = startQuiz;
}

startQuiz();
