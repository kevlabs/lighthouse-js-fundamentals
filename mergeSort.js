/*

CONTENT:
I. Returns array of sorted indexes
II. Sorts array in place

* I. and II. are independent functions which both rely on the merge-sort concept

** --------------------------------------------
** I. SORTS INDEXES
** ------------------------------------------*/
function mergeSortIndexes(arr, start = 0, end) {

  if (!arr.length) { return; }
  end = typeof end === 'number' ? end : arr.length - 1;

  if (start == end) {
    //return index
    return [start];
  } else {
    const midPoint = ~~((end + start) / 2);
    //will end up with an array of two indexes to sort
    //return array of sorted indexes
    return mergeIndexes(arr, mergeSortIndexes(arr, start, midPoint), mergeSortIndexes(arr, midPoint + 1, end));
  }

}

// input are arrays of indexes
//return array of indexes
function mergeIndexes(arr, arr1, arr2) {

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
** II. SORTS ARRAY IN PLACE
** ------------------------------------------*/
function mergeSortArray(arr, start = 0, end) {

  if (!arr.length) { return; }
  end = typeof end === 'number' ? end : arr.length - 1;

  if (start == end) {
    //return index
    return [start];
  } else {
    const midPoint = ~~((end + start) / 2);
    //will end up with an array of two indexes to sort
    //1. sort
    //2. return array of sorted indexes
    return mergeArray(arr, mergeSortArray(arr, start, midPoint), mergeSortArray(arr, midPoint + 1, end));
  }

}

//merges pre-sorted arrays
function mergeArray(arr, arr1, arr2) {

  //if any one array is empty return non empty pre-sorted array
  if (!arr1.length || !arr2.length) {
    return [...arr1, ...arr2];
  }

  //swap positions if value in 2nd array is greater
  if(arr[arr1[0]] > arr[arr2[0]]) {
    [arr[arr1[0]], arr[arr2[0]]] = [arr[arr2[0]], arr[arr1[0]]];
    //need to reorder arr2 after swap
    arr2 = mergeArray(arr, [arr2[0]], arr2.slice(1));
  }
  return [arr1[0], ...mergeArray(arr, arr1.slice(1), arr2)];

}

let arr2 = [1, 6, 5, 29, 8, 45, 3, 9];
mergeSortArray(arr2);
console.log(arr2.join(', '));