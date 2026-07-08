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

const mpg55 = 30
const mpg60 = 28;
const mpg75 = 23;

// how many gallons

const gallons55 = distance / mpg55;
const gallons60 = distance / mpg60;
const gallons75 = distance / mpg75;

console.log('At 55 mph, you will need ${gallons55} gallons of fuel');
console.log('At 60 mph, you will need $}galoons60} gallons of fuel');
console.log('At 70 mph, you will need ${gallons75} gallons of fuel');

const cost55 = gallons55 * fuelCost;
const cost60 = gallons60 * fuelCost;
const cost75 = gallons75 * fuelCost;

// budget

 const budgetEnough55 = budget >= cost55;
 const budgetEnough60 = budget >= cost60;
 const budgetEnough75 = budget >= cost75;

 console.log(`At 55 mph, is the budget enough? ${budgetEnough55}`);
 console.log('AT 60 moh, is the budget enough? ${budgetEnough60}');
 console.log('At 70 mph, is the budget enough? ${budgetEnough70}');




// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
// const isSum50 = (n1 + n2 + n3 + n4) == 50;

// // Check two: at least two odd numbers
// // Here, we use modulus to check if something is odd.
// // Since % 2 is 0 if even and 1 if odd, we can use
// // arithmetic to count the total number of odd numbers.
// const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// // Check three: no number larger than 25
// // This time, we use the OR operator to check
// // if ANY of the numbers is larger than 25.
// const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// // Check four: all unique numbers
// // This is long, and there are more efficient
// // ways of handling it with other data structures
// // that we will review later.
// const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
// const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// // Finally, log the results.
// console.log(isValid);

// // Here's another example of how this COULD be done,
// // but it SHOULD NOT be done this way. As programmers,
// // we break things into small, manageable pieces so that
// // they can be better understood, scaled, and maintained.
// const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
//   ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
//   !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
//   (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);

