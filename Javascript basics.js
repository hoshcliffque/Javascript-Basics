// To print something on the screen
console.log("Hello World")
console.log("Hello World")

// Assigning the string "hello world" to a variable called greeting
let greeting = "Hello World"

// Print a variable
console.log(greeting)

let counter = 0 
console.log(counter)

// console.log(counter + 1) is same with counter++

counter++ 
counter++ 

console.log(counter)

// Logging out greeting 100 times (Loop)

// for (how many times) { what code to run}


for (let i = 1; i < 100  ; i++ ) {
  console.log(i, greeting)
}


// for ( what value to start; what conditions to be met  ; what is it doing ) {console.log(list out the number of times, greeting)}


// Using an array to group all these

let transaction1 = 20.00
let transaction2 = 30.00
let transaction3 = 40.00

let transactions = [ 10.00, 45.00 ]

// Adding stuff into "transactions"

transactions.push(20.00)
transactions.push(30.00)
transactions.push(40.00)

console.log(transactions)

// Find out how much this person spent/add the current transaction to the total

//starting point / first position in the array
let total = 0 

// for/ of loop
// for (let transaction(variable) of transactions (array) ) {add the current tx to the total}

for (let transaction of transactions) {
  total = total + transaction
}

console.log(total)

// subtotal

for (let transaction of transactions) {
  total = total + transaction
  console.log(total)
}

console.log(total)
