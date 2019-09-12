//version 1
for (let i = 100; i <= 200; i++) {
  let result = '';
  if (!(i % 3)) {
    result += 'Loopy';
  }
  if (!(i % 4)) {
    result += 'Lighthouse';
  }
  if (!result) {
    result = i;
  }
  console.log(result);
}

//version 2
for (let i = 100; i <= 200; i++) {
  let result = i % 3 ? '' : 'Loopy';
  result += i % 4 ? '' : 'Lighthouse';
  result = result || i;
  console.log(result);
}


function loopyLighthouse(range, multiples, words) {

  if (multiples.length != words.length) { return; }

  for (let i = range[0]; i <= range[1]; i++) {
    let result = multiples.reduce( (str, mult, j) => str += !(i % mult) ? words[j] : '', '') || i;
    console.log(result);
  }

}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);

function concat(arr1, arr2) {
  return [...arr1, ...arr2];
}

console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);