function selectionSort(arr) { 
    // iterate over the array from the beginning to the end
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;
        // find the minimum element in the unsorted part of the array
        for (let j = i + 1; j < arr.length; j++) {
            // if the current element is smaller than the minimum, update the minimum index
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        // swap the minimum element with the current element
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    
    console.log(arr);
    
    return arr;
}

selectionSort([4, 20, 12, 10, 7, 9]); // [4, 7, 9, 10, 12, 20]
selectionSort([0, -10, 7, 4]); // [-10, 0, 4, 7]
selectionSort([1, 2, 3]); // [1, 2, 3]
selectionSort([]);

let nums = [
    4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2,
    453, 546, 75, 67, 4342, 32
];

selectionSort(nums); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34,
                     //  35, 43, 67, 75, 232, 232, 453, 546, 4342]

module.exports = selectionSort;