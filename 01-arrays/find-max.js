// Problem: Find maximum element in array
// Input: [10, 20, 5, 99, 30]
// Output: 99

function findMax(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i]
        }
    }
    return max;
}
// findMax([10, 20, 5, 99, 30])

// Time Complexity: O(n)
// Space Complexity: O(1)