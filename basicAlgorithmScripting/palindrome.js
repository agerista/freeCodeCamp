function palindrome(str) {
    //Return true if the given string is a palindrome. Otherwise, return false.

    //A palindrome is a word or sentence that's spelled the same way both forward 
    //and backward, ignoring punctuation, case, and spacing.


  
  var check = str.toLowerCase().replace(/[_:(-/,.\s]+/g, "");
  var reverse = check.split("").reverse().join("");
  return (check === reverse);
}

palindrome("eye"); //true
palindrome("race car"); //true
palindrome("not a palindrome"); //false