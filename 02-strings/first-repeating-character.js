/*
Problem:
Given a string, return the first character that repeats.

If no repeating character exists, return null.

Examples:

Input: "abccde"
Output: "c"

Input: "abcabc"
Output: "a"

Input: "abcdef"
Output: null
*/

function firstRepeatingCharacter(str) {
  const seen = new Set();

  for (let ch of str) {
    if (seen.has(ch)) {
      return ch;
    }

    seen.add(ch);
  }

  return null;
}

console.log(firstRepeatingCharacter("abccde")); // c
console.log(firstRepeatingCharacter("abcabc")); // a
console.log(firstRepeatingCharacter("abcdef")); // null

/*
Pattern:
Hashing (Set)

Logic:
1. Create an empty Set.
2. Traverse the string.
3. If the character already exists in the Set,
   return it immediately.
4. Otherwise, add the character to the Set.
5. If no repeating character is found, return null.

Time Complexity:
O(n)

Space Complexity:
O(n)
*/