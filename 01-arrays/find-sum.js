// Problem: Find sum of all elements
// Input: [1, 2, 3, 4, 5]
// Output: 15

function findSum(arr) {
  let sum = 0;

  for (let num of arr) {
    sum += num;
  }

  return sum;
}


// Time Complexity: O(n)
// Space Complexity: O(1)