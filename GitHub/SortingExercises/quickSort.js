
function pivot(arr, start = 0, end = arr.length - 1) {
  // pivot element to be swapped with the rightmost element
  const swap = (arr, idx1, idx2) => {
    // Swap elements at idx1 and idx2
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    
  };
  // Place the pivot element at its correct position in sorted array
  let pivot = arr[start];
  // Index of smaller element
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    // If current element is smaller than the pivot
    if (arr[i] < pivot) {
      // Swap elements at swapIdx and i
      swap(arr, swapIdx + 1, i);
      // Increment the swap index for the next smaller element
      swapIdx++;
    }
  }
  // Swap the pivot element with the element at swapIdx (the rightmost element)
  swap(arr, start, swapIdx);
  // console.log(swapIdx);
  // console.log(arr);
  return swapIdx;
}

//   let arr1 = [5, 4, 9, 10, 2, 20, 8, 7, 3];
//   let arr2 = [8, 4, 2, 5, 0, 10, 11, 12, 13, 16];

//   arr1.slice(0, 3).sort((a, b) => a - b); // [2, 3, 4]
//   arr1.slice(3).sort((a, b) => a - b); // [5, 7, 8, 9, 10, 20]

//   arr2.slice(0, 4).sort((a, b) => a - b); // [0, 2, 4, 5]
//   arr2.slice(4).sort((a, b) => a - b); // [8, 10, 11, 12, 13, 16]

//   pivot(arr1); // 3
//   pivot(arr2); // 4

function quickSort(arr, left = 0, right = arr.length - 1) {
  // Base case: if the array has only one element, return it
    if (left < right) {
      // Partition the array and get the pivot index
      let pivotIndex = pivot(arr, left, right);
      
      // Recursively sort the left and right halves of the array
      quickSort(arr, left, pivotIndex - 1);
      
      // Recursively sort the right half of the array
      quickSort(arr, pivotIndex + 1, right);
    }
    console.log(arr)
    return arr;
    
  }

quickSort([4, 20, 12, 10, 7, 9]); // [4, 7, 9, 10, 12, 20]
quickSort([0, -10, 7, 4]); // [-10, 0, 4, 7]
quickSort([1, 2, 3]); // [1, 2, 3]
quickSort([]);

let nums = [
  4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342,
  32,
];

quickSort(nums); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34,
//  35, 43, 67, 75, 232, 232, 453, 546, 4342]
