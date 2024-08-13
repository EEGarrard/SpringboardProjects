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


let arr1 = [1,3,4,5];
let arr2 = [2,4,6,8];
merge(arr1,arr2) // [1,2,3,4,4,5,6,8]

arr1 // [1,3,4,5];
arr2 // [2,4,6,8];

let arr3 = [-2,-1,0,4,5,6];
let arr4 = [-3,-2,-1,2,3,5,7,8];

merge(arr3,arr4); // [-3,-2,-2,-1,-1,0,2,3,4,5,5,6,7,8]

let arr5 = [3,4,5]
let arr6 = [1,2]

merge(arr5,arr6) // [1,2,3,4,5]