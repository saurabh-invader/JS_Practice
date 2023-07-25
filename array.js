// let colors = ["green", "yellow", "blue"];

// console.log(colors.toString());
// console.log(colors[1]);
// console.log(colors.join(" - "));

let firstNumbers = [1, 2, 3];
let secondNumbers = [4, 5, 6];
//let merged = firstNumbers.concat(secondNumbers);
let merged = [...firstNumbers, ...secondNumbers, ...firstNumbers];
//console.log(merged); // [1, 2, 3, 4, 5, 6]
let obj = { ...firstNumbers, ...secondNumbers };
//console.log(obj);

const obj1 = { foo: "bar", x: 42 };
const obj2 = { foo: "baz", y: 13 };
const clonedObj = { ...obj1 }; // { foo: "bar", x: 42 }
const mergedObj = { ...obj1, ...obj2 }; // { foo: "baz", x: 42, y: 13 }
//console.log(mergedObj);

let browsers = ["chrome", "firefox", "edge"];
browsers.unshift("safari");
browsers.unshift(browsers[browsers.length - 1]);
browsers.pop(browsers[browsers.length - 1]);
//console.log(browsers); //  ["safari", "chrome", "firefox", "edge"]

let colors = ["green", "yellow", "blue", "purple"];
let newColors = colors.splice(1, 2);
// console.log(colors); // ["purple"]
// console.log(newColors); // deletes ["green", "yellow", "blue"]

//let schedule = ["I", "have", "a", "meeting", "tomorrow"]; // removes 4 first elements and replace them with another
//schedule.splice(0, 4, "we", "are", "going", "to", "swim");
//console.log(schedule); // ["we", "are", "going", "to", "swim", "tomorrow"]

// let schedule = ["I", "have", "a", "meeting", "with"]; // adds 3 new elements to the array
// schedule.splice(3, 0, "some", "clients", "tomorrow");
// console.log(schedule); // ["I", "have", "a", "meeting", "with", "some", "clients", "tomorrow"]

let numbers = [1, 2, 3, 4];
let newNumbers = numbers.slice(0, 3); // returns [1, 2, 3]
//console.log(numbers); // returns the original array [ 1, 2, 3, 4 ]
//console.log(newNumbers); // [ 1, 2, 3]

let message = "congratulations";
const abbrv = message.slice(0, 7) + "s!";
//console.log(abbrv); // returns "congrats!"

let firstName = "Bolaji";
// return the string as an array
//console.log(firstName.split()); // ["Bolaji"]
//console.log(firstName.split("")); // [ 'B', 'o', 'l', 'a', 'j', 'i' ]
//console.log(firstName.split("").reverse()); // [ 'i', 'j', 'a', 'l', 'o', 'B' ]
//console.log(firstName.split("").reverse().join("")); // ijaloB

let firstName1 = "hello, my name is bolaji, I am a dev.";
// console.log(firstName1.split(",", 2)); // ["hello", " my name is bolaji"]
// console.log(firstName1.split(",")); // [ 'hello', ' my name is bolaji', ' I am a dev.' ]
// console.log(firstName1.split(" ", 3)); // [ 'hello,', 'my', 'name' ]
//console.log(firstName1.split("").reverse().join("")); //.ved a ma I ,ijalob si eman ym ,olleh
//console.log(firstName1.split(" ").reverse().join(" ")); //dev. a am I bolaji, is name my hello,

const countryCode = ["+234", "+144", "+233", "+234"];
const nigerian = countryCode.filter((code) => code === "+234");
//console.log(nigerian); // ["+234", "+234"]

const userNames = ["tina", "danny", "mark", "bolaji"];
const display = userNames.map((item) => item + "-" + item);
//console.log(display);

const numbers1 = [10, 3, 4, 6];
const dollars = numbers1.map((num) => "$" + 2 * num);
//const dollars1 = numbers1.reverse();
//console.log(dollars);

const numbers2 = [100, 300, 500, 70];
let sum = 0;
for (let n of numbers2) {
  sum += n;
}
//console.log(sum);

const sum1 = numbers2.reduce((acc, curr) => acc + curr, 10);
//console.log(sum1);

const colors1 = ["green", "yellow", "blue"];
colors1.forEach((item, index) => console.log(index + "1", item));

const numbers3 = [1, -1, 2, 3];
let allPositive = numbers3.every((value) => {
  return value >= 0;
});
//console.log(allPositive); // would return false

const euros = [29.76, 41.85, 46.5, 51.5];
const average = euros.reduce((total, amount, index, array) => {
  total += amount;
  if (index === array.length - 1) {
    return total / array.length;
  } else {
    return total;
  }
});
//console.log(average);

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
const count = fruitBasket.reduce((tally, fruit) => {
  tally[fruit] = (tally[fruit] || 0) + 1;
  return tally;
}, {});

const count1 = fruitBasket.reduce((tally, fruit) => {
  tally[fruit] = 1;
  return tally;
}, {});

const count2 = fruitBasket.reduce((tally, fruit) => {
  if (!tally[fruit]) {
    tally[fruit] = 1;
  } else {
    tally[fruit] = tally[fruit] + 1;
  }
  return tally;
}, {});
// console.log(count); // { banana: 2, cherry: 3, orange: 3, apple: 2, fig: 1 }
// console.log(count1); // { banana: 1, cherry: 1, orange: 1, apple: 1, fig: 1 }
// console.log(count2); // { banana: 2, cherry: 3, orange: 3, apple: 2, fig: 1 }

var array = [3, 6, 2, 56, 32, 5, 89, 32];
var largest = 0;

for (i = 0; i <= array.length; i++) {
  if (array[i] > largest) {
    var largest = array[i];
  }
}
//console.log(largest);

let smallest = array[0];
for (i = 0; i <= array.length; i++) {
  if (array[i] < smallest) {
    smallest = array[i];
  }
}
//console.log(smallest);

let sort1 = array.sort((a, b) => a - b);
//console.log(sort1);
let largest1 = array.sort((a, b) => a - b)[array.length - 1];
//console.log(largest1);

let sort2 = array.sort((a, b) => a - b).reverse();
//console.log(sort2);
let largest2 = array.sort((a, b) => a - b).reverse()[0];
//console.log(largest2);

const myHonda = {
  color: "red",
  wheels: 4,
  engine: { cylinders: 4, size: 2.2 },
};
const myCar = [myHonda, 2, "cherry condition", "purchased 1997"];
const newCar = myCar.slice(0, 2);

// console.log("myCar =", myCar);
// console.log("newCar =", newCar);
// console.log("myCar[0].color =", myCar[0].color);
// console.log("newCar[0].color =", newCar[0].color);

// myHonda.color = "purple";
// console.log("The new color of my Honda is", myHonda.color);

// console.log("myCar[0].color =", myCar[0].color);
// console.log("newCar[0].color =", newCar[0].color);

const array11 = ["a", "b", "c"];
const arrayEntries = array11.entries();

console.log(arrayEntries);

for (element of array11.entries()) {
  console.log(element);
}

// [0, 'a']
// [1, 'b']
// [2, 'c']
