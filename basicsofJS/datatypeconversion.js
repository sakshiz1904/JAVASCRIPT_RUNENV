let score = "33abc"

console.log(typeof score);
console.log(typeof(score)); //we can pass it as a method also 
console.log("\n\n")

let valueInNumber = Number(score) //converting string into number and write
//write the Number 'N' in capital as it is related to classes
console.log(typeof valueInNumber);
console.log(valueInNumber);
console.log("\n");

let x_null = null
console.log(typeof x_null);
let new_x_null = Number(x_null);
console.log(typeof new_x_null);
console.log(new_x_null);
console.log("\n");


let y_undefined = undefined
console.log(typeof y_undefined);
let new_y_undefined = Number(y_undefined)
console.log(typeof new_y_undefined);
console.log(new_y_undefined);
console.log("\n");

/* Notes: The type of NaN is number 
"33" => NaN
"33abc" => NaN even though it is not a number but its type is number
true =>1; false =>0

1 => true; 0 => false
"" => false
"sakshi" => true;
*/

let someNumber = 33

let stringNumber = String(someNumber)
let string_score = String(score)
console.log(typeof(string_score));
console.log(stringNumber);
console.log(typeof stringNumber);