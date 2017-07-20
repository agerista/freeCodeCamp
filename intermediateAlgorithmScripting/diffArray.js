function diffArray(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.
  
  for(var i = 0; i < arr1.length; i++) {
    for(var j = 0; j < arr2.length; j++) {
      
      if(!arr1.includes(arr2[j])){
        newArr.push(arr2[j]);
      }
      
    }
  }
  return newArr;
}





function comp(arr1, arr2) {
    for(var i = 0; i < arr1.length; i++) {
        if (arr1.includes(arr2[i])) {
            console.log("yay!");}
        else {
            var newArr = [];
            newArr.push(arr2[i]);}}
    return newArr
}

diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);