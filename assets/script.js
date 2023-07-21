// Assignment Code


var generateBtn = document.querySelector("#generate");

//Variables for password criteria defined
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; 
var specialCharacters = ["!","@","#","$","%","^","&","*","<",">","?"];
var lowercaseLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q",
"r","s","t","u","v","w","x","y","z"];
var uppercaseLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q",
"R","S","T","U","V","W","X","Y","Z"];

//Variable for all user choices
var allChoices ="";

/*Function to request and confirm password criteria and generate it.  User will be asked a series of questions. 
  First example if the chosen password length is not between 8 and 128, then user gets an alert with 
  "you must enter a number between 8 and 128". If user selects "ok", prompt new window requesting a number again.*/
function generatePassword() {
  let lengthChoice = window.prompt("Please enter a number between 8 and 128 for your password length.");

    if (lengthChoice < 8 || lengthChoice > 128) {
      alert("You must enter a number between 8 and 128.");
      window.prompt("Please enter a number between 8 and 128.");
    }

    else {
    /*if user doesn't confirm by clicking "ok" and clicks "cancel" instead, alert user that a number must be included
    and if they click ok, then display new prompt for them to confirm. If confirmed, then a number from the array
    will be added to "allChoices"*/
    let numbersChoice = confirm("For security, your password will include numbers, ok? Please confirm.");
    if (!numbersChoice) {
      alert("a number MUST be included, please confirm.");
      window.prompt("A number will be included in your password, ok?");
    }
    else if (numbersChoice) {
      allChoices += numbers;
    }


    let lowercaseChoice = confirm("Your password will include lowercase letters, ok? Please confirm.");
    if (!lowercaseChoice) {
      alert("Lowercase letters MUST be included, please confirm.");
      window.prompt("Lowercase letters will be included in your password, ok?");
    }
    else if (lowercaseChoice) {
     allChoices += lowercaseLetters;
    }


    let uppercaseChoice = confirm("Your password will also include uppercase letters, ok? Please confirm.");
    if (!uppercaseChoice) {
      alert("Uppercase letters MUST be included, please confirm.");
      window.prompt("Uppercase letters will be included in your password, ok?");
    }
    else if (uppercaseChoice) {
      allChoices += uppercaseLetters;
    } 
      

    let specialChoice = confirm("For even more security, your password will include special characters, ok? Please confirm.");
    if (!specialChoice) {
      alert("Special characters MUST be included, please confirm.");
      window.prompt("Special characters will be included in your password, ok?");
    }
    else if (specialChoice) {
      allChoices += specialCharacters;
    }
  }
    //generate new password by choosing the characters for the index randomly from the allChoices array to be the length
    //the length the user defined. 
    let newPassword = "";
    for (var i = 0; i < lengthChoice; i++) {
    newPassword += allChoices.charAt(Math.floor(Math.random() * allChoices.length)); 
    }
  return newPassword;
} 

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


generateBtn.addEventListener("click", writePassword);