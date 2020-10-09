// define score count
var scoreCount = 0;

// define a function for adding +1 to score:
function plusOne() {
  scoreCount++;
  $("#score").text(scoreCount);
}

// define timer count and function;
var timeCount = 60;
var interval;
function timer(time, update, complete) {
  var start = new Date().getTime();
  var interval = setInterval(function () {
    var now = time - (new Date().getTime() - start);
    if (now <= 0) {
      clearInterval(interval);
      complete();
    } else update(Math.floor(now / 1000));
  }, 100);
}

// define a function to stop the timer
function stopTimer() {
  clearInterval(interval);
  return interval;
}

// define timer/score card header
var countCard = "<div class='d-flex justify-content-center counters'></div>";

// Define vars for question cards and prompts
var questionOne =
  "<div class='d-flex justify-content-center questionOne'><div class='card qst-header'><h3>Question 1:</h3> Commonly used data types DO NOT include: </div>";
var questionTwo =
  "<div class='d-flex justify-content-center questionTwo'><div class='card qst-header'><h3>Question 2:</h3> The condition in an if/else statement is enclosed within: </div>";
var questionThree =
  "<div class='d-flex justify-content-center questionThree'><div class='card qst-header'><h3>Question 3:</h3> Arrays in JavaScript can be used to store: </div>";
var questionFour =
  "<div class='d-flex justify-content-center questionFour'><div class='card qst-header'><h3>Question 4:</h3> String values must be enclosed within ___ when being assigned to variables: </div>";
var questionFive =
  "<div class='d-flex justify-content-center questionFive'><div class='card qst-header'><h3>Question 5:</h3> String values must be enclosed within ___ when being assigned to variables  </div>";

// define var for high score prompt card
var highScorePrompt =
  "<div class='d-flex justify-content-center highScore'><div class='card qst-header'><h3>All done!</h3></div>";

// define var for div to insert form into
var scoreDiv =
  "<div class='d-flex justify-content-center scoreForm'></div>"

// define arrays for multiple choice questions
var qstOneInput = [
  "<button type='button' class='btn-secondary btn-lg btn-block falseInp'>Strings</button>",
  "<button type='button' class='btn-secondary btn-lg btn-block falseInp'>Booleans</button>",
  "<button type='button' class='btn-secondary btn-lg btn-block trueInp'>Alerts</button>",
  "<button type='button' class='btn-secondary btn-lg btn-block falseInp'>Numbers</button>",
];

var qstTwoInput = [
  "<button type='button' class='btn-secondary btn-lg btn-block falseInp'>Quotes</button>",
  "<button type='button' class='btn-secondary btn-lg btn-block falseInp'>Curly Brackets</button>",
  "<button type='button' class='btn-secondary btn-lg btn-block trueInp'>Parentheses</button>",
  "<button type='button' class='btn-secondary btn-lg btn-block falseInp'>Square Brackets</button>",
];

var qstThreeInput = [
  "<button type='button' class='btn-secondary btn-lg btn-block falseInp'>Numbers and Strings</button>",
  "<button type='button' class='btn-secondary btn-lg btn-block falseInp'>Other Arrays</button>",
  "<button type='button' class='btn-secondary btn-lg btn-block falseInp'>Booleans</button>",
  "<button type='button' class='btn-secondary btn-lg btn-block trueInp'>All of the Above</button>",
];

var qstFourInput = [
  "<button type='button' class='btn-secondary btn-lg btn-block falseInp'>Commas</button>",
  "<button type='button' class='btn-secondary btn-lg btn-block falseInp'>Curly Brackets</button>",
  "<button type='button' class='btn-secondary btn-lg btn-block trueInp'>Quotes</button>",
  "<button type='button' class='btn-secondary btn-lg btn-block falseInp'>Parentheses</button>",
];

// define a variable for a blank unordered list to append question choices into
var list = $("#qst-Input");

// define a variable for the list parent
var parent = list.parent();

// define a variable for score count p display
var finalScoreDisp = "<div class='d-flex align-items-center finalScoreDisplay'><p>Your final score is " + scoreCount + ".</p></div>";
// define a variable for a form to gather user input at end of quiz
var userIntInp =
  "<form method='POST'><textarea id='user-initials' rows='1' cols='30'></textarea><input type='submit' value='Submit'></form>"

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

// 
// 
// begin quiz DOM functions...
// When button is pressed, change to quiz questions, add timer and score card
$(".quizBtn").on("click", function () {
  $(this).remove();

  // prepend questionOne header variable
  $(".container").prepend(questionOne);

  // prepend timer & scorecard
  $(".container").prepend(countCard);

  // update timer countdown from 60 secs
  timer(
    60000, // milliseconds
    function (timeleft) {
      // called every step to update the visible countdown
      $("#timer").html("<strong>Time Left: </strong> " + timeleft + " second(s)")
    }
  );

  // insert scorecards
  $("#counters").append("<p id='timer'></p>");
  $("#counters").append(" <strong>Score: </strong>" + "<p id='score'></p>");

  // create function to append qstOneInput into the DOM...
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

  // if incorrect option was clicked, change button background color to red
  $(".falseInp").on("click", function () {
    $(this).addClass("redBtn");
  });

  // If correct choice was clicked, proceed to next section, remove previous multiple choice buttons and header card
  $(".trueInp").on("click", function () {
    $(this).remove();
    plusOne();

    // replace questioneOne header DIV with questionTwo header DIV
    $(".questionOne").replaceWith(questionTwo);

    // create function to append qstTwoInput into the DOM...
    // detach the list from the DOM so it doesn't refresh the DOM for every list item added and empty the list to remove existing values
    list
      .detach()
      .empty()
      .each(function (i) {
        // define a loop
        for (var i = 0; i < qstTwoInput.length; i++) {
          // append DOM with each item in the array
          $(this).append(qstTwoInput[i]);
          if (i == qstTwoInput.length - 1) {
            // at end of loop append the full array back into DOM
            $(this).appendTo(parent);
          }
        }
      });

    // if incorrect option was clicked, change button background color to red
    $(".falseInp").on("click", function () {
      $(this).addClass("redBtn");
    });

    // If correct choice was clicked, proceed to next section, remove previous multiple choice buttons and header card
    $(".trueInp").on("click", function () {
      $(this).remove();
      plusOne();

      // replace questioneTwo header DIV with questionThree header DIV
      $(".questionTwo").replaceWith(questionThree);

      // create function to append qstTwoInput into the DOM...
      // detach the list from the DOM so it doesn't refresh the DOM for every list item added and empty the list to remove existing values
      list
        .detach()
        .empty()
        .each(function (i) {
          // define a loop
          for (var i = 0; i < qstThreeInput.length; i++) {
            // append DOM with each item in the array
            $(this).append(qstThreeInput[i]);
            if (i == qstThreeInput.length - 1) {
              // at end of loop append the full array back into DOM
              $(this).appendTo(parent);
            }
          }
        });

      // if incorrect option was clicked, change button background color to red
      $(".falseInp").on("click", function () {
        $(this).addClass("redBtn");
      });

      // If correct choice was clicked, proceed to next section, remove previous multiple choice buttons and header card
      $(".trueInp").on("click", function () {
        $(this).remove();
        plusOne();

        // replace questioneThree header DIV with questionFour header DIV
        $(".questionThree").replaceWith(questionFour);

        // create function to append qstTwoInput into the DOM...
        // detach the list from the DOM so it doesn't refresh the DOM for every list item added and empty the list to remove existing values
        list
          .detach()
          .empty()
          .each(function (i) {
            // define a loop
            for (var i = 0; i < qstFourInput.length; i++) {
              // append DOM with each item in the array
              $(this).append(qstFourInput[i]);
              if (i == qstThreeInput.length - 1) {
                // at end of loop append the full array back into DOM
                $(this).appendTo(parent);
              }
            }
          });

        // if incorrect option was clicked, change button background color to red
        $(".falseInp").on("click", function () {
          $(this).addClass("redBtn");
        });

        // If correct choice was clicked, proceed to final highscore section
        $(".trueInp").on("click", function () {
          $("#qst-Input").remove();
          plusOne();

          // remove scorecard and stop timer
          $("#counters").remove();
          stopTimer();

          // replace questioneFour header DIV with highScorePrompt header DIV
          $(".questionFour").replaceWith(highScorePrompt);

          // Show the user their final score and insert a form for user initials
          $(".highScore").append(finalScoreDisp).append("<strong>Please type your initials</strong>").append(userIntInp);

        });
        // store user high score input in local storage
      });
    });
  });
});
