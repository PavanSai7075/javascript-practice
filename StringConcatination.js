const firstname="Pavan";
const lastname="Sai";
const concatUsingPlusOperator = 'My Name is '+ firstname + " " + lastname; 
console.log(concatUsingPlusOperator); // Output: Pavan Sai

const concatUsingBackTick = `My Name is ${firstname} ${lastname}`;// Template literals (backticks) allow for easier string concatenation and embedding expressions.
console.log(concatUsingBackTick); // Output: My Name is Pavan Sai

console.log("String +String","Pavan"+"Sai"+"Koyalkar"); // Output: Pavan Sai Koyalkar
console.log("Number + Number", 4 + 5); // Output: 9 
console.log("String + Number ","Pavan"+ 256.001 ); // Output: Pavan 256
console.log("String + Boolean ","Pavan"+ true); // Output: Pavan true
console.log("String + null ","Pavan"+ null); // Output: Pavan null
console.log("String + undefined ","Pavan"+ undefined); // Output: Pavan undefined
