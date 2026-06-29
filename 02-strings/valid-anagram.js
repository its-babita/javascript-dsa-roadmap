/*
Problem:
Given two strings, return true if they are anagrams.
Otherwise return false.

Examples:

Input:
listen
silent

Output:
true

Input:
rat
car

Output:
false
*/

function isAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const frequency = {};

  // Build frequency map
  for (let ch of s) {
    if (frequency[ch]) {
      frequency[ch]++;
    } else {
      frequency[ch] = 1;
    }
  }

  // Match characters
  for (let ch of t) {
    if (!frequency[ch]) {
      return false;
    }

    frequency[ch]--;
  }

  return true;
}

console.log(isAnagram("listen", "silent"));   // true
console.log(isAnagram("rat", "car"));         // false
console.log(isAnagram("anagram", "nagaram")); // true

/*
Pattern:
Hashing (Frequency Map)

Logic:
1. Check if both strings have the same length.
2. Build a frequency map for the first string.
3. Traverse the second string and decrease the count.
4. If a character doesn't exist or its count goes below zero,
   return false.
5. If every character matches, return true.

Time Complexity:
O(n)

Space Complexity:
O(n)
*/