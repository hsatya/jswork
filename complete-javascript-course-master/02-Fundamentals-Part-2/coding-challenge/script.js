// //// Coding Challenge - 1 ////
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
// gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so
// one average score per team).
// A team only wins if it has at least double the average score of the other team.
// Otherwise, no team wins!
// Your tasks:
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score of each team
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
// to the console, together with the victory points, according to the rule above.
// Example: "Koalas win (30 vs. 13)"
// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and
// Data 2
// 5. Ignore draws this time
// Test data:
// Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

// const calcAverage = (arr) => {
//   let sum = 0;
//   for (let i = 0; i < arr.length; ++i) {
//     sum += arr[i];
//   }
//   return sum / arr.length;
// };

// function checkWinner(avgDolhins, avgKoalas) {
//   if (avgDolhins >= avgKoalas * 2) {
//     console.log(`Dolphins wins (${avgDolhins} vs. ${avgKoalas})`);
//   } else if (avgKoalas >= avgDolhins * 2) {
//     console.log(`Koalas wins (${avgKoalas} vs. ${avgDolhins})`);
//   } else console.log("No one");
// }

// const avgDolhins = calcAverage([85, 54, 41]);
// const avgKoalas = calcAverage([23, 34, 27]);
// checkWinner(avgDolhins, avgKoalas);

// //// Coding Challenge - 2 ////
// Steven is still building his tip calculator, using the same rules as before: Tip 15% of
// the bill if the bill value is between 50 and 300, and if the value is different, the tip is
// 20%.
// Your tasks:
// 1. Write a function 'calcTip' that takes any bill value as an input and returns
// the corresponding tip, calculated based on the rules above (you can check out
// the code from first tip calculator challenge if you need to). Use the function
// type you like the most. Test the function using a bill value of 100
// 2. And now let's use arrays! So create an array 'bills' containing the test data
// below
// 3. Create an array 'tips' containing the tip value for each bill, calculated from
// the function you created before
// 4. Bonus: Create an array 'total' containing the total values, so the bill + tip
// Test data: 125, 555 and 44

// const bill = 430;
// const tip = bill > 50 && bill < 300 ? bill * 0.15 : bill * 0.2;
// console.log(
//   `The bill was ${bill}, the tip was ${tip}, and the total value is ${
//     bill + tip
//   }.`
// );

// function calcTip(bill) {
//   return bill > 50 && bill < 300 ? bill * 0.15 : bill * 0.2;
// }

// const bill = 100;
// const tip = calcTip(bill);
// console.log(
//   `The bill was ${bill}, the tip was ${tip}, and the total value is ${
//     bill + tip
//   }.`
// );

// const bills = [125, 555, 44];
// const tips = [];
// const totals = [];
// for (let i = 0; i < bills.length; ++i) {
//   tips.push(calcTip(bills[i]));
//   totals.push(bills[i] + tips[i]);
// }
// console.log(tips);
// console.log(totals);

// //// Coding Challenge - 3 ////
// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
// implement the calculations! Remember: BMI = mass / height ** 2 = mass
// / (height * height) (mass in kg and height in meter)
// Your tasks:
// 1. For each of them, create an object with properties for their full name, mass, and
// height (Mark Miller and John Smith)
// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same
// method on both objects). Store the BMI value to a property, and also return it
// from the method
// 3. Log to the console who has the higher BMI, together with the full name and the
// respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
// Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
// tall.
