/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

// first approach

// function isAnagram(str1, str2) {
//   str1 = str1.toLowerCase();
//   str2 = str2.toLowerCase();

//   if (str1.length !== str2.length) {
//     return false;
//   } else {
//     for (let i = 0; i < str1.length; i++) {
//       let isAnagram = str2.includes(str1[i]);
//       if (!isAnagram) {
//         i = str1.length;
//         return false;
//       }
//     }
//     return true;
//   }
// }

//optimized approach

function isAnagram(str1, str2) {
  // Check if the lengths are different
  if (str1.length !== str2.length) {
    return false;
  }

  // Create character frequency maps for both strings
  const charCount1 = {};
  const charCount2 = {};

  // Update frequency map for str1
  for (const char of str1) {
    charCount1[char] = (charCount1[char] || 0) + 1;
  }

  // Update frequency map for str2 and check if characters match
  for (const char of str2) {
    charCount2[char] = (charCount2[char] || 0) + 1;

    // Check if the current character count in str2 is higher than in str1
    if (charCount2[char] > (charCount1[char] || 0)) {
      return false;
    }
  }

  return true;
}

module.exports = isAnagram;
