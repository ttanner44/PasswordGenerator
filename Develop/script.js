// Defiine DOM elements
var passwordText = document.querySelector("#password");
var generateBtn = document.querySelector("#generate");

// Call write password function and Write password to the #password input
function writePassword() {
    
  //Prompt for size and validate to confirm numeric and in proper range
  
  var validflag = 0;
     
  do {
      pwlength = parseInt(prompt("How large to you want your password? (8-128 characters)"));
        if(isNAN(pwlength) || pwlength < 8 || pwlength > 128) {
          validflag = 0;
        } else {
          validflag = 1};
        }
    } while {
      validflag = 0;
    }
  
  var pwlength = parseInt(prompt("How large to you want your password? (8-128 characters)"));
    if(isNAN(pwlength) {
      parseInt(prompt("PLEASE ENTER A NUMERIC VALUE"));
    } else {pwlength < 8 || pwlength > 128)
      Return "PLEASE ENTER A NUMBER IN THE RANGE OF 1 ADN 128"
    }


  // "Confirm" function requires no validation as it's boolean
  var pwupper = confirm("Do you want UPPER CASE characters?... Click 'OK' for yes");
  var pwlower = confirm("Do you want LOWER CASE characters?... Click 'OK' for yes");
  var pwnumber = confirm("Do you want NUMERIC characters?... Click 'OK' for yes");
  var pwsymbol = confirm("Do you want SPECIAL characters?... Click 'OK' for yes");
  
  // Initiate generate password function
  var password = generatePassword(pwupper, pwlower, pwnumber, pwsymbol, pwlength);
  
  passwordText.value = password;
}  
  
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Generate Password function
function generatePassword(pwupper, pwlower, pwnumber, pwsymbol, pwlength) {
    //Init PW var
    var generatedPassword = '';
    var typesCount = pwupper + pwlower + pwnumber + pwsymbol;

    //Filter out unselected variable types.
    var typesArr = [{pwupper}, {pwlower}, {pwnumber}, {pwsymbol}].filter 
    (item => Object.values(item)[0]);

    //Return null value if no types are selected.
    if(typesCount === 0 ) {
        return "NO TYPES SELECTED";
    }

    //Loop over length call generator function for each type.
    for (var i=0; i < pwlength; i += typesCount) {
        typesArr.forEach(type => {
          var funcName = Object.keys(type)[0];
          
          generatedPassword += randomFunc[funcName]();
        });
    }

    //Add final result to password variable and return
    var finalPassword = generatedPassword.slice(0,pwlength);
    return finalPassword;
}

// Gernerator functions
var randomFunc = {
  pwlower: getRandomLower,
  pwupper: getRandomUpper,
  pwnumber: getRandomNumber,
  pwsymbol: getRandomSymbol
};

// Generate random lower case character
function getRandomLower () {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
// Generate random upper case character
function getRandomUpper () {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
// Generate random numeric character
function getRandomNumber () {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
// Generate random symbol character from list below
function getRandomSymbol () {
  var symbols = "!@#$%^&*()+={}|[]\<>?/~";
  return symbols[Math.floor(Math.random() * symbols.length)];
}