//Primitive data types


//7 types :String   ,Number,Boolean,null,Undefined,Symbol,BigInt
const score=100
const scorevalue=100.3
const isLoggedIn=false
const Outsidetemp=null
let userEmail;
const id=Symbol('123')
const anotherid=Symbol('123')
// console.log(id===anotherid);

const bigNumber=2534624312n



//Refernece (Non Primitive)

//Array, Objects, Functions

const heros=["shaktiman","naagraj","doga"]
let myObject={
    name:"raj",
    age:18,

}

// const myFunction=function()
// {
//     console.log("hello world");
// }
// console.log(typeof bigNumber)



//+++++++++++++++++ Memory ++++++++++++++//
//types of memory
//stack(primitive) ,heap(non-primitive)
//in stack we get copy but in heap we get the original value or reference value

let myYoutubeName="raj"

let anotherName=myYoutubeName
anotherName="helloraj"


console.log(myYoutubeName);

console.log(anotherName);


let user={
    email:"anbgds@gmail.com",
    upi:"user@ybl"

}

let useTwo=user

useTwo.email="asasdasfa@gmail.com"
console.log(user.email)
console.log(useTwo.email);
