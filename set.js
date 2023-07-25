const set = new Set("aabbccdefghi");

//console.log(set);
// console.log(set.size);
// console.log(set.has("b"));
// console.log(set.has("B"));
// console.log(set.has("m"));

// console.log(set.keys());
// console.log(set.values());
// console.log(set.entries());

// const set2 = new Set();
// set.forEach((item) => set2.add(item.toUpperCase()));
// console.log(set2);

/*** ISOGRAM ***/

// function isIsogram(str) {
//   if (!str) {
//     return false;
//   }

//   const set = new Set(str);
//   return set.size === str.length;
// }

// console.log(isIsogram("")); // false
// console.log(isIsogram("a")); // true
// console.log(isIsogram("misconjugatedly")); // true
// console.log(isIsogram("misconjugatledly")); // false

/*** PANGRAM ***/

// function isPangram(str) {
//   const len = str.length;
//   if (len < 26) {
//     return false;
//   }

//   const map = new Map();
//   for (let i = 0; i < len; i++) {
//     if (str[i].match(/[a-z]/i)) {
//       map.set(str[i].toLocaleLowerCase(), true);
//     }
//   }
//   return map.size === 26;
//   //return console.log(map);
// }

// //console.log(isPangram("Bawds jog, flick quartz, vex nymphs.")); // true
// console.log(isPangram("HelloDFRTGHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH")); // false
