//////////////////////////////////////////////////////////////////////////////////
// Translate the provided string to pig latin.                                  //
//                                                                              //
// Pig Latin takes the first consonant (or consonant cluster) of an English word// 
// moves it to the end of the word and suffixes an "ay".                        //
//                                                                              //
// If a word begins with a vowel you just add "way" to the end.                 //
//                                                                              //
// Input strings are guaranteed to be English words in all lowercase.           //
//////////////////////////////////////////////////////////////////////////////////


function translatePigLatin(str) {
  
  var first = str[0];
  console.log(str[1]);
  
  if (first === 'a' || first === 'e' || first === 'i' || first === 'o' || first === 'u'){
    str = str + 'way';
  }
  
  else if (str[1] === 'a' || str[1] === 'e' || str[1] === 'i' || str[1] === 'o' || str[1] === 'u'){
    str = str.slice(1, 50) + first + 'ay';
  }
  
  else {
    str = str.slice(2, 50) + str.slice(0,2) + 'ay';
  }
  return str;
}

translatePigLatin("california"); // "aliforniacay".
translatePigLatin("paragraphs"); // "aragraphspay".
translatePigLatin("glove"); // "oveglay".
translatePigLatin("algorithm"); // "algorithmway".
translatePigLatin("eight"); // "eightway".
