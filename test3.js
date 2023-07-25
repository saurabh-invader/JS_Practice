const array4 = [2, 5, 6, 7, 15, 6, 2, 2, 6];
const countNum = array4.reduce((tally, num) => {
  if (!tally[num]) {
    tally[num] = 1;
  } else {
    tally[num] += 1;
  }
  return tally;
}, {});

for (let char in countNum) {
  if (countNum[char] > 1) {
    console.log(char);
  }
}
