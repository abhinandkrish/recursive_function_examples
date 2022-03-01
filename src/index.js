function countup(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countup(n - 1);
    countArray.push(n);
    return countArray;
  }
}
console.log(countup(5));

function countdown(n) {
if (n >= 1 ) {
const countArray = countdown(n - 1);
countArray.unshift(n);
return countArray;
}
else {
  return [];
}
}
console.log(countdown(10));





