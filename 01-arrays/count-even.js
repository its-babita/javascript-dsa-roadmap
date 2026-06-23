// Problem: Count even numbers in array
// Input: [1, 2, 3, 4, 5, 6]
// Output: 3

function countEven(arr) {
  let count = 0;

  for (let num of arr) {
    if (num % 2 === 0) {
      count++;
    }
  }

  return count;
}

// Time Complexity: O(n)
// Space Complexity: O(1)