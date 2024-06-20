/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/


function isAnagram(str1, str2) {
  const lowerStr1 = str1.toLowerCase();
  const lowerStr2 = str2.toLowerCase();
  if(lowerStr1.length !== lowerStr2.length) {
    return false;
  }
  const letterCount = {}
  for(let letter of lowerStr1){
    letterCount[letter] = (letterCount[letter] || 0) + 1;
  }
  for(let letter of lowerStr2){
    if(!letterCount[letter]) {
      return false;
    }
    letterCount[letter]--;
  }
  return true;
  }

module.exports = isAnagram;
