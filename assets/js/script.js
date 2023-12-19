
const questions = [
    {
        question: "Which disney princess sings 'Once upon a time'?",
        answers: [
        {option: "Cinderella",correct: false},
        {option: "Aorora", correct: true},
        {option: "snow-white", correct: false},
        {option: "Ariel", correct: false},
        ]
    },
{
    question: "What are Cinderella's stepsisters called?",
    answers:[
    {option: "Cornelia and Amanda", correct: false},
    {option: "Betty and annie", correct: false},
    {option: "Anastasia och Drizella", correct: true},
    {option: "Alicia and Minnie", correct: false},
    ]
},

{
    question: "How many brothers does Prince Hans of the Southern Isles have in Frozen?",
    answers: [
    {option: "12", correct: true},
    {option: "7", correct: false},
    {option: "14", correct: false},
    {option: "10", correct: false},
    ]
},

{
    question: "What does 'Hakuna Matata' mean?",
    answers: [
    {option: "seize the day", correct: false},
    {option: "No worries", correct: true},
    {option: "Leave it", correct: false},
    {option: "Don't care", correct: false},
    ]
},

{
    question: "Who is Mufasa's trusted advisor in The Lion King?",
    answers: [
    {option: "scar", correct: false},
    {option: "zazu", correct: true},
    {option: "Zarabi", correct: false},
    {option: "Rafiki", correct: false},
    ]
},

{
    question: "Who is Goofy's son?",
    answers: [
    {option: "John", correct: false},
    {option: "Sebastian", correct: false},
    {option: "Peter", correct: false},
    {option: "Maximilian", correct: true},
    ]
},

{
    question: "What is the name of Sleeping Beauty's prince?",
    answers: [
    {option: "Prins Philip", correct: true},
    {option: "Prins Eric", correct: false},
    {option: "Prins John", correct: false},
    {option: "Prins Alladin", correct: false},
    ]
},

{
    question: "Pongo and Perdita originally had how many puppies in 101 Dalmatians?",
    answers: [
    {option: "8", correct: false},
    {option: "17", correct: false},
    {option: "15", correct: true},
    {option: "11", correct: false},
    ]
},



{
    question: "What were Mickey Mouse's first ever spoken words?",
    answers: [
    {option: "Banana", correct: false},
    {option: "Hot dog", correct: true},
    {option: "Hello", correct: false},
    {option: "pip", correct: false},
    ]
},

{
    question: "Who is Miguel's idol in Coco?",
    answers:[
    {option: "Rocío Jurado", correct: false},
    {option: "Rafael Nadal", correct: false},
    {option: "Salvador Dalí", correct: false},
    {option: "Ernesto de la Cruz", correct: true},
    ]
},

{
    question : "What is the name of the Italian restaurant where Lady and the Tramp share spaghetti?",
    answers: [
    {option: "Tony's restaurant", correct: true},
    {option: "Danni's restaurant", correct: false},
    {option: "Mike's restaurant", correct: false},
    {option: "Ellas's restaurant", correct: false},
    ]
},

{
    question : "What was the name of Simba's evil uncle?",
    answers: [
    {option: "Scar", correct: true},
    {option: "Blood", correct: false},
    {option: "brain", correct: false},
    {option: "diseas", correct: false},
    ]
},

{
    question : "Quasimodo was the bell ringer of which famous cathedral?",
    answers: [
    {option: "maria del mar", correct: false},
    {option: "Sevilla", correct: false},
    {option: "Notre Dame", correct: true},
    {option: "Primada", correct: false},
    ]
},
{
    question : "What is the name of Pocahontas' raccoon?",
    answers: [
    {option: "Pichu", correct: false},
    {option: "Neko", correct: true},
    {option: "Stitch", correct: false},
    {option: "Figarro", correct: false},
    ]
}
];



document.addEventListener('DOMContentLoaded', function () {
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

//function to start the quiz when user lands on the page
function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.option;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}


function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}


//when user chooce the questions answers
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = "true";
    });
    nextButton.style.display = "block";
}


//when the game are finnished and the user want play again
function showScore(){
    resetState();
    questionElement.innerHTML = 'You scored ${score} out of ${questions.length}!';
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
    backButton.innerHTML = "back to homepage";
    backButton.style.display = "block";
   
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", () =>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
        }else{
            startQuiz();
            
        }
})





nextButton.addEventListener("click", () => {
    if(currentQuestionIndex <questions.length){
        handleNextButton();

    }else{
        startQuiz();
    }
})

startQuiz()
});


function playPauseAudio() {
    const soundBtn = document.getElementById('sound-btn');
    if (welcomeAudio.paused) {
        welcomeAudio.play();
        soundBtn.innerHTML = `SOUND <i class="fa-solid fa-volume-high"></i>`;
    } else {
        welcomeAudio.pause();
        soundBtn.innerHTML = `SOUND <i class="fa-solid fa-volume-xmark"></i>`;
    }
}

/**
 * Play sound when a btn is clicked
 */

window.addEventListener('click', () =>{
document.getElementById("sound").play();
});