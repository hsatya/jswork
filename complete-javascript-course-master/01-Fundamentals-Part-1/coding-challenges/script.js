let mark_weight = 95;
let mark_height = 1.88;
let mark_bmi = mark_weight / (mark_height * mark_height);

let john_weight = 85;
let john_height = 1.76;
let john_bmi = john_weight / (john_height * john_height);

const markHigherBMI = mark_bmi > john_bmi;
console.log(markHigherBMI);
