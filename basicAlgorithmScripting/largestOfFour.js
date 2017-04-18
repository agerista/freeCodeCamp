function largestOfFour(arr) {
  // You can do this!
  //Return an array consisting of the largest number from each provided sub-array. 
  //For simplicity, the provided array will contain exactly 4 sub-arrays.
  
  var largest = [];
  
  for (var i=0; i<arr.length; i++){
    
    var maximum = arr[i].sort(function(a, b){return a-b});
    largest.push(maximum[maximum.length - 1]);
    
  
  }
  return largest;
}
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
// [5,27,39,1001]
largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
// [27,5,39,1001]
largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]);
// [9, 35, 97, 1000000]