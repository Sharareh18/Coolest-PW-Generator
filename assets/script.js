// Assignment Code


var generateBtn = document.querySelector("#generate");

//Variables for password criteria defined
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; 
var specialCharacters = ["!","@","#","$","%","^","&","*","<",">","?"];
var lowercaseLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q",
"r","s","t","u","v","w","x","y","z"];
var uppercaseLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q",
"R","S","T","U","V","W","X","Y","Z"];
var allChoices ="";

/*Function to request and confirm password criteria and generate it.*/
function generatePassword() {
  let lengthChoice = window.prompt("Please enter a number between 8 and 128 for your password length.");

    if (lengthChoice < 8 || lengthChoice > 128) {
      alert("You must enter a number between 8 and 128.")
      window.prompt("Please enter a number between 8 and 128.")
  } else {
    /*If confirmed, then a number from the array will be added to "allChoices"*/
    let numbersChoice = confirm("Would you like your password to include numbers?");
    if (numbersChoice) {
      allChoices += numbers;
  }

    let lowercaseChoice = confirm("How about lowercase letters?");
    if (lowercaseChoice) {
     allChoices += lowercaseLetters;
  }

    let uppercaseChoice = confirm("And uppercase letters?");
    if (uppercaseChoice) {
      allChoices += uppercaseLetters;
  } 
      
  let specialChoice = confirm("Would you also like your password to include special characters?");
    if (specialChoice) {
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
//attaching an eventListener to generateBtn so that writePassword is the code run when the user "clicks"
generateBtn.addEventListener("click", writePassword);