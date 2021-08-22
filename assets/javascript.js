var startQuizDiv = document.getElementById("startscrn");
var startQuizButton = document.getElementById("startbtn");
var quizBody = document.getElementById("quiz");
var quizTimer = document.getElementById("timer");
var questionsEl = document.getElementById("questions");
var buttonA = document.getElementById("a");
var buttonB = document.getElementById("b");
var buttonC = document.getElementById("c");
var buttonD = document.getElementById("d");
var resultsEl = document.getElementById("result");
var gameoverDiv = document.getElementById("gameover");
var finalScoreEl = document.getElementById("finalScore");
var highscoreInputName = document.getElementById("playerName");
var submitScoreBtn = document.getElementById("submitScore");
var highscoreContainer = document.getElementById("highscoreContainer");
var highscoreDiv = document.getElementById("highscoreScreen");
var highscoreDisplayName = document.getElementById("highscoreName");
var highscoreDisplayScore = document.getElementById("highscoreScore");
var endGameBtns = document.getElementById("endGameBtns");


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