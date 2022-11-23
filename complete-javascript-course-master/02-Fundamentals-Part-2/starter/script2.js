////////// Arrays //////////
const friends = ["Me", "Myself", "Shanki"]; // literal syntax
console.log(friends);

const y = new Array(1986, 1988, 2014, 2015);
console.log(y);

console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "I";
console.log(friends);
// friends = ["me", "myself"];

const firstName = "Harshit";
const lastName = "Satya";
const harshit = [
  firstName,
  lastName,
  new Date().getFullYear() - 1986,
  "Full Stack Developer",
  friends,
];
console.log(harshit);
console.log(harshit.length);

// Exercise
const calcAge = function (birthYear) {
  return new Date().getFullYear() - birthYear;
};

const years = [1990, 1986, 1988, 2000, 1996];

// const ages = [];

// for (let i = 0; i < years.length; ++i) {
//   ages[i] = calcAge(years[i]);
// }

// console.log(ages);
// console.log(calcAge(years));
// console.log(years + 10);
// console.log(years - 10);

const age1 = calcAge(years[0]);
const age2 = calcAge(years[2]);
const age3 = calcAge(years[years.length - 1]);

console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[2]),
  calcAge(years[years.length - 1]),
];
console.log(ages);
