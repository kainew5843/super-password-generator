// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

  // Password will use these charcters
  var lowerCase = 'a b c d e f g h i j k l m n o p q r s t u v w x y z';
  var upperCase = 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z';
  var numbers = '1 2 3 4 5 6 7 8 9 0';
  var specChar = '! @ # $ % ^ & * ( ) - _ + = ? [ ] { } | : ; " < >';
// split characters into array
  var lcv = lowerCase.split(' ');
  var ucv = upperCase.split(' ');
  var numv = numbers.split(' ');
  var scv = specChar.split(' ');

  

  //Generate Password Function
  function generatePassword(){
    //The variable of the created password
    var userPassword = '';
    //The array that will hold the characters the user chooses to use 
    var array = []
  //User enters how long they would like their password to be
  var passwordLength = window.prompt ("How long would you like your password to be? Enter a number between 8 and 128.");
  //Insures user stays between 8-128 characters
  if (passwordLength < 8 || passwordLength > 128){
    window.alert("Please choose a number between 8 and 128.");
    //returns user to passwordLength prompt
    return;}
    //Confirm User chose amount characters they wanted
    else{
      var lengthconfirm = window.confirm("You would like your password to be " + passwordLength + " characters long. Is this correct?")
      //if confirmed, let user know, continue to next step
      if(lengthconfirm){
        window.alert(" Your password will be " + passwordLength + " characters long.")
      };
      //if not confirmed, return to start of function and ask again
      if(!lengthconfirm){
        generatePassword()
      };
    }
//User chooses if they want to include UpperCase
var upperCase = window.confirm("Would you like to include Uppercase letters in your password?");    
    if (upperCase){ 
      array = array.concat(ucv)
      window.alert("Your password will contain upper case letters.")
    }
  
//User chooses if they want to include lowerCase
var lowerCase = window.confirm("Would you like to include Lowercase letters in your password?");
    if(lowerCase){
      //If yes, add the referenced array(lcv) into the new array (array) using concat
      array = array.concat(lcv)
      window.alert("Your password will contain lower case letters.")
    }
//User chooses if they want to include numbers
var numbers = window.confirm("Would you like to include Numbers in your password?");
    if(numbers){
      array = array.concat(numv)
      window.alert("Your password will contain numbers.")
    }
//User chooses if they want to include specialChar
var specChar = window.confirm("Would you like to include Special Characters letters in your password?");
    if(specChar){
      array = array.concat(scv)
      window.alert("Your password will contain special characters.")
    }
      //If user does not choose to use any of these characters, Run alert
    if(!upperCase && !lowerCase && !numbers && !specChar){
      window.alert("Please Choose at least one.")
      return;
    }
    //loop function for each slot in array
for (let index = 0; index < passwordLength; index++) {
    //Make 'element' represent the result of running the random func (arrslotrand) through 'array'
  const element = arrslotrand(array );
  //Give the var 'userPassword' which was previously blank, the value of 'element'
    userPassword = userPassword + element
  
}
//Return the result
  return userPassword
};

//ForEach element in the array run this function to recieve a random character and store it
function arrslotrand(items){
//Math.floor rounds down.
var item = items[Math.floor(Math.random()*items.length)];
 return item;
}

  


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);