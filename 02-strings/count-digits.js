// Pattern: Traversal + Character Classification

function countDigits(str) {
  let count = 0;

  for (let ch of str) {
    if (ch >= '0' && ch <= '9') {
      count++;
    }
  }

  return count;
}

// Time: O(n)
// Space: O(1)