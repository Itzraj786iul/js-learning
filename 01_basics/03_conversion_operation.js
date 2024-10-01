// let score="32"
let score="32abc"
// let score=null
// let score=undefined
// let score=true

//suppose the above value is in string and we want to work on number datatypes 
//check type firstly
console.log(typeof score)
console.log(typeof(score))
//now converting the datatype to number
let scoreinNumber =Number(score)
console.log(typeof scoreinNumber)
console.log(scoreinNumber)


//"33"=>33
// "33abc"=>NaN
// true=>1 ;false >=0


let isLoggedIn=1
// let isLoggedIn=0
// let isLoggedIn=""
// let isLoggedIn="raj"


let booleanIsLoggedIn= Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// 1=>true; 0=>false
//"">= false
// "raj"=>true

let someNumber=33
let stringNumber=String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)