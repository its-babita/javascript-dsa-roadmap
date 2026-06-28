/*
Problem:
Given an alphanumeric string, return the second largest numerical digit.
If no second largest digit exists, return -1.

Examples:

Input: "dfa12321afd"
Output: 2

Input: "abc1111"
Output: -1

Input: "ck077"
Output: 0
*/

function secondLargestDigit(str) {
  let first = -1;
  let second = -1;

  for (let i = 0; i < str.length; i++) {
    let ch = str[i];

    if (ch >= "0" && ch <= "9") {
      let digit = Number(ch);

      if (digit > first) {
        second = first;
        first = digit;
      } else if (digit > second && digit !== first) {
        second = digit;
      }
    }
  }

  return second;
}

console.log(secondLargestDigit("dfa12321afd")); // 2
console.log(secondLargestDigit("abc1111"));     // -1
console.log(secondLargestDigit("ck077"));       // 0

/*
Pattern:
Traversal + Linear Scan + ASCII Comparison

Logic:
1. Traverse every character in the string.
2. Ignore non-digit characters.
3. Maintain two variables:
   - first  -> largest digit found so far
   - second -> second largest distinct digit
4. Update first and second while traversing.
5. Return second.

Time Complexity: O(n)
Space Complexity: O(1)
*/