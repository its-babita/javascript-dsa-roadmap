/*
Problem:
Given a string, return the frequency of every character.

The output should be an object where:
- The key is the character.
- The value is the number of times that character appears.

Examples:

Input: "aabbc"
Output:
{
  a: 2,
  b: 2,
  c: 1
}

Input: "banana"
Output:
{
  b: 1,
  a: 3,
  n: 2
}
*/

function characterFrequency(str) {
  const frequency = {};

  for (let ch of str) {
    if (frequency[ch]) {
      frequency[ch]++;
    } else {
      frequency[ch] = 1;
    }
  }

  return frequency;
}

console.log(characterFrequency("banana"));
console.log(characterFrequency("hello"));
console.log(characterFrequency("aabbc"));

/*
Pattern:
Hashing (Object)

Logic:
1. Create an empty object.
2. Traverse the string one character at a time.
3. If the character already exists in the object,
   increment its count.
4. Otherwise, initialize its count to 1.
5. Return the frequency object.

Time Complexity:
O(n)

Space Complexity:
O(n)
*/