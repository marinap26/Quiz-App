const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const display_question = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submit = document.getElementById("submit");
let currentQuiz;
let score = 0;
let indexes = [];
let correctAns;

const quiz_data = [
    {
        question: "Inside which HTML element do we put the JavaScript file reference?",
        a: "<javascript>",
        b: "<scripting>",
        c: "js",
        d: "<script>",
        correct: "d"
    }, 
    {
        question: "Where is the correct place to insert a JavaScript file reference?",
        a: "The <head> section",
        b: "The <body> section",
        c: "No need to insert",
        d: "Both <head> and <body> section are correct",
        correct: "d"
    },
    {
        question: "How does a FOR loop start in JavaScript?",
        a: "for (i=0; i<=5; i++)",
        b: "for (i=0; i<=5)",
        c: "for (i<=5; i++)",
        d: "for i=1 to 5",
        correct: "a"
    },
    {
        question: "Which event occurs when the user clicks on an HTML element?",
        a: "onchange",
        b: "onmouseover",
        c: "onclick",
        d: "onmouseclick",
        correct: "c"
    },
    {
        question: "How to write `Hello World` in an alert box?",
        a: "msg(`Hello World`);",
        b: "alert(`Hello World`);",
        c: "msgbox(`Hello World`);",
        d: "alertbox(`Hello World`);",
        correct: "b"
    },
    {
        question: "JavaScript is a ___ -side programming language.",
        a: "Client",
        b: "Server",
        c: "Both",
        d: "None",
        correct: "c"
    }, 
    {
        question: "How do you find the minimum of x and y using JavaScript?",
        a: "min(x,y)",
        b: "Math.min(x,y)",
        c: "Math.min(xy)",
        d: "min(xy)",
        correct: "b"
    }, 
];

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    while (indexes.length<quiz_data.length){
        let random = Math.floor(Math.random() * quiz_data.length);
        if(!indexes.includes(random)){
            indexes.push(random);  
            break;  
        } 
    }

    indexes.forEach(index => {
        currentQuiz = quiz_data[index];
        correctAns=currentQuiz.correct;
        display_question.textContent = currentQuiz.question;
        a_text.textContent = currentQuiz.a;
        b_text.textContent = currentQuiz.b;
        c_text.textContent = currentQuiz.c;
        d_text.textContent = currentQuiz.d;  
    });  
}

function deselectAnswers (){
    answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected(){
    let answer;
    answerEls.forEach(answerEl => {
        if (answerEl.checked ){
            answer = answerEl.id;
        }
    });
    return answer;
}

submit.addEventListener("click", () =>{
    const answer = getSelected();
    if (answer){
        if (answer === correctAns){
            score++;
        }

        if (indexes.length !== quiz_data.length){
            loadQuiz();
        }
        else {
            if (score == quiz_data.length){
                quiz.innerHTML = `<h2> &nbsp;&nbsp;&nbsp;Congratulations! <br>&nbsp;&nbsp; You answered all questions correct!</h2>
                <button onclick="location.reload()">Restart</button>`;
            }
            else {
                quiz.innerHTML = `<h2>&nbsp;&nbsp;&nbsp;You answered ${score}/${quiz_data.length} questions correct!</h2>
                <button onclick="location.reload()">Restart</button>`;
            }  
        }    
    }
});