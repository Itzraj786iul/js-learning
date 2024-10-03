const name="Raj"
const repoCount=50

// console.log(name+repoCount+  " value");
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName= new String('raj-hc-g')
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('a'));

const newString=gameName.substring(0,4)
console.log(newString)

const anotherString=gameName.slice(-6,2)
console.log(anotherString);

const newString1="     raj    "
console.log(newString1);
console.log(newString1.trim());


const url="https://raj.com/raj%20"

console.log(url.replace('%20',''));
console.log(url.includes('raj'));

console.log(gameName.split('-'));
