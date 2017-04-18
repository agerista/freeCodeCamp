function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  
  var check = target.length;

  if (str.slice(str.length - check) === target){
    
    return true;
  }
  else {
    return false;
  }
}


confirmEnding("Bastian", "n");
confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification");
confirmEnding("Open sesame", "same");