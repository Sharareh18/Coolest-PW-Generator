// Assignment Code

/*the #generate is the id for the actual button*/
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

/*the #password is what shows up in the text box as the pw*/
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

/*THIS IS THE LINE THAT WILL DISPLAY THE PW */
  passwordText.value = password;

}

/* DO I DECLARE VARS ON THE TOP?  SINCE THERE'S NO MATH, SHOULD MY NUMBERS BE STRINGS? 
DO I PUT ALL OF THE NUMBERS OR IS 0 TO 9 ENOUGH? WILL IT DO THE MATH IF IT'S STRING?*/

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; 
var specialCharacters = ["!","@","#","$","%","^","&","*","<",">","?"];
var lowecaseLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q",
"r","s","t","u","v","w","x","y","z"];
var uppercaseLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q",
"R","S","T","U","V","W","X","Y","Z"];
var characters = 8;
var userChoice = ["yes"]; 
/* IS THE USERCHOICE VAR EVEN NEEDED? THIS IS GETTING CONFUSING...COULD THE PROMPTS RETURN A SELECTION FOR THIS?
*/

function generatePassword() {
  console.log("test");

  /*a- when user clicks generate, 
  I have to promp with "please select a number 
  between 8-128 for your password length" 

  b- when user types number between 8-128
  then I prompt with "would you like to include lowercase, 
  uppercase, numeric, and/or special characters?"  OR DO I HAVE TO GIVE THEM A CHOICE?

  c- if yes, then I have to write a script for special char. to be included
     if no, then the opposite ? ask about this...do I give them yes and no?


  d- generate the password to show up in the text box  (figure out 
    what to do with the addevent thing)*/

}

/*WOULD I USE "CLICK" IN PLACE OF THE QUESTION MARKS? WHAT WILL PROMPT THE MESSAGE? THE GENERATE PW BUTTON BUT 
THAT WOULDN'T WORK HERE WOULD IT?*/
function prompts() {
  ??? = window.prompt("Please enter a number between 8 and 128 for your password length.");

if (characters !== (characters < 8 && characters > 128)) 
    window.alert("You must enter a number between 8 and 128.");

else if (characters === (characters < 8 + characters > 128)) 
  window.alert("Would you like to include an uppercase, lowercase, number or special character?");

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);