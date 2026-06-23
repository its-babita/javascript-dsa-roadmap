// Problem: Find minimum element in array
// Input: [10, 20, 5, 99, 30]
// Output: 5

function findMin(arr) {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i]
        }
    }
    return min;
}

// findMin([10, 20, 5, 99, 30])


// Time Complexity: O(n)
// Space Complexity: O(1)
