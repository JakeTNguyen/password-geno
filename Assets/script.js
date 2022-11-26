// Assignment Code

// Define all usable char into arrays

/*var lowerChar = ["a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z"].split(",");
var upperChar = ["A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z"].split(",");
var numChar = ["0,1,2,3,4,5,6,7,8,9"].split(",");
var specialChar = ["!,#,$,%,&,',(,),*,+,-,.,/,:,;,<,>,=,?,@,[,]\\,^,_,`,{,},|,~"].split(",");
*/

function promptUser() {

  passwordOpts = {
    charLimit: 0,
    lower: false,
    upper: false,
    num: false,
    special: false,
    charArray: [],
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

    console.log(passwordOpts);
    
//  checks if length is correct then checks for min char options, if not, notifies user and returns invalid input to begin loop
    if (passwordOpts.charLimit > 128 || passwordOpts.charLimit < 8) {
      alert("The character length of the password must be of or between between 8 and 128.\n You entered: " + passwordOpts.charLimit + "\nPlease Try Again.");
      validINs = false;
    } 
    if (
      passwordOpts.lower == false &&
      passwordOpts.upper == false &&
      passwordOpts.num == false &&
      passwordOpts.special == false
    ) {
      alert("You did not select any characters to include in your password.\nYou must select one of the four options when prompted:\nLowercase\nUppercase\nNumeric\nSpecial");
      validINs = false;}

    console.log(validINs);

   }  while (validINs == false);
   
   console.log(validINs);
  //  returns object for further use
   return passwordOpts;
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

