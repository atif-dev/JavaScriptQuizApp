const quizDB = [
    {
        question: "Q1: Full form of HTML is?",
        a: "Hello To My land",
        b: "Hi Text Markup Language",
        c: "HyperText Markup Language",
        d: "Hypertext Markup Language",
        ans: "ans4"
    },

    {
        question: "Q2: What is full form of CSS",
        a: "Cascading Style Sheets",
        b: "Cascading Style Sheep",
        c: "Cascasing Super Sheet",
        d: "Cartoon Style Sheet",
        ans: "ans1"
    },

    {
        question: "Q3: What is full form of HTTP?",
        a: "Hello Time Taken Protocol",
        b: "Hyper Text Test Protocol",
        c: "Hey Transfer Time Protocol",
        d: "Hypertext Transfer Protocol",
        ans: "ans4"
    },

    {
        question: "Q4: What is full form of JS?",
        a: "JavaScript",
        b: "JsonScript",
        c: "JhonSmith",
        d: "JuliaScript",
        ans: "ans1"
    }
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');

const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;

const loadQuestion = () => {

    const questionList = quizDB[questionCount];
    // console.log(questionList);

    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
    

} 

loadQuestion();

const getCheckedAnswer = () => {
    let answer;

    answers.forEach((curAnsElemnt) =>{
        if(curAnsElemnt.checked){
            answer = curAnsElemnt.id;
        }
        
    });
    return answer;
};

const deSelectAll = () => {
    answers.forEach((curAnsElemnt) => curAnsElemnt.checked = false);
}

const playSound = () => {
    var audio = document.getElementById("audio");
    audio.play();
  }

submit.addEventListener('click' , () => {

    playSound();//play sound on submit button
    const checkedAnswer = getCheckedAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer == quizDB[questionCount].ans){
        score++;
    }
    questionCount++;

    deSelectAll();

    if(questionCount < quizDB.length){
        loadQuestion();
    }else{

        showScore.innerHTML = `
            <h3> You scored ${score}/${quizDB.length} ✌ </h3>
            <button class = "btn" onclick = "location.reload()">Play Again</button> 
        `;
        showScore.classList.remove('scoreArea');
        // document.getElementById("submit").style.display = "none";
        // document.querySelector("h2").style.display = "none";
        // document.querySelector("ul").style.display = "none";

        // document.querySelector(".inner-div").style.backgroundColor = "#E4F1FE";
        document.querySelector(".inner-div").style.display = "none";  

    }
});





