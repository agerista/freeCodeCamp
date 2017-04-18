function findLongestWord(str) {
  //Return the length of the longest word in the provided sentence.

  var count = 0;
  var phrase = str.split(" ");
  
  for (var i=0; i<phrase.length; i++) {
    
    if (phrase[i].length > count) {
      count = phrase[i].length;
    }
  }
  
  return count;
}

findLongestWord("The quick brown fox jumped over the lazy dog"); //6
findLongestWord("May the force be with you"); //5
findLongestWord("Google do a barrel roll"); //6
findLongestWord("What is the average airspeed velocity of an unladen swallow"); //8