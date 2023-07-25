let array = [4, 78, 13, 2, 56, 34];

// let largItem1 = array[0];

// for (let i = 0; i < array.length; i++) {
//   if (array[i] > largItem1) {
//     largItem1 = array[i];
//   }
// }

// console.log(largItem1);
// console.log(array.sort((a, b) => a-b))
// console.log(array.sort((a, b) => a-b)[0])
// console.log(array.sort((a, b) => a-b)[array.length -1])
// console.log(array.sort((a, b) => a-b).reverse())
// console.log(array.sort((a, b) => a-b).reverse()[0])
// console.log(array.sort((a, b) => a-b).reverse()[array.length -1])

// const array1 = [2, 5, 6, 7, 15, 42, 18, 10, 3, 4];
// for (let i = 0; i < array1.length; i++) {
//   for (let j = 0; j < array1.length; j++) {
//     if (array1[j] > array1[j + 1]) {
//       const temp = array1[j];
//       array1[j] = array1[j + 1];
//       array1[j + 1] = temp;
//     }
//   }
// }
// console.log(array1);

// const array2 = [2, 5, 6, 7, 15, 6, 2];
// const array3 = [];
// for (let i = 0; i < array2.length; i++) {
//   for (let j = i+1; j < array2.length; j++) {
//     if (array2[i] == array2[j]) {
//       array3.push(array2[j]);
//     }
//   }
// }
// console.log(array3);

// const array4 = [2, 5, 6, 7, 15, 6, 2, 2, 6];
// const countNum = array4.reduce((tally, num) => {
//   if (!tally[num]) {
//     tally[num] = 1;
//   } else {
//     tally[num] += 1;
//   }
//   return tally;
// }, {});

// for (let char in countNum) {
//   if (countNum[char] > 1) {
//     console.log(char);
//   }
// }

const fruitBasket = [
  "banana",
  "cherry",
  "orange",
  "apple",
  "cherry",
  "orange",
  "apple",
  "banana",
  "cherry",
  "orange",
  "fig",
];

// const dryFruits = ["Pistachios", "Apricot", "Dates", "Cashew", "Almonds", "Walnuts", "Raisins"]

// const mergedList = [...fruitBasket, ...dryFruits]

// const count2 = mergedList.reduce((tally, fruit) => {
//     if(!tally[fruit]){
//         tally[fruit] = 1
//     } else {
//         tally[fruit] += 1
//     }
//     return tally
// }, {})

// console.log(count2)

const str = "this is India";

const removeDupe = [...new Set(str.split(""))].join("");
console.log(removeDupe);

const removeChar = (string, char) => {
  return string
    .split(" ")
    .filter((i) => i !== char)
    .join(" ");
};

console.log(removeChar(str, "is"));

// const string = 'f25rt56gbhytredfc548695fgbh56';
// let currentSubstr = ''
// let largestSubstr = ''
// for(let i = 0; i < string.length; i++){
//     let char = string[i]
//     if(!isNaN(char)){
//         currentSubstr = ''
//     }else {
//         currentSubstr += char
//         if(currentSubstr.length > largestSubstr.length){
//             largestSubstr = currentSubstr
//         }
//     }
// }
// console.log(largestSubstr)

// const str1 = "abbcccdddd";
// const repeatingChar = []
// const charMap = {}
// for(let i =0; i < str1.length; i++){
//     const char = str1[i]
//     charMap[char] = (charMap[char] || 0) + 1
// }
// console.log(charMap)
// for(let char in charMap){
//     if (charMap[char] > 1){
//         repeatingChar.push(char)
//     }
// }
// console.log(repeatingChar)

const numbers2 = [100, 300, 500, 70];
let sum = 0;
for (let n of numbers2) {
  sum += n;
}
//console.log(sum);

var x = { names: 1 };
var out = (function () {
  delete x.names;
  return x.names;
})();

console.log(out);

const str1 = "abbcccdddd";
const charMap = {};
for (let i = 0; i < str1.length; i++) {
  const char = str1[i];
  charMap[char] = (charMap[char] || 0) + 1;
}
console.log(charMap);

const map = {};
const array1 = str1.split("");
array1.forEach((i) => (map[i] ? (map[i] = map[i] + 1) : (map[i] = 1)));
console.log(map);
