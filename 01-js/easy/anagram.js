 /*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
function isAnagram(str1, str2) {

}
module.exports = isAnagram;
  npx jest ./tests/anagram.test.js
*/


function isAnagram(str1, str2) {
  // Convert both input strings to lowercase for case-insensitive comparison
  const lowerStr1 = str1.toLowerCase();
  const lowerStr2 = str2.toLowerCase();

  // Check if the lengths of the two strings are different
  if (lowerStr1.length !== lowerStr2.length) {
    return false; // If the lengths are different, the strings cannot be anagrams
  }

  // Create an empty object to store the count of each letter in str1
  const letterCount = {};

  // Iterate over each letter in lowerStr1
  for (let letter of lowerStr1) {
    // Increment the count of the current letter in the letterCount object
    // If the letter is not present in the object, initialize its count to 0 before incrementing
    letterCount[letter] = (letterCount[letter] || 0) + 1;
  }

  // Iterate over each letter in lowerStr2
  for (let letter of lowerStr2) {
    // Check if the current letter is not present in the letterCount object
    if (!letterCount[letter]) {
      return false; // If the letter is not present, the strings cannot be anagrams
    }
    // Decrement the count of the current letter in the letterCount object
    letterCount[letter]--;
  }

  // If we reach this point, all letters in lowerStr2 have been accounted for in letterCount
  // If the strings are anagrams, all letter counts in letterCount should be zero
  // Otherwise, there are extra or missing letters in lowerStr2, so they are not anagrams
  return true;
}

module.exports = isAnagram;
