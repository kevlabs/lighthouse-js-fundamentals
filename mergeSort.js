/*

CONTENT:
I. Returns array of sorted indexes
II. Sorts array in place

* I. and II. are independent functions which both rely on the merge-sort concept

** --------------------------------------------
** I. SORT INDEXES
** ------------------------------------------*/
function mergeSortIndexes(arr, start = 0, end) {

  if (!arr.length) { return; }
  end = typeof end === 'number' ? end : arr.length - 1;

  if (start == end) {
    //return index
    return [start];
  } else {
    const midPoint = ~~((end + start) / 2);
    //eventually will end up with two arrays of one index each.
    //return array of sorted indexes
    return mergeIndexes(arr, mergeSortIndexes(arr, start, midPoint), mergeSortIndexes(arr, midPoint + 1, end));
  }

}

//inputs are arrays of indexes
//return array of indexes
function mergeIndexes(arr, arr1, arr2) {

  //if any one array is empty return non empty pre-sorted array
  if (!arr1.length || !arr2.length) {
    return [...arr1, ...arr2];
  }

  if(arr[arr1[0]] < arr[arr2[0]]) {
    return [arr1[0], ...mergeIndexes(arr, arr1.slice(1), arr2)];
  } else {
    return [arr2[0], ...mergeIndexes(arr, arr1, arr2.slice(1))];
  }

}

let arr = [1, 6, 63, 5, 3, 99, 9, 8, 3, 9, 8];
let sortedIndexes = mergeSortIndexes(arr);
//print new array of sorted values
console.log(sortedIndexes.map( i =>  arr[i]).join(', '));


/* --------------------------------------------
** II. SORT ARRAY IN PLACE
** ------------------------------------------*/
function mergeSortArray(arr, compareFunction = (a,b) => a - b, start = 0, end) {

  if (!arr.length) { return; }
  end = typeof end === 'number' ? end : arr.length - 1;

  if (start == end) {
    //return index
    return [start];
  } else {
    const midPoint = ~~((end + start) / 2);
    //eventually will end up with two arrays of one index each.
    //1. sort
    //2. return array of sorted indexes
    return mergeArray(arr, mergeSortArray(arr, compareFunction, start, midPoint), mergeSortArray(arr, compareFunction, midPoint + 1, end), compareFunction);
  }

}

//sorts and merges arrays based on supplied compareFunction
function mergeArray(arr, arr1, arr2, compareFunction) {

  //if any one array is empty return non empty pre-sorted array
  if (!arr1.length || !arr2.length) {
    return [...arr1, ...arr2];
  }

  //swap positions if value in 1st array is greater
  if(compareFunction(arr[arr1[0]], arr[arr2[0]]) > 0) {
    [arr[arr1[0]], arr[arr2[0]]] = [arr[arr2[0]], arr[arr1[0]]];
    //need to reorder arr2 after swap
    arr2 = mergeArray(arr, [arr2[0]], arr2.slice(1), compareFunction);
  }
  return [arr1[0], ...mergeArray(arr, arr1.slice(1), arr2, compareFunction)];

}

let arr2 = [1, 6, 5, 29, 8, 45, 3, 9];
mergeSortArray(arr2);
console.log(arr2.join(', ')); //1, 3, 5, 6, 8, 9, 29, 45
mergeSortArray(arr, (a, b) => b - a);
console.log(arr.join(', ')); //99, 63, 9, 9, 8, 8, 6, 5, 3, 3, 1