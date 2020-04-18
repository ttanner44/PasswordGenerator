// Assignment Code - DOM Elements
var passwordText = document.querySelector("#password");
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    
  //Need to add validation and loop to confirm numeric and in proper range
  var pwlength = parseInt(prompt("How large to you want your password? (8-128 characters)?"));
    console.log("pwlength = " + pwlength);
    console.log(typeof pwlength); 

  // Confirm requires no validation as it's boolean
  var pwupper = confirm("Do you want upper case characters?...OK for yes?");
    console.log("pwupper = " + pwupper); 
  var pwlower = confirm("Do you want lower case characters?...OK for yes?");
    console.log("pwlower = " + pwlower);
  var pwnumber = confirm("Do you want numbers?...OK for yes?");
    console.log("pwnumber = " + pwnumber); 
  var pwsymbol = confirm("Do you want symbols?...OK for yes?");
    console.log("pwsymbol = " + pwsymbol);

  var password = generatePassword(pwupper, pwlower, pwnumber, pwsymbol, pwlength);
  
  passwordText.value = password;

}  
  
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Generate Password function
function generatePassword(pwupper, pwlower, pwnumber, pwsymbol, pwlength) {
    //1. Init PW var

    //2. Filter out unselected variable types.
    
    //3. Loop over length call generator function for each type.
    
    //4. Add final pw to password variable and return
    
    var generatedPassword = '';
    var typesCount = pwupper + pwlower + pwnumber + pwsymbol;
    console.log("typesCount", typesCount);

    var typesArr = [{pwupper}, {pwlower}, {pwnumber}, {pwsymbol}].filter 
    (item => Object.values(item)[0]);
    console.log("typesArr: ", typesArr);

    if(typesCount === 0 ) {
        return "";
    }

    for (var i=0; i < pwlength; i += typesCount) {
        typesArr.forEach(type => {
          var funcName = Object.keys(type)[0];

          console.log('funcName: ', funcName);
          
          generatedPassword += randomFunc[funcName]();
        });
    }
    console.log(generatedPassword.slice(0,pwlength));
    var finalPassword = generatedPassword.slice(0,pwlength);
    return finalPassword;
}


// Gernerator Functions
var randomFunc = {
  pwlower: getRandomLower,
  pwupper: getRandomUpper,
  pwnumber: getRandomNumber,
  pwsymbol: getRandomSymbol
};

function getRandomLower () {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper () {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber () {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol () {
  var symbols = "!@#$%^&*()+={}|[]\<>?/~";
  return symbols[Math.floor(Math.random() * symbols.length)];
}