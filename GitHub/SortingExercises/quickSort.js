function pivot(arr, start = 0, end = arr.length - 1) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < pivot) {
      swap(arr, swapIdx + 1, i);
      swapIdx++;
    }
  }
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
    if (left < right) {
      let pivotIndex = pivot(arr, left, right);
      quickSort(arr, left, pivotIndex - 1);
      quickSort(arr, pivotIndex + 1, right);
      
    }
    
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
