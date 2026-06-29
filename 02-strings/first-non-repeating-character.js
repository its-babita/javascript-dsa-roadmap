/*
Problem:
Given a string, return the first non-repeating character.

If no such character exists, return null.

Examples:

Input: "leetcode"
Output: "l"

Input: "loveleetcode"
Output: "v"

Input: "aabbcc"
Output: null
*/

function firstNonRepeatingCharacter(str) {
  const frequency = {};

  // First pass: Build frequency map
  for (let ch of str) {
    if (frequency[ch]) {
      frequency[ch]++;
    } else {
      frequency[ch] = 1;
    }
  }

  // Second pass: Find first unique character
  for (let ch of str) {
    if (frequency[ch] === 1) {
      return ch;
    }
  }

  return null;
}

console.log(firstNonRepeatingCharacter("leetcode"));      // l
console.log(firstNonRepeatingCharacter("loveleetcode"));  // v
console.log(firstNonRepeatingCharacter("aabbcc"));        // null

/*
Pattern:
Hashing + Two Traversals

Logic:
1. Count the frequency of every character.
2. Traverse the string again.
3. Return the first character with a frequency of 1.
4. If none exists, return null.

Time Complexity: O(n)
Space Complexity: O(n)
*/