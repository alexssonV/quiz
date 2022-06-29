const quizInventory = [
    {
        question: 'Is Bryan a braindead character for little sissy girls?',
        a: 'Yes',
        b: 'Of Course',
        c: 'Fuck yes',
        d: 'Oh yes',
        answer: 'a'
    },
    {
        question: 'Question placeholder 2',
        a: 'Answer A',
        b: 'Answer B',
        c: 'Answer C',
        d: 'Answer D',
        answer: 'a'
    },
    {
        question: 'Question placeholder 3',
        a: 'Answer A',
        b: 'Answer B',
        c: 'Answer C',
        d: 'Answer D',
        answer: 'b'
    },
    {
        question: 'Question placeholder 4',
        a: 'Answer A',
        b: 'Answer B',
        c: 'Answer C',
        d: 'Answer D',
        answer: 'a'
    },
    {
        question: 'Question placeholder 5',
        a: 'Answer A',
        b: 'Answer B',
        c: 'Answer C',
        d: 'Answer D',
        answer: 'a'
    }
];

// Declaration of variables that are required

const main = document.getElementById('main');
const question = document.getElementById('question');
const optionA = document.getElementById('label-a');
const optionB = document.getElementById('label-b');
const optionC = document.getElementById('label-c');
const optionD = document.getElementById('label-d');
const submit = document.getElementById('submit');
const allOptions = document.querySelectorAll('.options');

let questionNumber = 0;
let score = 0;

// Main Quiz function that displays questions and answer options from the quiz inventory

function quiz() {
    deselect();
    const currentQuestion = quizInventory[questionNumber];
    
    question.innerHTML = currentQuestion.question;
    optionA.innerHTML = currentQuestion.a;
    optionB.innerHTML = currentQuestion.b;
    optionC.innerHTML = currentQuestion.c;
    optionD.innerHTML = currentQuestion.d;
}


quiz(); // Initial Call of the Quiz

// Function to store answer value when checked

function getAnswer() {

    let answer = undefined;

    allOptions.forEach((option) => {
        if (option.checked) {
            answer = option.id;
        }
    });

    return answer;
};

// Function to deselect answer options with each refresh and/or question change.

function deselect() {
    allOptions.forEach(option => option.checked=false)
};

// On button press => gets the answer value stored and checked. If answer's value
// equal to the correct answer value - increments score by 1.
// Also checks if there are more questions ahead, ends the quiz if there aren't.

submit.addEventListener('click', () => {

    const answer = getAnswer();

    if (answer) {
        if (answer === quizInventory[questionNumber].answer) {
            score++;
        }
        questionNumber++;
        if (questionNumber < quizInventory.length) {
            quiz();
        } else {
            main.innerHTML = `<h2>You have answered ${score}/${quizInventory.length} questions correctly.</h2>`;
        }
    }
});