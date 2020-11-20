// starting from scratch...

// define global vars we will use throughout
// var to track score
var score = 0;

// define count + timer
var seconds = $(".countdown").text();
var countdown = setInterval(function() {
  seconds--;
  $(".countdown").text(countdown);
  if (seconds <= 0) clearInterval(countdown);
}, 1000);

// define objects to store question values
// define an index
var question = [
  {
    header: "Commonly used data types DO NOT include:",
    answers: ["Strings", "Booleans", "Alerts", "Numbers"],
    correct: "Alerts",
  },
  {
    header: "The condition in an if/else statement is enclosed within:",
    answers: ["Quotes", "Curly Brackets", "Parentheses", "Square Brackets"],
    correct: "Curly Brackets",
  },
  {
    header: "Arrays in JavaScript can be used to store:",
    answers: [
      "Numbers and Strings",
      "Other Arrays",
      "Booleans",
      "All of the Above",
    ],
    correct: "All of the Above",
  },
  {
    header:
      "String values must be enclosed within ___ when being assigned to variables:",
    answers: ["Commas", "Curly Brackets", "Quotes", "Parentheses"],
    correct: "Quotes",
  },
];

var questionIndex = 0;

// start working JS
// define vars for DOM elements
var counterDiv = $(".renders").append("<div class='renderC'>");
var headerDiv = $(".renders").append("<div class='renderH'>");
var questionDiv = $(".renders").append("<div class='renderQ'>");

// define vars that create content within DOM divs
// this renders the counter card within the renderC divqaW
function renderCounters() {
  var renderCounters = $(".renderC").html("<div class='renderC'");
  renderCounters.append("Time: <span class='countdown'>" + 60 + "</span>"+ " Score: " + score);
}

// this renders the header according to the question object index within the renderH div
function renderHeader() {
  var renderHeader = $(".renderH").html("<h2 class='renderHeader'>");
  renderHeader.text(question[questionIndex].header);
}

// this renders the question choices as buttons according to the question index within the renderQ div
function renderQuestions() {
  // create a for loop to render all question choices as buttons with appropriate text
  for (var i = 0; i < question.length; i++) {
    var userAnswers = question[questionIndex].answers[i];
    $(".renderQ").append(
      "<button class='btn-info btn-lg question'>" + userAnswers + "</button>"
    );
  }
}

// create a function to clear the DOM and insert new header and new choices
function renderQuiz(questionIndex) {
  // first, clear the divs of all content within them
  $("#renders").removeClass("d-none");
  $(".renderHeader").remove();
  $(".renderQ").empty();
  // update counter values
  renderCounters();
  // call renderHeader function to insert new header
  renderHeader();
  // call renderQuestions function to insert new question choices
  renderQuestions();
}

// create a function to begin the quiz on Start Quiz button click
$(".quizBtn").on("click", function (event) {
  event.preventDefault();
  // clear the render div
  $(".quizBtn").remove();
  // insert timer and score counters
  $(".renders").append(renderCounters);
  console.log("The start quiz button was clicked");
  renderQuiz();

  // define an event function to compare user choices with the correct answer
  $(".question").on("click", function (event) {
    event.preventDefault();

    var buttonText = $(this).text();
    // if user answers correctly add to score and questionIndex, say the answer was correct and move on to next question
    if (buttonText == question[questionIndex].correct) {
      score++;
      questionIndex++;
      $(".renders").append("<span class='choiceCorrect'>Correct!</div>");
      // have the function delay for 2 seconds before moving on
      setTimeout(function () {
        $(".choiceCorrect").remove();
        renderQuiz(questionIndex);
      }, 2000);
    } else {
      questionIndex++;
      $(".renders").append("<span class='choiceIncorrect'>Wrong!</div>");
      setTimeout(function () {
        $(".choiceIncorrect").remove();
        renderQuiz(questionIndex);
      }, 2000);
    }
  });
});
