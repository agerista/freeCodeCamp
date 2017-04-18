function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  //Check if a string (first argument, str) ends with the given target string 
  //(second argument, target).
  
  var check = target.length;

  if (str.slice(str.length - check) === target){
    
    return true;
  }
  else {
    return false;
  }
}


confirmEnding("Bastian", "n"); //true
confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification"); //false
confirmEnding("Open sesame", "same"); //true