function fearNotLetter(str) {
  
  var missing;
  
  for (var i = 0; i < str.length - 1; i++) {
    
    var start = str.charCodeAt(i);
    console.log(start, str.charCodeAt(i + 1) - 1);
    if (start !== str.charCodeAt(i + 1) - 1) {
      missing = String.fromCharCode(str.charCodeAt(i + 1) - 1);
    }
  }
  return missing;
}

fearNotLetter("abce"); // "d"
fearNotLetter("abcdefghjklmno"); // "i".
fearNotLetter("bcd"); // undefined.
fearNotLetter("yz"); // undefined.
