//MERGE SORTED ARRAYS OF NUMBERS

//using recursion

function merge(arr1, arr2) {

  if (!arr1.length || !arr2.length) {
    return [...arr1, ...arr2];
  }

  if(arr1[0] < arr2[0]) {
    return [arr1[0], ...merge(arr1.slice(1), arr2)];
  } else {
    return [arr2[0], ...merge(arr1, arr2.slice(1))];
  }

}

//with while loops
function merge2(arr1, arr2) {

  let result = [];
  let i = 0;
  let j = 0;

  if (!arr1.length || !arr2.length) {
    return [...arr1, ...arr2];
  }

  while (i < arr1.length) {
    while (j < arr2.length) {
      if (arr2[j] < arr1[i]) {
        result.push(arr2[j]);
        if (++j === arr2.length) {
          result.push(...arr1.slice(i))
          return result;
        }
      } else {
        result.push(arr1[i]);
        break;
      }

    }
    if (++i == arr1.length) {
      result.push(...arr2.slice(j))
      return result;
    }

  }

}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);