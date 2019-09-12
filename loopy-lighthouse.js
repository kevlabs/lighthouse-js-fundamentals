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