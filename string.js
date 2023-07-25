const str = "Today is a nice day!";

//console.log(str.length); // 20

//console.log(str.indexOf("day")); //2

//console.log(str.split(" ")); // ["Today", "is", "a", "nice", "day!"]
//console.log(str.split("")); // ["T", "o", "d", "a", "y", " ", "i", "s", " ", "a", " ", "n", "i", "c", "e", " ", "d", "a", "y", "!"]
//console.log(str.split("a")); // ["Tod", "y is ", " nice d", "y!"]

// const map = {};
// const array = str.split(" ");
// console.log(array);
// array.forEach((i) => (map[i] ? (map[i] = map[i] + 1) : (map[i] = 1)));
// console.log(map);

// const removeDups = [...new Set(str.split(""))].join("");
// console.log(removeDups);

// const removeChar = (string, char) => {
//   return string
//     .split("")
//     .filter((i) => i !== char)
//     .join("");
// };
// console.log(removeChar(str, "a")); //Tody is  nice dy!

// const removeWord = (string, char) => {
//   return string
//     .split(" ")
//     .filter((i) => i !== char)
//     .join(" ");
// };
// console.log(removeWord(str, "is")); //Today a nice day!

//console.log(str.includes("is")); //true

//console.log(str[19]); //!
//console.log(str.at(-20)); //T

//console.log(str + str); //Today is a nice day!Today is a nice day!

//console.log(str.concat(" Saurabh"));
//console.log(str.repeat(3)); // "Today is a nice day!Today is a nice day!Today is a nice day!"

//console.log(str.split("").reverse().join("")); //!yad ecin a si yadoT
//console.log(str.split(" ").reverse().join(" ")); //day! nice a is Today

// console.log(str.slice(6, 8)); // "is"
// console.log(str.slice(-6)); // "e day!"
// console.log(str.substring(6, 8)); // "is"
// console.log(str.substring(-6)); // "Today is a nice day!"

// console.log("A".charCodeAt()); //65
// console.log("Z".charCodeAt()); //90
// console.log("a".charCodeAt()); // 97
// console.log("z".charCodeAt()); // 122

//console.log(String.fromCharCode(97)); // "a"
//console.log(str.search(/[a-t]/g)); // 3
// console.log(str.match(/[a-c]/g));
// console.log([...str.matchAll(/[a-c]/g)]);

const arr = "abcdefghijklmnopqrstuvwxyz".split("");
console.log(
  "abcdefghijklmnopqrstuvwxyz".replace(/[a-z]/, function (letter) {
    return arr.indexOf(letter.toLowerCase()) + 1;
  })
);

console.log(
  "abcdefghijklmnopqrstuvwxyz".replace(/[a-z]/g, function (letter) {
    return arr.indexOf(letter.toLowerCase()) + 1;
  })
);
console.log(
  "aBCDEfghijklmnopqrstuvwxyz".replace(/[a-z]/g, function (letter) {
    return arr.indexOf(letter.toLowerCase()) + 1;
  })
);
console.log(
  "aBCDEfghijklmnopqrstuvwxyz".replace(/[a-z]/gi, function (letter) {
    return arr.indexOf(letter.toLowerCase()) + 1;
  })
);
console.log(
  "aBCDEfghijklmnopqrstuvwxyz".replace(/[a-f]/gi, function (letter) {
    return arr.indexOf(letter.toLowerCase());
  })
);

console.log(
  arr.reduce((result, item, index) => {
    result[item] = index;
    return result;
  }, {})
);

const originalString = "Saurabh@#44566Singh!@#$%^789123Parihar";

console.log(originalString.replace(/[^a-zA-Z]/g, "")); //SaurabhSinghParihar
console.log(originalString.replace(/[^a-z]/gi, "")); //SaurabhSinghParihar
console.log(originalString.replace(/[a-z]/g, "")); //S@#44566S!@#$%^P
console.log(originalString.replace(/[a-z]/gi, "")); //@#44566!@#$%^
console.log(originalString.replace(/[^a-zA-Z5-7#]/g, "")); //Saurabh#566Singh#7Parihar
