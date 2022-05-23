// Assignment code here
// Global Variables
var randomPassword = [];


// Define Character types lowercase, uppercase, numberic, and/or special characters
var uppercase = ['A','B','C','D','E','F','G','H', 'I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']; 
var lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var numbers = ['0','1','2','3','4','5','6','7','8','9'];
var characters = ['!','@','#','$','%','^','&'];

// Click button
function generatePassword() {

    var selectedCriteria = [];

    // Define length of password between 8 and 128 characters
    var characterLength = window.prompt('Choose a password length between 8 and 128 characters');
        console.log(characterLength);

    // Validate prompt answer
    if (characterLength > 7 && characterLength < 129) {
    } else {
        return 'Please choose a password length between 8 and 128 characters'
    }

    // Define uppercase selector 
    var uppercaseSelector = confirm('Do you want your password to include uppercase characters?');

    if (uppercaseSelector) {
        selectedCriteria = selectedCriteria.concat(uppercase);
        console.log(selectedCriteria);
    }

    // Define lowercase selector
    var lowercaseSelector = confirm('Do you want your password to include lowercase characters?');

    if (lowercaseSelector) {
        selectedCriteria = selectedCriteria.concat(lowercase);
        console.log(selectedCriteria);
    }

    // Define number selector 
    var numberSelector = confirm('Do you want your password to include numbers?');

    if (numberSelector) {
        selectedCriteria = selectedCriteria.concat(numbers);
        console.log(selectedCriteria);
    }

    // Define character selector
    var characterSelector = confirm('Do you want your password to include special characters?');

    if (characterSelector) {
        selectedCriteria = selectedCriteria.concat(characters);
        console.log(selectedCriteria);
    }

   // Validate input
   if (uppercaseSelector === false && lowercaseSelector === false && numberSelector === false && characterSelector === false) {
       return 'Input is required';
   }
   
   // Generate random password 
  
    for (let i = 0; i <= characterLength; i++) {
        randomCriteria = (selectedCriteria[Math.floor(Math.random() * selectedCriteria.length)]);
        randomPassword.push(randomCriteria);
    }

    return randomPassword.join('');
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
