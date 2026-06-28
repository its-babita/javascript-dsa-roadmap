/*
Problem:
Given a string, return its reverse without using
split(), reverse(), or join().

Examples:

Input: "hello"
Output: "olleh"

Input: "JavaScript"
Output: "tpircSavaJ"
*/

function reverseString(str) {
  let left = 0;
  let right = str.length - 1;

  let chars = str.split("");

  while (left < right) {
    let temp = chars[left];
    chars[left] = chars[right];
    chars[right] = temp;

    left++;
    right--;
  }

  return chars.join("");
}

console.log(reverseString("hello"));
console.log(reverseString("JavaScript"));

/*
Pattern:
Two Pointers (Opposite Ends)

Logic:
1. Convert the string into an array because strings are immutable in JavaScript.
2. Initialize:
   - left = 0
   - right = last index
3. Swap the characters at left and right.
4. Move both pointers inward.
5. Repeat until the pointers meet.
6. Join the array back into a string.

Time Complexity: O(n)

Space Complexity: O(n)

Note:
The swapping itself uses O(1) extra space, but converting the string into an array requires O(n) space because JavaScript strings are immutable.
*/