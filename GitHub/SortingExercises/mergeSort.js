function merge(arr1, arr2) {
    // Merge two sorted arrays into one sorted array
    const results = [];
    // Initialize two pointers to start of both arrays
    let i = 0;
    let j = 0;    
    while (i < arr1.length && j < arr2.length) {
        // Compare the elements and add the smaller one to the results array
        if (arr1[i] < arr2[j]) {
            // If arr1[i] is smaller, increment the pointer for arr1
            results.push(arr1[i]);
            i++;
        } else {
            // If arr2[j] is smaller, increment the pointer for arr2
            results.push(arr2[j]);
            j++;
        }
 
}
while (i < arr1.length) {
    // If arr1[i] is smaller, add it to the results array and increment the pointer for
    results.push(arr1[i]);
    i++;
}
while (j < arr2.length) {
    // If arr2[j] is smaller, add it to the results array and increment the pointer for
    results.push(arr2[j]);
    j++;
}
console.log(results);
return results
}



function mergeSort(arr) {
    // Base case: if the array has only one element, return it
    if (arr.length <= 1)
        return arr;

    const middle = Math.floor(arr.length / 2); // Get the middle index
    const left = mergeSort(arr.slice(0, middle)); // Get the left half of the array
    const right = mergeSort(arr.slice(middle));  // Get the right half of the array
    return merge(left, right);
}

mergeSort([4, 20, 12, 10, 7, 9]); // [4, 7, 9, 10, 12, 20]
mergeSort([0, -10, 7, 4]); // [-10, 0, 4, 7]
mergeSort([1, 2, 3]); // [1, 2, 3]
mergeSort([]);

let nums = [
    4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2,
    453, 546, 75, 67, 4342, 32
];

mergeSort(nums); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35,
                 //  43, 67, 75, 232, 232, 453, 546, 4342]

module.exports = { merge, mergeSort};