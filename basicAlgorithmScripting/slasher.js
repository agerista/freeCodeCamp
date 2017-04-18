function slasher(arr, howMany) {
  // it doesn't always pay to be first
  // Return the remaining elements of an array after chopping off n elements 
  // from the head.
  
  var newArr = [];
  newArr = arr.slice(howMany);
  
  return newArr;
}

slasher([1, 2, 3], 2); // 3
slasher([1, 2, 3], 0); // [1, 2, 3]
slasher([1, 2, 3], 9); // []
slasher(["burgers", "fries", "shake"], 1); // ["fries", "shake"]
slasher([1, 2, "chicken", 3, "potatoes", "cheese", 4], 5); // ["cheese", 4]