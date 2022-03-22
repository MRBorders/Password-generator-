// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword(){
var  uppercase= "QWERTYUIOPASDFGHJKLZXCVBNM"
var lowercase="qwertyuiopasdfghjklzxcvbnm"
var specialChar="!@#$%@^&*"
var numericalValues= 1234567890

var uppercaseQuestion= window.confirm ("Do you wanter uppercase letters in your generated password?")
  if(uppercaseQuestion=== true){
  console.log(uppercase);

  }
  

  var lowercaseQuestion=window.confirm("Do you want lowercase characters in your generated password?") 
  if (lowercaseQuestion===true){
    console.log(lowercase);
  }
    
  
var specialCharQuestion= window.confirm ("Do you want special characters in your password?")
  if (specialCharQuestion===true){
    console.log(specialCharQuestion)
  }
  
var numericalValuesQuestion= window.confirm ("Do you want numbers in your genereated password?")
if (numericalValuesQuestion===true){
  console.log(numericalValues)
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);