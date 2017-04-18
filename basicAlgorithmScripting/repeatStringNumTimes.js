function repeatStringNumTimes(str, num) {
  // repeat a string num times, if the num is negative return ""
  
  var final = str;
  var i = 1;
  
  if (num<0){
    return "";
  }
  
  if (num === 1) {
    return final;
  }
  
  while (i<num){
    
    final = final + str;
    i++;
  }
  return final;
}

repeatStringNumTimes("abc", 3); //"abcabcabc"
repeatStringNumTimes("*", 8); // "********"
repeatStringNumTimes("abc", -2); // ""