// Problem: Reverse array (without built-in reverse)
// Input: [1,2,3,4,5]
// Output: [5,4,3,2,1]

function reverseArray(arr) {
  let result = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }

  return result;
}

// Time Complexity: O(n)
// Space Complexity: O(n)