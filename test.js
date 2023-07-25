const characters = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    eye_color: "brown",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: "188",
    mass: "84",
    eye_color: "blue",
    gender: "male",
  },
];
//---every---

const allBlueEyes = characters.every(
  (character) => character.eye_color === "blue"
);
console.log(allBlueEyes);

const checkMass = characters.every((character) => character.mass > 150);
console.log(checkMass);

//---Reduce---

// const totalMass = characters.reduce((acc, cur) => acc + cur.mass, 0);
// console.log(totalMass);

// const eyeColor = characters.reduce((acc, cur) => {
//   const color = cur.eye_color;
//   if (acc[color]) {
//     acc[color]++;
//   } else {
//     acc[color] = 1;
//   }
//   return acc;
// }, {});
// console.log(eyeColor);

// const totalNameCharacters = characters.reduce(
//   (acc, cur) => acc + cur.name.length,
//   0
// );
// console.log(totalNameCharacters);

//---SORT---

// const byMass = characters.sort((a, b) => b.mass - a.mass)
// console.log(byMass)

// const byName = characters.sort((a, b) => {
//   if (a.name < b.name) return -1;
//   return 1;
// });
// console.log(byName);

// const byGender = characters.sort((a, b) => {
//   if (a.gender === "female") return -1;
//   return 1;
// });
// console.log(byGender);

// ---SOME---

// const oneMaleCharacters = characters.some(
//   (character) => character.gender === "male"
// );
// console.log(oneMaleCharacters);

// const oneTallerThan210 = characters.some((character) => character.height > 200);
// console.log(oneTallerThan210);

//---FILTERS---

// const moreThan100 = characters.filter((character) => character.mass > 100);
// console.log(moreThan100);

// const lessThan200 = characters.filter((character) => character.height < 200);
// console.log(lessThan200);

// const maleChar = characters.filter((character) => character.gender === "male");
// console.log(maleChar);

// const fmaleChar = characters.filter(
//   (character) => character.gender === "female"
// );
// console.log(fmaleChar);

//---MAP---

// const names = characters.map((character) => character.name);
// console.log(names);

// const miniRecord = characters.map((character) => ({
//   name: character.name,
//   height: character.height,
// }));
// console.log(miniRecord);

// const firstName = characters.map((character) => character.name.split(" ")[0]);
// console.log(firstName);

let obj = [
  { id: 6, name: "abc" },
  { id: 5, name: "xyz" },
  { id: 4, name: "iop" },
  { id: 2, name: "lmn" },
  { id: 3, name: "tru" },
];

let sortedObj = obj.sort((a, b) => a.id - b.id);
let names = sortedObj.map((item) => item.name);

console.log(names);

const array = ["Hi", "Hey", "Hello"];
const items = array.map((item) => console.log(item));

// Difference between let and var type of variables

function example() {
  if (true) {
    let x = 10;
  }
  console.log(x); // Output: ReferenceError: x is not defined
}
console.log(x); // Output: ReferenceError: x is not defined

function example() {
  if (true) {
    var x = 10;
  }
  console.log(x); // Output: 10
}
console.log(x); // Output: ReferenceError: x is not defined

function showNumber() {
  if (true) {
    var a = 20;
    let b = 30;
    const c = 40;
    console.log(a, b, c);
  }
  console.log(a, b, c);
}

showNumber();
console.log(a, b, c);

//Arrow functions

const add = (a, b) => {
  return a + b;
};
console.log(add(4, 5));

const addA = (a, b) => a + b;
console.log(addA(9, 5));

const addB = (a, b) => {
  console.log(a + b);
};
addB(9, 8);

//Callback function and their use

const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function (number) {
  console.log(number);
});

function greet() {
  console.log("Hello, world!");
}
setTimeout(greet, 2000);

const button = document.querySelector("button");
function handleClick() {
  console.log("Button clicked!");
}
button.addEventListener("click", handleClick);

const array = ["saurabh", "abc", "gaurav", "xyz"];

//array.forEach((name) => console.log(name))

const eachName = (arr, cb) => {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    cb(element);
  }
};
eachName(array, (name) => {
  console.log(name);
});

// a promise
let promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("Promise resolved");
  }, 4000);
});

// async function
async function asyncFunc() {
  // wait until the promise resolves
  let result = await promise;

  console.log(result);
  console.log("hello");
}

// calling the async function
asyncFunc();
