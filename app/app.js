// alert("hello world");
// variable var let and const
// ES5 VAR
// ES6 let and const



// var a = 10;
// var b = 12;
// var a = 20;
// var c = a + b;

// console.log(c);

// let a = 10;
// let b = 13;
// a = 20;

// let c = a + b;
// console.log(c);


// const a = 10;
// const b = 14;
// const a = 10;
// const c = a + b;
// console.log(c)

// Data Types 
// 1. String, "content" 'content'
// 2. Number, example => 10 ,10.1
// 3. Boolean, true or false
// 4. undefined , not value
// 5. null , no value
// 6. object , {}
// 7. array , []


// let a = [];

// console.log(typeof a);


// Arithmetic Operator

//  + - * / % ** ++ --

//  Assignment Operator

//  = += -= *= /= %= **= 

// let a = 10;

// a += 12;
// console.log(a);

//  Logical Operator 
// And &&  OR || NOT !

// Relational Operator

//  ==  === data type != !== > < >= <=

// let a = 11;
// let b = 11;
// let c = a < b;

// console.log(c);

// let a = 10;

// if(a <= 0){
//     console.log("hello world");
// } else{
//     console.log("hello good by")
// }

// let inputNumber = prompt("Enter a Number");

// console.log(typeof inputNumber);

// let number = parseInt(inputNumber); 

// console.log(typeof number);
// 1.1, 11 int, 1.1 float

// switch(number){
//     case 1:
//         console.log("prompt number is one");
//         break;
//     case 2:
//         console.log("prompt number is two");
//         break;
//     case 3:
//         console.log("prompt number is three");
//         break;
//     case 4:
//         console.log("prompt number is four");
//         break;
//     default:
//         console.log("prompt number is not valid");
//         break;
// }


// let i;
// let promptNumber = prompt("Enter a number");
// // String
// let number = parseInt(promptNumber);

//  ${number}


// for(let i = 1;i <= 10; i++){

//     let result = number * i;


//     console.log(`${number} * ${i} = ${result}`);
// }

// let i = 1;
// while(i <= 10){
//     console.log("hello world");
//     i++;
// }


// let i = 1;

// do{
//     console.log("hello world");
//     i++;
// } while(i >= 10);

// for in (object)

// {} object 
//  [] array


// let obj = {
//     id : "1",
//     name : "Roshan Sardar",
//     city : "Rajbiraj",
//     age : 22
// }

// for(let a in  obj){
//     console.log(obj[a]);
    
// }

// Rest Operator
// ...

// let ftName = {
//     id : "1",
//     name : "Roshan Sardar",
//     age : 22,
//     city : "Rajbiraj",
//     Phone : 9816565156,
//     email : "sardarroshan449@gmail.com"
// }


// let {id,name,age,...main} = ftName;

// console.log(main);

// for of array

// let array = [1,2,3,4,5,6,7,8,9,10];

// console.log(array);

// for(let useOf of array){
//     console.log(useOf);
// }

// let resultNumber = [50,80,90,30,10];

// console.log(resultNumber[0]);

// let list = [10,30,50,70,35,57,88,91]

// list.forEach((element,sort) => {
//     console.log(element);
//     console.log(sort);
// })

// Function declaration

// function fn(name, lastName){
//     console.log(`hello world ${name}`);
//     console.log(`Second Name ${name}`);
// }
// let ftName = "Roshan Sardar";
// let secondName = "rajbiraj";
// fn(ftName, secondName);

// Function Expression

// const fn = function(){
//     console.log("hello world");
// }

// fn();

//  Function Arrow  =>

    // => example

    // const firstFunction = ()=>{
    //     console.log("hello world");
    // }


    // firstFunction();


//     const firstFunction = (villageName, ftName)=>{
//         console.log("First Function ");
//         console.log(villageName);
//         console.log(ftName);
//     }

// /**
//  * SecondFunction
//  * @description This function calls the firstFunction with villageName and ftName as arguments
//  * @param {void} No parameters are required
//  * @returns {void} No return value
//  */
// /*******  723d4d10-be69-48cf-8121-1f467e812014  *******/
//     const SecondFunction = (ftName, lastName)=>{
//         console.log("Second Function");
//         firstFunction(ftName, lastName);
//     }

//     let ftName = "Roshan";
//     let lastName = "sardar"

// SecondFunction(ftName, lastName);


// scope

// let name = "Roshan Sardar";


// function ftName(){} Function declaration
//  const ftName = function(){} function expression
//  const ftName = ()=>{} arrow function
//  const ftName = ()=>{
    // console.log("hello world");
    //  } 
    // const sdName = () =>{

        // ftName();
        // }  callback function


    //     const name = "Roshan Sardar";

    //     const ftName = (name)=>{
    //         const name = "Rajbiraj";

    //         console.log(name);
    //     };

    //     console.log(name);
    //   ftName(name);

    // hosting


//     fnName();

//   function fnName(){
//     console.log("hello world");
//   }

// //   fnName();

// fnName();

// const fnName = function(){
//     console.log("hello worldl");
// }

// // fnName();

// function fnName(){} function declaration
//  const fnName = function(){} function expression
// const fnName = ()=>{} arrow function



// const fnName = ()=>{
//     console.log("hello world you can learing arrow function")
// }

// fnName();

// console.log(document);


// basic DOM manipulation
// #h1
// const firstFunction = ()=>{
//     let h1 = document.createElement("h1");

//     h1.innerHTML = "hello world";
//     document.body.appendChild(h1);
// }

// firstFunction();

// Event Listener and Event Handling

// let btn = document.createElement("button");
// btn.innerHTML = "submit",

// document.body.appendChild(btn);

// let h1 = document.createElement("h1");
// btn.addEventListener("mouseleave", ()=>{
//     // alert("hello world");
//     h1.innerHTML = "Hello world";
//     document.body.appendChild(h1);


// })


let promiseFunction = (name) =>{
 return new Promise((resolve,reject)=>{
        if(name == "Roshan Sardar"){
            resolve("Roshan Sardar");
        }else{
            reject("hello good by");
        }
    })
}

let name = "Roshan Sardar";
promiseFunction(name).then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
})


const promiseFirstFunction = async()=>{
   try{
    //    let name = "Roshan Sardar"
     let result = await fetch(promiseFunction());
    console.log(result);
   }catch(error){
    console.log(error);
   } 
}

let impotantData = ""

promiseFirstFunction();

