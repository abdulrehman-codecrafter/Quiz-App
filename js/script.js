let questionStatement=document.getElementById('question');  
let options=document.querySelectorAll(".options");
let quizApp=document.querySelector('.quiz-app');
let finishContainer=document.querySelector('.finish-container');
let result=document.getElementById('score');

let questions = [ 
    {
        question: "What is the capital of France?",
        a : "Paris", 
        b : "London",
        c : "Rome", 
        d : "Madrid",
        correctAnswer: "option1"
    },
    
    {
        question: "What is the largest planet in our solar system?",
        a: "Mars",
        b: "Jupiter",
        c: "Saturn",
        d: "Neptune",
        correctAnswer: "option2"
    },
    {
        question: "Who is the author of the Harry Potter book series?",
        a: "J.R.R. Tolkien",
        b: "J.K. Rowling",
        c: "George R.R. Martin",
        d: "Stephen King",
        correctAnswer: "option2"
    },
    {
        question: "What is the chemical symbol for gold?",
        a: "Au",
        b: "Ag",
        c: "Fe",
        d: "Cu",
        correctAnswer: "option1"
    },
    {
        question: "Which programming language is known as the 'mother of all languages'?",
        a: "JavaScript",
        b: "Python",
        c: "C",
        d: "Java",
        correctAnswer: "option3"
    }

    ]
    
let currentQuestion = 0;
let score = 0;

const loadQuestion = () => {
    console.log("hello");
    questionStatement.innerHTML = `${currentQuestion+1})&ensp;${questions[currentQuestion].question}`;

    options[0].nextElementSibling.innerText = questions[currentQuestion].a;
    options[1].nextElementSibling.innerText = questions[currentQuestion].b;
    options[2].nextElementSibling.innerText = questions[currentQuestion].c;
    options[3].nextElementSibling.innerText = questions[currentQuestion].d;    
}

const checkAnswer=()=>{
    let answer;
    options.forEach((option)=>{
        if(option.checked){
            answer=option.id;
        }
    });
    if(answer==questions[currentQuestion].correctAnswer){
        score++;
    }
}

document.getElementById('next-button').addEventListener('click', () => {
    checkAnswer();

    options.forEach((option)=>{
        option.checked=false;
    });

    currentQuestion++;
    
    if(currentQuestion==questions.length){
        quizApp.style.display="none";
        finishContainer.style.display="block";
        result.innerText=score;
        return
    }
    

    loadQuestion();
});

document.getElementById('restart-button').addEventListener('click', () => {
    score=0;
    currentQuestion=0;
    loadQuestion();
    quizApp.style.display="block";
    finishContainer.style.display="none";
})

loadQuestion();