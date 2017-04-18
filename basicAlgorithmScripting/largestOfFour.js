function largestOfFour(arr) {
  // You can do this!
  
  var largest = [];
  
  for (var i=0; i<arr.length; i++){
    
    var maximum = arr[i].sort(function(a, b){return a-b});
    largest.push(maximum[maximum.length - 1]);
    
  
  }
  return largest;
}
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
