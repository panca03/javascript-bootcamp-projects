# Quiz App

A simple interactive quiz application built with vanilla JavaScript, HTML, and CSS. This project demonstrates fundamental web development concepts including DOM manipulation, event handling, and dynamic UI updates.

## Features

- **Multiple Choice Questions**: Multiple answer options per question
- **Score Tracking**: Real-time score calculation during the quiz
- **Navigation**: Next button to move between questions
- **Restart Functionality**: Play the quiz again after completion
- **Responsive Design**: Clean, centered layout with intuitive user experience

### Installation

1. Clone the repository:

```bash
git clone https://github.com/panca03/09-quiz-app.git
cd 09-quiz-app
```

2. Open `index.html` in your browser:

```bash
# Or simply double-click the file
```

## Usage

1. Read the question displayed on the screen
2. Click on one of the answer buttons to select your answer
3. Click "Next Question" to proceed to the next question
4. After answering all questions, your final score will be displayed
5. Click "Restart Quiz" to play again

## Project Structure

```
09-quiz-app/
├── index.html      # Main HTML structure
├── styles.css      # Quiz styling and button styles
├── scripts.js      # Core JavaScript functionality
└── README.md       # Project documentation
```

## Technical Details

- **HTML5**: Semantic markup for structure
- **CSS3**: Modern styling with button hover effects
- **Vanilla JavaScript**: Pure DOM manipulation and event handling
- **Array of Objects**: Questions stored in structured data format

### Key Functions

| Function | Description |
|----------|-------------|
| `startQuiz()` | Initializes quiz state and displays the first question |
| `showQuestion()` | Renders current question with answer buttons |
| `resetState()` | Clears answer buttons and hides next button |
| `selectAnswer(answer)` | Handles answer selection and updates score |
| `showScore()` | Displays final score and restart option |

### Questions Included

1. **Capital of France** - Tests geography knowledge
2. **Math Calculation** - Basic arithmetic (2 + 3)
3. **Astronomy** - Solar system's galaxy identification

Each question has 4 answer options with one correct answer marked.