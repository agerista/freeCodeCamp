function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  // Return the lowest index at which a value (second argument) should be 
  // inserted into an array (first argument) once it has been sorted. The 
  // returned value should be a number.

  arr.push(num);
  arr.sort(function(a,b){
    return a - b;
  });
  return arr.indexOf(num);
}

getIndexToIns([10, 20, 30, 40, 50], 35); // 3
getIndexToIns([10, 20, 30, 40, 50], 30); // 2
getIndexToIns([40, 60], 50); // 1
getIndexToIns([3, 10, 5], 3); // 0
getIndexToIns([5, 3, 20, 3], 5); // 2
getIndexToIns([2, 20, 10], 19); // 2
getIndexToIns([2, 5, 10], 15); // 3
