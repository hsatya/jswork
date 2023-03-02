// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const x = 22;
// if (x === 23) console.log(23);

// const calcAge = birthYear => new Date().getFullYear() - birthYear;

// PROBLEM 1
// We work for a company building a smart home thermometer. Our most recent task is this:
// "Given an array of temperatures of one day, calculate temperature amplitude.
//  Keep in mind that sometimes there might be sensor errors."

const temps1 = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// ~ What is tem amplitude?: Ans--> it is diff. of highest and lowest temp value
// ~ How to calcualte highest and lowest temp in an array?: Ans:-->
// ~ What does a sesnsor error look like? And what to do when one occurs?

// 2) Breaking up into sub-problems
// ~ How to ignore sensor errors?
// ~ Find max value in temperature array.
// ~ Find min value in temperature array.
// ~ Substract min val from max val and return the diff.

// const calcTempsAmplitude = temperatures => {
//   let max = temperatures[0];
//   let min = temperatures[0];
//   for (let i = 1; i < temperatures.length; ++i) {
//     if (typeof temperatures[i] !== 'number') continue;
//     if (max < temperatures[i]) max = temperatures[i];
//     if (min > temperatures[i]) min = temperatures[i];
//   }
//   return max - min;
// };

// const tempAmplitude = calcTempsAmplitude(temperatures);
// console.log(tempAmplitude);

// PROBLEM 2
// Function should now receive two array of temperatures

// 1) Understanding the problem
// ~ With 2 arrays, should we implement functionality twice?: Ans --> No, Just merge two arrays at the beginning.

// 2) Breaking up into sub-problems
// ~ How to merge two arrays? Ans --> concat method

const temps2 = [-3, 12, -8, -1, 'error', 9, 13, 15, 18, 9, 5];

const calcTempsAmplitude = (temps1, temps2) => {
  const temperatures = temps1.concat(temps2);
  let max = temperatures[0];
  let min = temperatures[0];
  for (let i = 1; i < temperatures.length; ++i) {
    if (typeof temperatures[i] !== 'number') continue;
    if (max < temperatures[i]) max = temperatures[i];
    if (min > temperatures[i]) min = temperatures[i];
  }
  return max - min;
};

const tempAmplitude = calcTempsAmplitude(temps1, temps2);
console.log(tempAmplitude);
