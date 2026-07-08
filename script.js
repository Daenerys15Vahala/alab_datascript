// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// // checking if the variables are divisible by 5
console.log(n1 % 5 === 0);
console.log(n2 % 5 === 0);
console.log(n3 % 5 === 0);
console.log(n4 % 5 === 0);

// comparison

let compare = n1 > n4;
console.log(compare);

// // substract, multiply, divide

let result = (n2 - n1) * n3 % n4;
console.log((n2 - n1) * n3 % n4);


//  changing this const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

const isUnder25 = n1 <= 25 && n2 <= 25 && n3<= 25 && n4 <=25;
console.log(isUnder25);


// part 2

const distance = 1500;
const budget = 175;
const fuelCost = 3;

// fuel 

const mpg55 = 30
const mpg60 = 28;
const mpg75 = 23;

// how many gallons

const gallons55 = distance / mpg55;
const gallons60 = distance / mpg60;
const gallons75 = distance / mpg75;


// fuel cost

const cost55 = gallons55 * fuelCost;
const cost60 = gallons60 * fuelCost;
const cost75 = gallons75 * fuelCost;

// budget

 const budgetEnough55 = budget >= cost55;
 const budgetEnough60 = budget >= cost60;
 const budgetEnough75 = budget >= cost75;

//  results

console.log('At 55 mph, you will need ${gallons55} gallons of fuel');
console.log('At 60 mph, you will need ${gallons60} gallons of fuel');
console.log('At 75 mph, you will need ${gallons75} gallons of fuel');


 console.log('At 55 mph, is the budget enough? ${budgetEnough55}');
 console.log('At 60 mph, is the budget enough? ${budgetEnough60}');
 console.log('At 70 mph, is the budget enough? ${budgetEnough70}');



