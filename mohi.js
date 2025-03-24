// const a = 58;
// const b = (a) => {
//     return a;
// };

// for (let i = 2; i < 6; i++) {
//     console.log(i);
// }

// const c = [2, 5, 9, 8];
// console.log(c.flatMap(x => [x])); // Provides a valid callback for flatMap

// console.log(b(a)); // Example of calling the `b` function


// const arr=[65,20,23,90,45];

// for(let arr= 0;arr < 9; arr++){
//     console.log(arr);
// if(arr==2){
// console.log("Greater");  
// }else{
// console.log("Smaller");
        
// }
// }
// console.log(arr);


// const getData = async () => {
//     let y = await "Hello World!";
//     console.log(y);
    
// }
// console.log(1);
// getData();
// console.log(2);

// const foo = {
//     bar: 0
// }
// const valueBar = foo.bar ?? 42;
// const valueBaz = foo.baz ?? 42;

// // Value Of Bar:0
// console.log("Value Of Bar: ", valueBar);

// // Value Of Bar:42
// console.log("Value Of Baz: ", valueBaz);


// let geek, result; 
// geek = { get foo() { return 17; } }; 
// d = Object.getOwnPropertyDescriptor(geek, 'foo'); 
// console.log(d) 

// geek = { bar: 42 }; 
// d = Object.getOwnPropertyDescriptor(geek, 'bar'); 
// console.log(d) 

// geek = { [Symbol.for('baz')]: 73 } 
// d = Object.getOwnPropertyDescriptor(geek, Symbol.for('baz')); 
// console.log(d) 

// geek = {}; 
// Object.defineProperty(geek, 'qux', { 
// 	value: 8675309, 
// 	writable: false, 
// 	enumerable: false
// }); 
// d = Object.getOwnPropertyDescriptor(geek, 'qux'); 
// console.log(d)


// let arr = [
//     { name: 'Rahul', age: 28 },  
//     { name: 'Jatin', age: 25 },   
//     { name: 'Vikas', age: 32 },  
//     { name: 'Rohit', age: 35 }
// ];
// console.log(arr.toSorted());

// // Custom comparison function for sorting by age
// let sortedByAge = arr.toSorted((a,b )=> {a.age - b.age});
// console.log(sortedByAge);

// // // Custom comparison function for sorting objects by name
// let sortedByName = arr.toSorted((a, b) => a.name.localeCompare(b.name));
// console.log(sortedByName);


// try {
//     let res = 10 / 0;
//     if(! isFinite(res)){
//     throw new error("Cannot Divide By Zero");
//     }
//     console.log(res);   
// } catch (error) {
//     console.log("Error Occured:",error.message);
// }finally{
// console.log("Execution Completed");
// }

// function check(age){
//     if(age < 18){
//         throw new Error("Age Must Be 18 Or Above");
//     }
//     console.log("Access Granted");
// }
// try {
//   check(17);  
// } catch (error) {
//     console.error(error.message)
//     // Age Must Be 18 Or Above
// }


// class Car {
//     constructor(make,model,year) {
//         this.make  = make,
//         this.model = model,
//         this.year  = year
//     }
//     di(){
//         console.log(`${this.year} ${this.make} ${this.model}`);
//     }
// }
// class ElectricCar extends Car {
//     constructor(make,model,year,batteryLife){
//     super(make,model,year);
//     this.batteryLife = batteryLife;
//     }
//     d() {
//         console.log(`Battery Life : ${this.batteryLife} Hours`);        
//     }
// }
// let tesla = new ElectricCar("Tesla" , "Model S" , 2025 , 24);
// tesla.di();
// tesla.d();


// const students = [
//     {name:"Sanidhya", Age:19},
//     {name:"Mohi",    Age:30},
//     {name:"Rajat",   Age:14},
//     {name:"Yash",    Age:20},
// ]

// // Comapre Function

// students.sort((first,second)=> (first.Age - second.Age));
// console.log(students);


// function process(data,callback){
//     console.log("Processing User Data:",data);
//     callback();   
// }
// function fetch(callback){
//     const user = { id: 1, name: "Sanidhya" };
//     callback(user);
// }
// fetch((data)=>{
//     process(data, ()=>{
//         console.log("User Data Proceed Successfully.");  
//     });
// })

// function fetch() {
//     const user = {id: 1, name: "Sanidhya"};

//     return new Promise((resolve,reject)=>{
//         if(user) {
//             resolve(user);
//         }else{
//             reject("Error Fetching User Data");
//         }
//     });
// }

// // Using The Promise

// fetch()
// .then((data)=>{
//     console.log("Processing User Data:",data);
//     console.log("User Data Processed Suceesfully.");    
// })
// .catch((error)=>{
//     console.error("Error:",error);
// })

// const a = 82;
// let a1=()=>{
// for(b = 8;b<13;b++){
//     console.log(b);
//     // return a;  
// }
// }
// a1()


// function Today(num){
//     return num * 2;
// }

// for(let b=6;b<9;b++){
// console.log(b);
// let a = Today(45);
// console.log(a);
// return a;
// }

// let promise = new Promise(function (resolve, reject){
//     setTimeout(function (){
//         resolve("Promise Resolved")}, 4000);
// });

// async function asyncFunc() {
// let result = await promise;
// console.log(result);
// console.log("Hello");   
// }

// asyncFunc();

// program to check if a number is prime or not

// take input from the user
// const number = parseInt(("Enter a positive number: "));
// let isPrime = true;

// // check if number is equal to 1
// if (number === 1) {
//     console.log("1 is neither prime nor composite number.");
// }

// // check if number is greater than 1
// else if (number > 1) {

//     // looping through 2 to number/2
//     for (let i = 2; i <= number/2; i++) {
//         if (number % i == 0) {
//             isPrime = false;
//             break;
//         }
//     }

//     if (isPrime) {
//         console.log(`${number} is a prime number`);
//     } else {
//         console.log(`${number} is a not prime number`);
//     }
// }

// // check if number is less than 1
// else {
//     console.log("The number is not a prime number.");
// }


// let promise = new Promise(function (resolve,reject){
// setTimeout(function (){
// resolve('Promise Resolved')},4000);
// });

// async function asyncFunc() {
// try {
// let result = await promise;
// console.log(result);
// } catch (error) {
// console.log(error);
// }
// }
// asyncFunc();

// class HttpError extends Error {
//     constructor(response) {
//       super(`${response.status} for ${response.url}`);
//       this.name = 'HttpError';
//       this.response = response;
//     }
//   }
//   async function loadJson(url) {
//     let response = await fetch(url);
//     if (response.status == 200) {
//       return response.json();
//     } else {
//       throw new HttpError(response);
//     }
//   }
//   // Ask for a user name until github returns a valid user
//   async function demoGithubUser() {
//     let user;
//     while(true) {
//       let name = ("Enter a name?", "iliakan");
//       console.log(name);
      
//       try {
//         user = await loadJson(`https://api.github.com/users/${name}`);
//         break; // no error, exit loop
//       } catch(err) {
//         if (err instanceof HttpError && err.response.status == 404) {
//           // loop continues after the alert
//           alert("No such user, please reenter.");
//         } else {
//           // unknown error, rethrow
//           throw err;
//         }
//       }
//     }
// alert(`Full name: ${user.name}.`);
// return user;
// }
// console.log(demoGithubUser());

// function resolveAfter4Seconds(){
// return new Promise((resolve)=>{
// setTimeout(()=>{
// resolve("Resolved");
// },4000)
// });
// }
// async function asyncCall() {
// console.log("Calling");
// const result = await resolveAfter4Seconds();
// console.log(result);
// // Expected Output:"Resolved"
// }
// asyncCall();

// function resolveAfter5Seconds(){
// return new Promise((resolve)=>{
// setTimeout(()=>{
// resolve("Resolved");
// },5000)
// });
// }
// async function Sani() {
// console.log("Calling");
// console.log("Subsituted");
// const result = await resolveAfter5Seconds();
// console.log(result);
// }
// Sani();

// function resolveAfter8Seconds(){
// return new Promise((resolve)=>{
// setTimeout(()=>{
// resolve("Resolved");
// },8000)
// });
// }
// async function Yash() {
// console.log("Calling");
// console.log("Good");
// const result = await resolveAfter8Seconds();
// console.log(result);
// }
// Yash();

// async function* myGenerator(step) {
// await new Promise((resolve)=>setTimeout(resolve, 10));
// yield 0;
// yield step;
// yield step * 2;
// }
// const gen = myGenerator(2);
// gen
// .next()
// .then((res)=>{
// console.log(res);
// return gen.next();
// })
// .then((res)=>{
// console.log(res);
// return gen.next();
// })
// .then((res)=>{
// console.log(res);
// return gen.next();
// })
// .then((res)=>{
// console.log(res);
// return gen.next();
// });

// const fs = require("fs").promises;

// async function* readFiles(directory) {
//   const files = await fs.readdir(directory); // Get the list of files in the directory
//   for (const file of files) {
//     const filePath = `${directory}/${file}`; // Include the directory path in the file path
//     const stats = await fs.stat(filePath); // Get file stats
//     if (stats.isFile()) {
//       yield {
//         name: file,
//         content: await fs.readFile(filePath, "utf8"), // Read file content
//       };
//     }
//   }
// }

// async function main() {
//   const files = readFiles("."); // Call the generator function

//   console.log((await files.next()).value); // Output the first file's details
//   console.log((await files.next()).value); // Output the second file's details
// }

// main().catch((err) => console.error(err)); // Handle any errors

// const sani = function () {
// return new Promise((resolve) => {
// setTimeout(() => {
// resolve("Resolved");
// console.log("Calling");
// }, 5000);
// });
// };
// async function yash() {
// const result = await sani();
// console.log(result);
// }
// yash();


// const ravi = function() {
// return new Promise ((resolve)=>{
// setTimeout(()=>{
// resolve("Resolved")
// console.log("Calling");   
// },6000);
// });
// };
// async function yash() {
// const result = await ravi();
// console.log(result);
// for(let a = 2; a < 6; a++){
// console.log(a);
// }
// }
// yash();

// function resolveAfter2Seconds(x){
// return new Promise((resolve)=>{
// setTimeout(()=>{
// resolve(x);
// },2000);
// });
// }
// const add = async function(x){
// const a = await resolveAfter2Seconds(20);
// const b = await resolveAfter2Seconds(30);
// return x + a + b;
// };
// add(10).then((v)=>{
// console.log(v);
// });
// (async function (x){
// const p1 = resolveAfter2Seconds(20);
// const p2 = resolveAfter2Seconds(30);
// return x + (await p1) + (await p2);
// })(10).then((v)=>{
// console.log(v);
// })

// function* makeIterableOfPromises() {
// for (let i = 0; i < 5; i++) {
// yield new Promise((resolve) => setTimeout(resolve, 100));
// }
// }
// (async () => {
//  console.time("Array.fromAsync() time");
// await Array.fromAsync(makeIterableOfPromises());
// console.timeEnd("Array.fromAsync() time");
// // Array.fromAsync() time: 503.610ms
// console.time("Promise.all() time");
// await Promise.all([...makeIterableOfPromises()]);
// console.timeEnd("Promise.all() time");
// // Promise.all() time: 101.728ms
// })();

// async function* generatorWithRejectedPromise() {
// try {
// yield 0;
// yield Promise.reject(3); // This will still be rejected
// } finally {
// console.log("Called Finally");
// }
// }
  
// (async () => {
// try {
// await Array.fromAsync(generatorWithRejectedPromise());
// } catch (e) {
// console.log("Caught", e);
// }
// })();


// async function* candyPicker() {
//     yield "Chocolate"; // Your friend hands you a chocolate
//     yield "Gummy Bear"; // Your friend hands you a gummy bear
//     yield "Lollipop"; // Your friend hands you a lollipop
//     }
//     (async () => {
//     const candies = await Array.fromAsync(candyPicker()); // Collect all candies into an array
//     console.log("Collected candies:", candies);
// })();
   
// async function* candyPicker() {
// yield "Chocolate";
// yield "Gummy Bear";
// yield "Lollipop";
// }      
// (async () => {
// const candies = [];
// for await (const candy of candyPicker()) {
// candies.push(candy);
// }
// console.log("Collected candies:", candies);
// })();
      
// const base = 5;
// const power = 3;
// console.log(base ** power); // Output: 125 (5^3)

// const sani = function () {
// return new Promise((resolve) => {
// setTimeout(() => {
// resolve("Resolved");
// console.log("Calling");
// }, 5000);
// });
// };
// async function yash() {
// const result = await sani();
// console.log(result);
// }
// yash();

// const a = function(){
// return new Promise((resolve)=>{
// setTimeout(()=>{
// resolve("Resolved");
// },5000);
// });
// };
// async function sani() {
// const result = await a();
// console.log(result);
// }
// sani();

// function range(start, end) {
// // If start is greater than end, swap them
// if (start > end) {
// [start, end] = [end, start];
// }
// const result = [];
// // Loop from start to end (exclusive) and add each number to the result array
// for (let i = start; i < end; i++) {
// result.push(i);
// }
// return result;
// }
// range();

// function* anotherGenerator(i) {
// yield i + 1;
// yield i + 2;
// yield i + 3;
// }
  
// function* generator(i) {
// yield i;
// yield* anotherGenerator(i); // Pass 'i' as an argument here
// yield i + 10;
// }
  
// const gen = generator(10);
// console.log(gen.next().value); // 10
// console.log(gen.next().value); // 11
// console.log(gen.next().value); // 12
// console.log(gen.next().value); // 13
// console.log(gen.next().value); // 20

// function* powers(n) {
// for(let current = n; ; current *= n) {
// yield current;
// }
// }
// for(const power of powers(2)){
// if(power > 32){
// break;
// }
// console.log(power);
// }

// function* yieldAndReturn() {
// yield "Y";
// return "R";
// yield "unreacheable";
// }
// const gen = yieldAndReturn();
// console.log(gen.next()); // { value: "Y", done: false }
// console.log(gen.next()); // { value: "R", done: true }
// console.log(gen.next()); // { value: undefined, done: true }

// const someObj = {
// *generator() {
// yield "a";
// yield "b";
// },
// };
// const gen = someObj.generator();
// console.log(gen.next()); // { value: 'a', done: false }
// console.log(gen.next()); // { value: 'b', done: false }
// console.log(gen.next()); // { value: undefined, done: true }

//const a = function(){
// return new Promise((resolve)=>{
// setTimeout(()=>{
// resolve("Resolved");
// },5000);
// });
// };
// async function sani() {
// const result = await a();
// console.log(result);
// }
// sani();

// const a = function(){
// return new Promise((resolve)=>{
// setTimeout(()=>{
// resolve("Resolved");
// },5000);
// });
// };
// async function sani() {
// const result = await a();
// console.log(result);
// console.log("Calling");
// }
// sani();

// const arr = [1, 2, 3, 5, 4];   // Global array
// function updateAndFindMax(newValue,index){
// if(index >=0 && index < arr.length){
// arr[index] = newValue;
// }else{
// arr.push(newValue);
// }
// }
// const maxValue = Math.max(...arr); 
// console.log(`Updated Array: ${arr}`);
// console.log(`Max Value:${maxValue}`);
// updateAndFindMax(10,2);
// updateAndFindMax(15,5);
// updateAndFindMax(6,3);

// for(let i = 0; i < 10; i++){
// if(i === 5) {
// break;
// }
// console.log(i);
// }
// console.log("Loop Ended");

// const items = Array.from({length:100},(_,i)=> i+1);
// const tests = [
//     { pass: (item) => item % 2 === 0 },
//     { pass: (item) => item % 3 === 0 },
//     { pass: (item) => item % 5 === 0 },
//   ];
//   let itemsPassed = 0;
  
//   for (const item of items) {
//     let passed = true;
//     for (const test of tests) {
//       if (!test.pass(item)) {
//         passed = false;
//         break;
//       }
//     }
//     if (passed) {
//       itemsPassed++;
//     }
//   }

// const a = function(){
// return new Promise((resolve)=>{
// setTimeout(()=>{
// resolve("Resolved");
// },5000);
// });
// };
// async function sani() {
// const result = await a();
// console.log(result);
// console.log("Calling");
// }
// sani();

// function resolveAfter2Seconds() {
//   console.log("starting slow promise");
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("slow");
//       console.log("slow promise is done");
//     }, 2000);
//   });
// }

// function resolveAfter1Second() {
//   console.log("starting fast promise");
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("fast");
//       console.log("fast promise is done");
//     }, 1000);
//   });
// }

// async function sequentialStart() {
//   console.log("== sequentialStart starts ==");

//   // 1. Start a timer, log after it's done
//   const slow = resolveAfter2Seconds();
//   console.log(await slow);

//   // 2. Start the next timer after waiting for the previous one
//   const fast = resolveAfter1Second();
//   console.log(await fast);

//   console.log("== sequentialStart done ==");
// }

// async function sequentialWait() {
//   console.log("== sequentialWait starts ==");

//   // 1. Start two timers without waiting for each other
//   const slow = resolveAfter2Seconds();
//   const fast = resolveAfter1Second();

//   // 2. Wait for the slow timer to complete, and then log the result
//   console.log(await slow);
//   // 3. Wait for the fast timer to complete, and then log the result
//   console.log(await fast);

//   console.log("== sequentialWait done ==");
// }

// async function concurrent1() {
//   console.log("== concurrent1 starts ==");

//   // 1. Start two timers concurrently and wait for both to complete
//   const results = await Promise.all([
//     resolveAfter2Seconds(),
//     resolveAfter1Second(),
//   ]);
//   // 2. Log the results together
//   console.log(results[0]);
//   console.log(results[1]);

//   console.log("== concurrent1 done ==");
// }

// async function concurrent2() {
//   console.log("== concurrent2 starts ==");

//   // 1. Start two timers concurrently, log immediately after each one is done
//   await Promise.all([
//     (async () => console.log(await resolveAfter2Seconds()))(),
//     (async () => console.log(await resolveAfter1Second()))(),
//   ]);
//   console.log("== concurrent2 done ==");
// }

// sequentialStart(); // after 2 seconds, logs "slow", then after 1 more second, "fast"

// // wait above to finish
// setTimeout(sequentialWait, 4000); // after 2 seconds, logs "slow" and then "fast"

// // wait again
// setTimeout(concurrent1, 7000); // same as sequentialWait

// // wait again
// setTimeout(concurrent2, 10000); // after 1 second, logs "fast", then after 1 more second, "slow"


// let str = "";
// loop1:for(let i = 0; i<5;i++){
// if(i === 1){
// continue loop1;
// }
// str = str + i;
// }
// console.log(str);

// const items = Array.from({length:100},(_,i)=> i+1);
// const tests = [
// {pass:(item)=> item % 2 === 0},
// {pass:(item)=> item % 3 === 0},
// {pass:(item)=> item % 5 === 0}
// ];
// let itemsPassed = 0;
// for(const item of items) {
// let passed = true;
// for(const test of tests){
// if(!test.pass(item)){
// passed = false;
// break;
// }
// }
// if(passed){
// itemsPassed++;
// }
// }
// console.log("Number Of Items That Passed All Tests", itemsPassed);

// let i,j;
// loop1: for(i = 0; i < 3;i++){
// loop2: for(j = 0; j < 3;j++){
// if(i===1 && j===1){
// break loop1;
// }
// console.log(`i = ${i}, j= ${j}`);
// }
// }

// loop1:for(let i=0; i < 3;i++){
// loop2:for(let j=0; j < 3;j++){
// if(i===1 && j===1){
// continue loop1;
// }
// console.log(`i = ${i},j= ${j}`);
// }
// }


