// define timer and score count
var time = 0;
var count = 0;

// define timer/score card header
var countCard =
    "<div class='d-flex justify-content-center'><div class='card counters'> Time = 'time' + Score = 'count' </div>";

// Define vars for question arguments
var questionOne =
  "<div class='d-flex justify-content-center'><div class='card qst-header'><h3>Question 1:</h3> Commonly used data types DO NOT include: </div>";
var questionTwo =
  "<div class='d-flex justify-content-center'><div class='card qst-header'><h3>Question 2:</h3> The condition in an if/else statement is enclosed within: </div>";
var questionThree =
  "<div class='d-flex justify-content-center'><div class='card qst-header'><h3>Question 3:</h3> Arrays in JavaScript can be used to store: </div>";
var questionFour =
  "<div class='d-flex justify-content-center'><div class='card qst-header'><h3>Question 4:</h3> String values must be enclosed within ___ when being assigned to variables: </div>";
var questionFive =
  "<div class='d-flex justify-content-center'><div class='card qst-header'><h3>Question 5:</h3> String values must be enclosed within ___ when being assigned to variables  </div>";

// define vars for multiple choice questions
var qstOneInput = [
  "<button type='button' class='btn-secondary btn-lg btn-block incorrect'>Strings</button>",
  "<button type='button' class='btn-secondary btn-lg btn-block incorrect'>Booleans</button>",
  "<button type='button' class='btn-secondary btn-lg btn-block correct'>Alerts</button>",
  "<button type='button' class='btn-secondary btn-lg btn-block incorrect'>Numbers</button>",
];

// define a variable for a blank unordered list to append question choices into
var list = $("#qst-Input");

// define a variable for the list parent
var parent = list.parent();

// Gets Link for Theme Song
var audioElement = document.createElement("audio");
audioElement.setAttribute("src", "assets/Pokemon-Theme-Song.mp3");

// Music Button
$(".theme-button").on("click", function () {
  audioElement.play();
});
$(".pause-button").on("click", function () {
  audioElement.pause();
});

// When button is pressed, change to quiz questions, add timer and score card
$(".quizBtn").on("click", function () {
  $(this).remove();

  // append questionOne header variable
  $(".container").prepend(questionOne);

  // prepend timer & scorecard  
  $(".container").prepend(countCard);

  // create function to append qstOneInput into the qst-Input unordered list DOM...
  // detach the list from the DOM so it doesn't refresh the DOM for every list item added and empty the list to remove existing values
  list
    .detach()
    .empty()
    .each(function (i) {
      // define a loop
      for (var i = 0; i < qstOneInput.length; i++) {
        // append DOM with each item in the array
        $(this).append(qstOneInput[i]);
        if (i == qstOneInput.length - 1) {
          // at end of loop append the full array back into DOM
          $(this).appendTo(parent);
        }
      }

    });

});
