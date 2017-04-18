function chunkArrayInGroups(arr, size) {
  // Break it up.
  // Write a function that splits an array (first argument) into groups the 
  // length of size (second argument) and returns them as a two-dimensional array.
 
  var arrArr = [];
  
  for (var i=0; i<arr.length; i+=size){
    
    
    arrArr.push(arr.slice(i,i+size));
    
  }
  return arrArr;
}
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2); // [[0, 1], [2, 3], [4, 5]]
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3); // [[0, 1, 2], [3, 4, 5], [6]]
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4); // [[0, 1, 2, 3], [4, 5, 6, 7], [8]]
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2); // [[0, 1], [2, 3], [4, 5], [6, 7], [8]]