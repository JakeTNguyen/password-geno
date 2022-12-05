// Assignment Code

// Define all usable char into arrays

var lowerChar = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z".split(",");
var upperChar = "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z".split(",");
var numChar = "0,1,2,3,4,5,6,7,8,9".split(",");
var specialChar = "!,#,$,%,&,',(,),*,+,-,.,/,:,;,<,>,=,?,@,[,]\\,^,_,`,{,},|,~".split(",");
var charPass;
var charUser;

// prompts user for legnth and char options
function promptUser() {
  var passwordOpts = {
    charLimit: 0,
    lower: false,
    upper: false,
    num: false,
    special: false,
  };
  // do while loop will continue to prompt user untill all inputs are valid
  do {
    var validINs = true;

    // user enters string value which leads to math.floor method to convert to an int and save to password object
    passwordOpts.charLimit = Math.floor(prompt("Please enter password character length of or between 8 and 128:"));

    //  ask user to confirm char options to save t o pass object
    passwordOpts.lower = confirm("Should password include lowercase characters?");

    passwordOpts.upper = confirm("Should password include uppercase characters?");

    passwordOpts.num = confirm("Should password include numeric characters?");

    passwordOpts.special = confirm("Should password include special characters?");

    // console.log(passwordOpts);

    //  checks if length is correct then checks for min char options, if not, notifies user and returns invalid input to begin loop
    if (passwordOpts.charLimit > 128 || passwordOpts.charLimit < 8) {
      alert("The character length of the password must be of or between between 8 and 128.\n You entered: " +passwordOpts.charLimit +"\nPlease Try Again.");
      validINs = false;
    }
    if (
      passwordOpts.lower == false &&
      passwordOpts.upper == false &&
      passwordOpts.num == false &&
      passwordOpts.special == false
      ) {
      alert("You did not select any characters to include in your password.\nYou must select one of the four options when prompted:\nLowercase\nUppercase\nNumeric\nSpecial");
      validINs = false;
    }

  } while (validINs == false);

  //  returns object for further use
  return passwordOpts;
}

// creates the an array of the user's desired characters and selects the appropriate amount to meet desired password length
function charList(condition) {

// the following if statements check if user desires the described character then adds those chars to an array of usable/acceptable list for later use; to ensure min char requirement we also add that char element straight into our selected char array for the final password
  if (condition.lower == true) {
    charUser = charUser.concat(lowerChar);
    charPass = charPass.concat(lowerChar[Math.floor(Math.random() * lowerChar.length)]);
  }

  if (condition.upper == true) {
    charUser = charUser.concat(upperChar);
    charPass = charPass.concat(upperChar[Math.floor(Math.random() * upperChar.length)]);
  }

  if (condition.num == true) {
    charUser = charUser.concat(numChar);
    charPass = charPass.concat(numChar[Math.floor(Math.random() * numChar.length)]);
  }

  if (condition.special == true) {
    charUser = charUser.concat(specialChar);
    charPass = charPass.concat(specialChar[Math.floor(Math.random() * specialChar.length)]);
  }

  // console.log(charUser);
  // console.log(charPass);

  // uses current selected password chars and compares to desired password length, if length not met, uses our acceptable char array to continue to add to 
  while (charPass.length < condition.charLimit) {
    charPass.push(charUser[Math.floor(Math.random() * charUser.length)]);
  }

  return;
}

// randomize and assembles final password from selected password char array  
function passAssembly(condition) {
  var pass = [];

  // loops to fill password until desired length is met 
  while (pass.length < condition.charLimit) {
    var index = Math.floor(Math.random() * charPass.length); // creates a random index number of charPass(the selected chars of the password) to indicate what to send to password
    pass.push(charPass[index]); // push charPass(the selected chars of the password) into final password
    charPass.splice(index, 1); // removes used char that was sent to password to avoid repeating
  }
  pass = pass.join(""); // joins array elements into single string
  
  // console.log(pass);

  return pass;
}

function generatePassword() {
  charPass = [];
  charUser = [];

  var passCon = promptUser();
  charList(passCon);

  return passAssembly(passCon);
}

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
