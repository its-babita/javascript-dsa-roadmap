/*
Problem:
Given a string, determine whether it is a palindrome.

A palindrome is a string that reads the same forward and backward.

Return true if the string is a palindrome, otherwise return false.

Examples:

Input: "madam"
Output: true

Input: "racecar"
Output: true

Input: "hello"
Output: false
*/

function validPalindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

console.log(validPalindrome("madam"));    // true
console.log(validPalindrome("racecar"));  // true
console.log(validPalindrome("hello"));    // false

/*
Pattern:
Two Pointers (Opposite Ends)

Logic:
1. Initialize two pointers:
   - left at the beginning
   - right at the end
2. Compare both characters.
3. If they are different, return false.
4. Otherwise move both pointers inward.
5. If all characters match, return true.

Time Complexity: O(n)

Space Complexity: O(1)
*/