// Assignment code here
let length =  window.prompt("How many characters will your password be? Enter a number between 8 and 128");

let lengthFun = function() {let length =  window.prompt("How many characters will your password be? Enter a number between 8 and 128"); 
return length};

if (isNaN(length)) {window.alert("Please, add a numeric value");
lengthFun()};

let charType = window.prompt("Enter a character type: special, numeric, uppercase, lowercase, mixed.")

let charTypeFun = function() {let charType = window.prompt("Enter a character type: special, numeric, uppercase, lowercase, mixed.");
return charType;};

if (!isNaN(charType)) {window.alert("Please, add letter value");
charTypeFun()};

function generatePassword() {
  //evaluate character type
  let charSet = "";
  if( charType === "lowercase" ) {
    charSet = "abcdefghijklmnopqrstuvwxyz";
  } else if( charType === "uppercase" ) {
    charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  } else if( charType === "numeric" ) {
    charSet = "0123456789";
  } else if( charType === "special" ) {
    charSet = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  } else if ( charType === "mixed") {
    charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  }
  //return value
  let password = "";
  for (var i = 0; i < length; i++) {
    //picks a character within charSet at index of random number
    password += charSet.charAt(Math.floor(Math.random() * charSet.length));
  }
  return password;
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
