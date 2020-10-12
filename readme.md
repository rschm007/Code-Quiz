# Code-Quiz

This webapp was designed as part of the UCI Web Development Bootcamp.

This app uses Javascript to generate a coding quiz. The quiz is dynamically generated via the DOM.

The project has been deployed to GitHub pages. To use the app you can follow the deployment link or download the source files for you to use as a template.


Prerequisites
-----------------------------

To install this application you will need a text editor like Visual Studio Code.


Summary
-----------------------------

The user is presented with a page containing a header card and several buttons. Pushing the "Get Pumped Up!" button will result in the Pokemon Theme Song playing. Pushing the "Pause Song" button will result in the song pausing.
<img src="https://github.com/rschm007/Code-Quiz/blob/main/Assets/demo-1.png" alt="Random-Password-Generator Demo Image" style="max-width:100%;">

Upon clicking the "Start Quiz" button the user is given a question within a header and a series of multiple choice buttons. There is also a timer which counts down from 60 seconds, and a score field.

<img src="https://github.com/rschm007/Code-Quiz/blob/main/Assets/demo-2.png" alt="Random-Password-Generator Demo Image with prompt for password length" style="max-width:100%;">

Upon clicking the correct answer the page then loads the next question into the DOM. The user's score is updated by +1 to reflect that they got the right answer.
<img src="https://github.com/rschm007/Code-Quiz/blob/main/Assets/demo-3.png" alt="Random-Password-Generator Demo Image with prompt for upper case letters" style="max-width:100%;">

At the end of the quiz the user is given the choice to input their initials. These initials are saved in localstorage in a key value pair with their scorecount.
<img src="https://github.com/rschm007/Code-Quiz/blob/main/Assets/demo-6.png" alt="Random-Password-Generator Demo Image with prompt for lower case letters" style="max-width:100%;">

Elements still in progress
-----------------------------
1) On the last page, the initials are currently not saved in localstorage along with the score in a key:value pair. This needs to be solved.
2) The formatting of the page layout on the form page is sloppy and needs to be fixed.
3) Once the timer runs out the user is not given th high score prompt page. This needs to be fixed.

