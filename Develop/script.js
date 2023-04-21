// Assignment Code
var generateBtn = document.querySelector("#generate");

//makes it easier to see in my opinion.
var lowercaseletters =("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z");
var uppercaseletters = ("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z");
var numbers = ("0","1","2","3","4","5","6","7","8","9");
var specialitems = ("!","#","$","%","&","'","(", "*", "+" ,"," ,"-" ,"." ,"/" ,":" ,";" ,"<" ,"=" ,">" ,"?" , "@", "[", "(",  ")", "]" ,"^" ,"_" ,"`" ,"{" ,"|" ,"}" ,"~" ,")");

// Write password to the #password input
function writePassword() {
var password = generatePassword();
var passwordText = document.querySelector("#password");

passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Password generation function
function generatePassword() {

// first question asking how many letters will be in the password
var length = prompt("How many letters would you like your password to be? has to be between 8 and 128 letters.");

// make sure the number thats input is between the numbers 8 and 128
while (length < 8 || length > 128) {
length = prompt("make sure the number is between 8 and 128!");
}

// next 2 code makes sure the at least one of the categories is clicked. this makes sure the password is generated
var lowercase = confirm("include lowercase letters?");
var uppercase = confirm("include uppercase letters?");
var numeric = confirm("include numbers?");
var special = confirm("include special characters?");



while (!lowercase && !uppercase && !numeric && !special) {
alert("You must select at least one character type!");
lowercase = confirm("include lowercase letters?");
uppercase = confirm("include uppercase letters?");
numeric = confirm("include numbers?");
special = confirm("include special characters?");
}


// whatever item is accepted by the user will be included in the output. if all are incluided it shall randomly combine.
var confirmedpassword = "";
if (lowercase) {
confirmedpassword += lowercaseletters;
}
if (uppercase) {
confirmedpassword += uppercaseletters;
}
if (numeric) {
confirmedpassword += numbers;
}
if (special) {
confirmedpassword += specialitems;
}

// password will be generated with whatever was included. if all conditions are accepted by the user then it will randomly generate a passord on the front page
var password = "";
for (var i = 0; i < length; i++) {
password += confirmedpassword.charAt(Math.floor(Math.random() * confirmedpassword.length));
}

return password;
}