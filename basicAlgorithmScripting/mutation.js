function mutation(arr) {
// Return true if the string in the first element of the array contains all of 
// the letters of the string in the second element of the array.
  
  var check = arr[0].toLowerCase();
  var other = arr[1].toLowerCase();
  var result = true;
  
  for (var i=0; i<other.length; i++) {
    if (check.indexOf(other[i]) === -1){
      result = false;
    }
  }
  return result;
}

mutation(["hello", "hey"]); // false.
mutation(["hello", "Hello"]); // true.
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]); // true.
mutation(["Mary", "Army"]); // true.
mutation(["Mary", "Aarmy"]); // true.
mutation(["Alien", "line"]); // true.
mutation(["floor", "for"]); // true.
mutation(["hello", "neo"]); // false.
mutation(["voodoo", "no"]); // false.
