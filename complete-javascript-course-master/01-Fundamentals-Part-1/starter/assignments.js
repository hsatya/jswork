// LECTURE: Values and Variables
// let country = "India";
// let continent = "Asia";
// let population = 1_393_409_038;
// console.log(country);
// console.log(continent);
// console.log(population);

/* ------------------------------------------------------------------------- */
// function rangeOfNumbers(startNum, endNum) {
//   if (endNum === startNum) return [endNum];
//   const rangeArray = rangeOfNumbers(startNum, endNum - 1);
//   rangeArray.push(endNum);
//   return rangeArray;
// }
// console.log(rangeOfNumbers(6, 9));

/* ------------------------------------------------------------------------- */
// LECTURE: Data Types
// let country = "India";
// let continent = "Asia";
// let population = 1_393_409_038;
// let isIsland = false;
// console.log(isIsland);
// console.log(country);
// console.log(continent);
// console.log(population);

/* ------------------------------------------------------------------------- */
// LECTURE: let, const and var
// const country = "India";
// const continent = "Asia";
// let population = 1_393_409_038;
// const isIsland = false;
// const language = "Nimari";

/* ------------------------------------------------------------------------- */
// LECTURE: Basic Operators
// const country = "India";
// const continent = "Asia";
// let population = 1_393_409_038;
// const isIsland = false;
// const language = "Hindi";
// let halfPopulation = population / 2;
// population++;
// console.log(population, halfPopulation);
// let finPopulation = 6000000;
// console.log(
//   "Population of my country is greater than Finlands Population:",
//   population > finPopulation
// );
// console.log(
//   "Population of my country is greater than average Population:",
//   population > 33000000
// );
// console.log(
//   country +
//     " is in " +
//     continent +
//     ", its " +
//     population * 0.6 +
//     " population speak language " +
//     language +
//     "."
// );
/* ------------------------------------------------------------------------- */
// LECTURE: Strings and Template Literals
// const country = "India";
// const continent = "Asia";
// let population = 1_393_409_038;
// const isIsland = false;
// const language = "Hindi";
// let halfPopulation = population / 2;
// population++;
// console.log(population, halfPopulation);
// let finPopulation = 6000000;
// console.log(
//   "Population of my country is greater than Finlands Population:",
//   population > finPopulation
// );
// console.log(
//   "Population of my country is greater than average Population:",
//   population > 33000000
// );
// console.log(
//   country +
//     " is in " +
//     continent +
//     ", it's " +
//     population * 0.6 +
//     " population speaks language " +
//     language +
//     "."
// );
// console.log(
//   `${country} is in ${continent}, it's ${
//     population * 0.6
//   } population speaks language ${language}`
// );
/* ------------------------------------------------------------------------- */
// LECTURE: Taking Decisions: if / else Statements
// const country = "India";
// const continent = "Asia";
// let population = 1000;
// const isIsland = false;
// const language = "Hindi";
// let halfPopulation = population / 2;
// if (population > 33) {
//   console.log(`${country}'s poppulation is above average`);
// } else {
//   console.log(
//     `${country}'s poppulation is ${33 - population} million below average`
//   );
// }
/* ------------------------------------------------------------------------- */
// LECTURE: Type Conversion and Coercion
// console.log("9" - "5"); // 4
// console.log("19" - "13" + "17"); // "617"
// console.log("19" - "13" + 17); // 23
// console.log("123" < 57); // false
// console.log(5 + 6 + "4" + 9 - 4 - 2); // 1143
/* ------------------------------------------------------------------------- */
// LECTURE: Equality Operators: == vs. ===
// const numNeighbours = Number(
//   prompt("How many neighbour countries does your country have?")
// );
// if (numNeighbours === 1) {
//   console.log("Only 1 border!");
// } else if (numNeighbours > 1) {
//   console.log("More than 1 border.");
// } else {
//   console.log("No border.");
// }
/*
  == does lose checking it does not check the data type
  input that comes from prompt comes as string, so we need to change it to number 
*/
/* ------------------------------------------------------------------------- */
// LECTURE: Logical Operators
// const country = "India";
// const population = 50; // in millions
// const isIsland = false;
// const language = "Hindi";

// if (language === "English" && population < 50 && !isIsland) {
//   console.log(`You should live in ${country}:)`);
// } else {
//   console.log(`${country} does not meet your criteria:(`);
// }
/* ------------------------------------------------------------------------- */
// LECTURE: The switch Statement
// const language = "Maxican";
// switch (language) {
//   case "Chinese":
//   case "Mandarin":
//     console.log("Most number of native speakers.");
//     break;
//   case "Spanish":
//     console.log("2nd place in number of native speakers.");
//     break;
//   case "English":
//     console.log("3rd place in number of native speakers.");
//     break;
//   case "Hindi":
//     console.log("4th most spoken language.");
//     break;
//   case "Arabic":
//     console.log("5th most spoken language.");
//     break;
//   default:
//     console.log("Great language too:D");
// }
/* ------------------------------------------------------------------------- */
// LECTURE: The Conditional (Ternary) Operator
// const country = "Equador";
// const population = 20;

// population > 33
//   ? console.log(`${country}'s population is above average.`)
//   : console.log(`${country}'s population is below average.`);
/* ------------------------------------------------------------------------- */
