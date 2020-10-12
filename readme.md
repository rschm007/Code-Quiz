# Code-Quiz

This webapp was designed as part of the UCI Web Development Bootcamp.

This app uses Javascript to generate a coding quiz. The quiz is dynamically generated via the DOM.

The project has been deployed to GitHub pages. To use the app you can follow the deployment link or download the source files for you to use as a template.


Prerequisites
-----------------------------

To install this application you will need a text editor like Visual Studio Code.


Summary
-----------------------------

The user is presented with a page containing an empty textfield and a button stating "Generate Password." 
<img src="https://raw.githubusercontent.com/rschm007/Random-Password-Generator/main/Assets/RPG-1.png" alt="Random-Password-Generator Demo Image" style="max-width:100%;">

Upon clicking the button the user is given a series of prompts that help to define the following:

1) How long should your password be?
<img src="https://raw.githubusercontent.com/rschm007/Random-Password-Generator/main/Assets/RPG-2.png" alt="Random-Password-Generator Demo Image with prompt for password length" style="max-width:100%;">

2) Do you want upper case characters included?
<img src="https://raw.githubusercontent.com/rschm007/Random-Password-Generator/main/Assets/RPG-3.png" alt="Random-Password-Generator Demo Image with prompt for upper case letters" style="max-width:100%;">

2) Do you want lower case characters included?
<img src="https://raw.githubusercontent.com/rschm007/Random-Password-Generator/main/Assets/RPG-4.png" alt="Random-Password-Generator Demo Image with prompt for lower case letters" style="max-width:100%;">

2) Do you want special characters included?
<img src="https://raw.githubusercontent.com/rschm007/Random-Password-Generator/main/Assets/RPG-5.png" alt="Random-Password-Generator Demo Image with prompt for special characters" style="max-width:100%;">
2) Do you want numbers included?
<img src="https://raw.githubusercontent.com/rschm007/Random-Password-Generator/main/Assets/RPG-2.png" alt="Random-Password-Generator Demo Image with prompt for numbers" style="max-width:100%;">

If the user enters the wrong range of numbers for the password then they are alerted and returned to the beginning of the prompts. If they don't choose any categories to include then they are alerted and prompted to begin again.

Once the user selects their desired categories, the app randomly generates a password to their specifications and displays the result within the text field. This result is copy + pastable.# Random-Password-Generator
<img src="https://raw.githubusercontent.com/rschm007/Random-Password-Generator/main/Assets/RPG-7.png" alt="Random-Password-Generator Demo Image with password string in text field" style="max-width:100%;">

