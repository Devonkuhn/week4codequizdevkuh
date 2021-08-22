var quizBody = document.getElementById("quiz");
var resultsEl = document.getElementById("result");
var finalScoreEl = document.getElementById("finalScore");
var gameoverDiv = document.getElementById("gameover");
var questionsEl = document.getElementById("questions");
var quizTimer = document.getElementById("timer");
var startQuizButton = document.getElementById("startbtn");
var startQuizDiv = document.getElementById("startscrn");
var highscoreContainer = document.getElementById("highscoreContainer");
var highscoreDiv = document.getElementById("highscoreScreen");
var highscoreInputName = document.getElementById("playerName");
var highscoreDisplayName = document.getElementById("highscoreName");
var endGameBtns = document.getElementById("endGameBtns");
var submitScoreBtn = document.getElementById("submitScore");
var highscoreDisplayScore = document.getElementById("highscoreScore");
var buttonA = document.getElementById("a");
var buttonB = document.getElementById("b");
var buttonC = document.getElementById("c");
var buttonD = document.getElementById("d");



var quizQuestions = [{

    question:"Commonly used data types DO NOT include:",
    optionA:"numbers",
    optionB:"alerts",
    optionC:"strings",
    optionD:"classes",
    correctAwnser:"b"},
    {

    question:"The condition in an if / else statement is enclosed within _______.",
    optionA:"parentheses",
    optionB:"square brackets",
    optionC:"quotes",
    optionD:"curly brackets",
    correctAwnser:"a"},
    {

    question:"Arrays in Javascript can be used to store ______.",
    optionA:"booleans",
    optionB:"numbers and strings",
    optionC:"other arrays",
    optionD:"all of the above",
    correctAwnser:"d"},
    {

    question:"String values must be enclosed within ______ when being assigned to variables.",
    optionA:"parentheses",
    optionB:"commas",
    optionC:"quotes",
    optionD:"curly brackets",
    correctAwnser:"c"},
    {      
    
    question:"The _______ is a very useful tool. It's used during devlopment, debugging and for printing content to the debugger.",
    optionA:"console log",
    optionB:"terminal / bash",
    optionC:"CSS",
    optionD:"C++",
    correctAwnser:"a"},

];

var finalQuestionIndex = quizQuestions.length;
var currentQuestionIndex = 0;
var timeLeft = 60;
var timerInterval;
var score = 0;
var correct;

function generateQuizQuestion(){
    gameoverDiv.style.display = "none";
    if (currentQuestionIndex === finalQuestionIndex){
        return showScore();
    } 
    var currentQuestion = quizQuestions[currentQuestionIndex];
    questionsEl.innerHTML = "<p>" + currentQuestion.question + "</p>";
    buttonA.innerHTML = currentQuestion.optionA;
    buttonB.innerHTML = currentQuestion.optionB;
    buttonC.innerHTML = currentQuestion.optionC;
    buttonD.innerHTML = currentQuestion.optionD;
};

function startQuiz(){
    gameoverDiv.style.display = "none";
    startQuizDiv.style.display = "none";
    generateQuizQuestion();

    timerInterval = setInterval(function() {
        timeLeft--;
        quizTimer.textContent = "TIME LEFT: " + timeLeft;
    
        if(timeLeft === 0) {
          clearInterval(timerInterval);
          showScore();
        }
      }, 1000);
    quizBody.style.display = "block";
}
 
startQuizButton.addEventListener("click",startQuiz);

function showScore(){
    quizBody.style.display = "none"
    gameoverDiv.style.display = "flex";
    clearInterval(timerInterval);
    highscoreInputName.value = "";
    finalScoreEl.innerHTML = "You got " + score + " out of " + quizQuestions.length + " correct!";
}

submitScoreBtn.addEventListener("click", function highscore(){
    
    if(highscoreInputName.value === "") {
        alert("YOU MUST ENTER YOUR NAME");
        return false;
    }else{
        var savedHighscores = JSON.parse(localStorage.getItem("savedHighscores")) || [];
        var currentUser = highscoreInputName.value.trim();
        var currentHighscore = {
            name : currentUser,
            score : score
        };
        gameoverDiv.style.display = "none";
        highscoreContainer.style.display = "flex";
        highscoreDiv.style.display = "block";
        endGameBtns.style.display = "flex";
        
        savedHighscores.push(currentHighscore);
        localStorage.setItem("savedHighscores", JSON.stringify(savedHighscores));
        generateHighscores();
    }
});

function generateHighscores(){
    highscoreDisplayName.innerHTML = "";
    highscoreDisplayScore.innerHTML = "";
    var highscores = JSON.parse(localStorage.getItem("savedHighscores")) || [];
    for (i=0; i<highscores.length; i++){
        var newNameSpan = document.createElement("li");
        var newScoreSpan = document.createElement("li");
        newNameSpan.textContent = highscores[i].name;
        newScoreSpan.textContent = highscores[i].score;
        highscoreDisplayName.appendChild(newNameSpan);
        highscoreDisplayScore.appendChild(newScoreSpan);
    }
}

function showHighscore(){
    startQuizDiv.style.display = "none"
    gameoverDiv.style.display = "none";
    highscoreContainer.style.display = "flex";
    highscoreDiv.style.display = "block";
    endGameBtns.style.display = "flex";

    generateHighscores();
}

function clearScore(){
    window.localStorage.clear();
    highscoreDisplayName.textContent = "";
    highscoreDisplayScore.textContent = "";
}

function replayQuiz(){
    highscoreContainer.style.display = "none";
    gameoverDiv.style.display = "none";
    startQuizDiv.style.display = "flex";
    timeLeft = 76;
    score = 0;
    currentQuestionIndex = 0;
}

function checkAnswer(answer){
    correct = quizQuestions[currentQuestionIndex].correctAnswer;

    if (answer === correct && currentQuestionIndex !== finalQuestionIndex){
        score++;
        alert("That Is Correct!");
        currentQuestionIndex++;
        generateQuizQuestion();
    }else if (answer !== correct && currentQuestionIndex !== finalQuestionIndex){
        alert("That Is Incorrect.")
        currentQuestionIndex++;
        generateQuizQuestion();
    }else{
        showScore();
    }
}
