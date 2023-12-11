const questions = [
    {
        question: "Which disney princess sings 'Once upon a time'?",
        answers: [
        {option1: "Cinderella",correct: false},
        {option2: "Aorora", correct: true},
        {option3: "snow-white", correct: false},
        {option4: "Ariel", correct: false},
        ]
    },
{
    question: "What are Cinderella's stepsisters called?",
    answer:[
    {option1: "Cornelia and Amanda", correct: false},
    {option2: "Betty and annie", correct: false},
    {option3: "Anastasia och Drizella", correct: true},
    {option4: "Alicia and Minnie", correct: false},
    ]
},

{
    question: "How many brothers does Prince Hans of the Southern Isles have in Frozen?",
    answer: [
    {option1: "12", correct: true},
    {option2: "7", correct: false},
    {option3: "14", correct: false},
    {option4: "10", correct: false},
    ]
},

{
    question: "What does 'Hakuna Matata' mean?",
    answer: [
    {option1: "seize the day", correct: false},
    {option2: "No worries", correct: true},
    {option3: "Leave it", correct: false},
    {option4: "Don't care", correct: false},
    ]
},

{
    question: "Who is Mufasa's trusted advisor in The Lion King?",
    answer: [
    {option1: "scar", correct: false},
    {option2: "zazu", correct: true},
    {option3: "Zarabi", correct: false},
    {option4: "Rafiki", correct: false},
    ]
},

{
    question: "Who is Goofy's son?",
    answer: [
    {option1: "John", correct: false},
    {option2: "Sebastian", correct: false},
    {option3: "Peter", correct: false},
    {option4: "Maximilian", correct: true},
    ]
},

{
    question: "What is the name of Sleeping Beauty's prince?",
    answer: [
    {option1: "Prins Philip", correct: true},
    {option2: "Prins Eric", correct: false},
    {option3: "Prins John", correct: false},
    {option4: "Prins Alladin", correct: false},
    ]
},

{
    question: "Pongo and Perdita originally had how many puppies in 101 Dalmatians?",
    answer: [
    {option1: "8", correct: false},
    {option2: "17", correct: false},
    {option3: "15", correct: true},
    {option4: "11", correct: false},
    ]
},



{
    question: "What were Mickey Mouse's first ever spoken words?",
    answer: [
    {option1: "Banana", correct: false},
    {option2: "Hot dog", correct: true},
    {option3: "Hello", correct: false},
    {option4: "pip", correct: false},
    ]
},

{
    question: "Who is Miguel's idol in Coco?",
    answer:[
    {option1: "Rocío Jurado", correct: false},
    {option2: "Rafael Nadal", correct: false},
    {option3: "Salvador Dalí", correct: false},
    {option4: "Ernesto de la Cruz", correct: true},
    ]
},

{
    question : "What is the name of the Italian restaurant where Lady and the Tramp share spaghetti?",
    answer: [
    {option1: "Tony's restaurant", correct: true},
    {option2: "Danni's restaurant", correct: false},
    {option3: "Mike's restaurant", correct: false},
    {option4: "Ellas's restaurant", correct: false},
    ]
},

{
    question : "What was the name of Simba's evil uncle?",
    answer: [
    {option1: "Scar", correct: true},
    {option2: "Blood", correct: false},
    {option3: "brain", correct: false},
    {option4: "diseas", correct: false},
    ]
},

{
    question : "Quasimodo was the bell ringer of which famous cathedral?",
    answer: [
    {option1: "maria del mar", correct: false},
    {option2: "Sevilla", correct: false},
    {option3: "Notre Dame", correct: true},
    {option4: "Primada", correct: false},
    ]
},
{
    question : "What is the name of Pocahontas' raccoon?",
    answer: [
    {option1: "Pichu", correct: false},
    {option2: "Neko", correct: true},
    {option3: "Stitch", correct: false},
    {option4: "Figarro", correct: false},
    ]
},
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "next";
    showQuestion();
}

function showQuestion(){
    let currentQuestion = questions[currentQuestionIndex]
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("bnt");
        answerButton.appenChild(button);
    });
}
startQuiz(){
    
}