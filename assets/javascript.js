// Assignment Code
var generateBtn = document.querySelector("#generate");

//created arrays for possible password combos
var  uppercase= ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowercase=['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var specialChar= ["!", "@","#", '$','^', '&', "?"];
var numericalValues=  ["0", "1", "2", '3', '4','5','6', '7', '8','9'];
var allCharacters= "";

function generatorQuestions() {
  
  var passwordLength= window.prompt("please choose a password length between 8 and 128 charcters");
  if((passwordLength < 8) || (passwordLength > 128)){
    alert('password must be between 8 and 128 characters!!');
  return
}
  var uppercaseQuestion= window.confirm("Would you like uppercase letters in your password?");
  var lowercaseQuestion=window.confirm("would you like lowercase characters in your password?");
  var numericalValuesQuestion=window.confirm("would you like numbers in your password?");
  var specialCharQuestion=window.confirm("would you  like special characters in your password");
  if (!uppercaseQuestion && !lowercaseQuestion && !numericalValuesQuestion && !specialCharQuestion){
      alert("confirm a selection to proceed");
  }
  var data = {
    passwordLength: passwordLength,
    uppercaseQuestion: uppercaseQuestion,
    lowercaseQuestion: lowercaseQuestion,
    numericalValuesQuestion: numericalValuesQuestion,
    specialCharQuestion: specialCharQuestion,
  }
  return data;
 }
 console.log (generatorQuestions)

function generatePassword(){

  var inputs= generatorQuestions();
  var outputs= [];
  

  if(inputs.uppercaseQuestion){
    for(i=0; i< uppercase.passwordLength; i++){
      outputs.push(uppercase[i]);
    }
  }
  if(inputs.lowercaseQuestion){
    for (i = 0; i < lowercase.passwordLength; i++){
      outputs.push(lowercase[i]);
    }
  }
      if(inputs.numericalValuesQuestion){
        for( i=0; i <numericalValues.passwordLength; i++) {
          outputs.push(numericalValues[i]);
        }
      }

      if (inputs.specialCharQuestion){
        for (i=0; i < specialChar.passwordLength;i++){
        outputs.push(specialChar[i]);
      }
    }
    var finalPassword= [];
    for(i=0 ; i< outputs.passwordLength; i++){
      var equation = Math.floor(math.random() * math.floor(outputs.passwordLength));
      finalPassword.push(output[equation])
    }

   console.log (finalPassword);

    
  }


    
    
      

        



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);