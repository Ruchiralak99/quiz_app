const questions = [
    {
        question: "What does HTML stand for?",
        answers: [
            {text: "Home Tool Markup Language", correct: false},
            {text: "HyperText Markup Language", correct: true},
            {text: "Hyperlinks and Text Markup Language", correct: false},
            {text: "HyperText Machine Language", correct: false}
        ]
    },

    {
        question: "How do you center an element horizontally in CSS?",
        answers: [
            {text: "margin: 0 auto;", correct: true},
            {text: "text-align: center", correct: false},
            {text: "float: center", correct: false},
            {text: "display: center", correct: false}
        ]
    },

    {
        question: "Which property is used to change the background color in CSS?",
        answers: [
            {text: "color", correct: false},
            {text: "bgcolor", correct: false},
            {text: "background-color", correct: true},
            {text: "background", correct: false}
        
        ]
    },

    {
        question: "How do you add a comment in CSS?",
        answers: [
            {text: "'-- comment '", correct: false},
            {text: "// comment", correct: false},
            {text: "# comment", correct: false},
            {text: "/* comment */", correct: true}
        
        ]
    },





];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();


// Function to show the loader
function showLoader() {
    document.querySelector('.loader').style.display = 'block';
  }
  
  // Function to hide the loader
  function hideLoader() {
    document.querySelector('.loader').style.display = 'none';
  }
  
  // Simulating a delay of 3 seconds
  function fetchData() {
    showLoader();
    setTimeout(() => {
      // Perform your data fetching or any asynchronous task here
      // After task completion, hide the loader
      hideLoader();
    }, 3000);
  }
  
  // Call fetchData when needed
  fetchData();
  