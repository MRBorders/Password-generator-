// Assignment Code
var generateBtn = document.querySelector("#generate");

//created arrays for possible password combos
var uppercase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var lowercase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var specialChar = ["!", "@", "#", "$", "^", "&", "?"];
var numericalValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var allCharacters = "";

function generatePassword() {
  var passwordLength = prompt(
    "please choose a password length between 8 and 128 charcters"
  );
  if (passwordLength < 8 || passwordLength > 128) {
    alert("password was not between 8 and 128 characters");
    return;
  }

  var outputs = [];
  var inputs = generateQuestion();

  if (inputs.uppercaseQuestion) {
    // for (i = 0; i < uppercase.length; i++) {
    //   outputs.push(uppercase[i]);
    //   console.log(outputs[i]);
    // }
   outputs= outputs.concat(uppercase)
  }
  if (inputs.lowercaseQuestion) {
   outputs= outputs.concat(lowercase)
  }
  if (inputs.numericalValuesQuestion) {
    outputs=outputs.concat(numericalValues)
  }

  if (inputs.specialCharQuestion) {
    outputs=outputs.concat(specialChar)
  }
  var finalPassword = "";
  for (i = 0; i < passwordLength; i++) {
    var randIndex = Math.floor(
      Math.random() * outputs.length
    );
    finalPassword+= outputs[randIndex];
    
  }

  console.log(finalPassword);

  return finalPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generateQuestion() {
  var uppercaseQuestion = confirm(
    "Would you like uppercase letters in your password?"
  );
  var lowercaseQuestion = confirm(
    "would you like lowercase characters in your password?"
  );
  var numericalValuesQuestion = confirm(
    "would you like numbers in your password?"
  );
  var specialCharQuestion = confirm(
    "would you  like special characters in your password"
  );

  var data = {
    uppercaseQuestion: uppercaseQuestion,
    lowercaseQuestion: lowercaseQuestion,
    numericalValuesQuestion: numericalValuesQuestion,
    specialCharQuestion: specialCharQuestion,
  };

  console.log(data);
  return data;
}
