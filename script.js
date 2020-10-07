    // Gets Link for Theme Song
    var audioElement = document.createElement("audio");
    audioElement.setAttribute("src", "assets/Pokemon-Theme-Song.mp3");
    
    // Music Button
    $(".theme-button").on("click", function() {
        audioElement.play();
      });
      $(".pause-button").on("click", function() {
        audioElement.pause();
      });
  
    // When button is pressed, change to quiz questions
    $(".quizBtn").on("click", function() {

    });