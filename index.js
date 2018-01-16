//LEVEL 0

var numberA = 10
let numberB = 099
const numberC = 0.02

console.log(numberA);
console.log(numberB);
console.log(numberC);

//LEVEL 1
console.log(numberA + numberB);
console.log(numberA - numberB);
console.log(numberA * numberB);
console.log(numberA / numberB);

//LEVEL 2
let sentenceA = "rumah"
console.log(numberA + sentenceA);

console.log(Boolean(numberB > numberA))
console.log(Boolean(numberA > numberB))

let numberD = -5
let numberE = 1000

console.log(numberD + numberE);
console.log(numberD - numberE);
console.log(numberD * numberE);
console.log(numberD / numberE);

//LEVEL 3
var numberF = [20, 30, 40];

console.log("join...", numberF.join("*"));
console.log("pop...", numberF.pop());
console.log("push", numberF.push(100));
console.log("after push...", numberF);
console.log(numberF);


var numberG = [10, 20, 30];
var text = "";

console.log("loop for...")
for (let i = 0; i < numberG.length; i++) {
  console.log(numberG[i]);
}

console.log("loop while...")
console.log(i);
console.log(numberG);
let i = 0
while (i < 3) {
  console.log(numberG[i]);
  i++
}