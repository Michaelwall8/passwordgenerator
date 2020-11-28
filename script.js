// Array of special characters to be included in password
var symbols = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCases = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCases = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Main App-----------------------------
function generatePassword(){
  let passSize = parseInt(prompt("number of characters"));

  if (passSize > 7 && passSize < 129) {
    let lowerCase = confirm("Lowercase?");
    let upperCase = confirm("Uppercase?");
    let number = confirm("Number?");
    let symbol = confirm("Symbol?");

    let passOption = 0;

    // passOpt
    if (lowerCase === true) {
      passOption = passOption + 1
    }
    if (upperCase === true) {
      passOption = passOption + 1
    }
    if (number === true) {
      passOption = passOption + 1
      
    }
    if (symbol === true) {
      passOption = passOption + 1
    }

    // passGen
    let passArray = [];

    if (lowerCase === true) {
      for (let i = 0; i < Math.ceil(passSize / passOption) ; i++) {
        passArray.push(lowerCases[i])       
        
      }
    }
    if (upperCase === true) {
      for (let i = 0; i < Math.ceil(passSize / passOption) ; i++) {
        passArray.push(upperCases[i])
      }
    }
    if (number === true) {
      for (let i = 0; i < Math.ceil(passSize / passOption) ; i++) {
        passArray.push(numbers[i])
      }
      
    }
    if (symbol === true) {
      for (let i = 0; i < Math.ceil(passSize / passOption) ; i++) {
        passArray.push(symbols[i])
        
        
      }
    }
    
    // delete extra characters
    let extraCharacters = passArray.length - passSize;
  
    for (i = 0; i < extraCharacters; i++){

      passArray.pop()
    }

    // shuffle passArray
    passArray.sort(function(a, b){return 0.5 - Math.random()});
  

    // sending the password and transforming array to a string
    return  passArray.join("");
    
  }
  else {
    alert("restart and make sure you put the right amount of characters to proceed")
  }


}






// ends App-------------------------------------

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
