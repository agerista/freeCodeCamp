function rot13(str) {
    // One of the simplest and most widely known ciphers is a Caesar cipher, 
    // also known as a shift cipher. In a shift cipher the meanings of the 
    // letters are shifted by some set amount.
    
    var strUpper = str.toUpperCase();
    var result = "";

    for (var i=0; i < strUpper.length; i++) {
        if (strUpper[i].charCodeAt() < 65 || strUpper[i].charCodeAt() > 90) {
            result += strUpper[i];
        }

        else {
            result += String.fromCharCode((strUpper[i].charCodeAt() - 65 + 13) % 26 + 65);
        }
    }
    var final = result.replace("-", " ");
    return final;
}

rot13("SERR PBQR PNZC"); // "FREE CODE CAMP"
rot13("SERR CVMMN!"); // "FREE PIZZA!"
rot13("SERR YBIR?"); // "FREE LOVE?"
rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.");
// "THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX."
