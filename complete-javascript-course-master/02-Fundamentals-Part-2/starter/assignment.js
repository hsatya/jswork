// LECTURE: Functions;
// function describeCountry(country, population, capitalCity) {
//   return `${country} has ${population} million people and it's capital city is ${capitalCity}.`;
// }
// let countryDescription = describeCountry("India", 1000, "New Delhi");
// console.log(countryDescription);
// countryDescription = describeCountry("USA", 335, " Washington, D.C.");
// console.log(countryDescription);
// countryDescription = describeCountry("Germany", 65, "Berlin");
// console.log(countryDescription);
/* ------------------------------------------------------------------------- */
// LECTURE: Function Declarations vs. Expressions
// function percentageOfWorld1(population) {
//   const worldPopulation = 7900;
//   return (population / worldPopulation) * 100;
// }

// let populationPercent = percentageOfWorld1(1441);
// console.log(`${populationPercent.toFixed(2)}% of world population.`);

// const percentageOfWorld2 = function (population) {
//   return (population / 7900) * 100;
// };

// populationPercent = percentageOfWorld2(1441);
// console.log(`${populationPercent.toFixed(2)}% of world population.`);
/* ------------------------------------------------------------------------- */
// LECTURE: Arrow Functions
// const percentageOfWorld3 = (population) => (population / 7900) * 100;
// const populationPercent = percentageOfWorld3(1441);
// console.log(`${populationPercent.toFixed(2)}% of world population.`);
/* ------------------------------------------------------------------------- */
// LECTURE: Functions Calling Other Functions
// function percentageOfWorld1(population) {
//   const worldPopulation = 7900;
//   return (population / worldPopulation) * 100;
// }

// const describePopulation = (country, population) =>
//   `${country} has ${population} million people, which is about ${percentageOfWorld1(
//     population
//   ).toFixed(1)}% of the world.`;

// console.log(describePopulation("China", 1441));
// console.log(describePopulation("India", 1100));
// console.log(describePopulation("USA", 162));
/* ------------------------------------------------------------------------- */
// LECTURE: Introduction to Arrays
// function percentageOfWorld1(population) {
//   const worldPopulation = 7900;
//   return (population / worldPopulation) * 100;
// }
// const populations = [1441, 1100, 162, 61];
// console.log(populations.length === 4);

// const percentages = [
//   percentageOfWorld1(populations[0]).toFixed(2),
//   percentageOfWorld1(populations[1]).toFixed(2),
//   percentageOfWorld1(populations[2]).toFixed(2),
//   percentageOfWorld1(populations[3]).toFixed(2),
// ];

// console.log(percentages);
/* ------------------------------------------------------------------------- */
// LECTURE: Basic Array Operations (Methods)
// const neighbours = [
//   "Poland",
//   "Czech Republic",
//   "Austria",
//   "Switzerland",
//   "Netherlands",
// ];
// console.log(neighbours);
// neighbours.push("Utopia");
// console.log(neighbours);
// neighbours.pop();
// console.log(neighbours);
// if (neighbours.includes("Germany"))
//   console.log("Probably not a central European country :D");
// if (neighbours.includes("Poland")) {
//   neighbours[neighbours.indexOf("Poland")] = "Republic of Poland";
// }
// console.log(neighbours);
/* ------------------------------------------------------------------------- */
// LECTURE: Introduction to Objects
