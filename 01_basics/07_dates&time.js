//dates
// let myDates=new Date()
// console.log(myDates);
// console.log(myDates.toString());
// console.log(myDates.toDateString());
// console.log(myDates.toLocaleString());
// console.log(typeof myDates);

let mycreatedDate =new Date(2023-0,23)
// let mycreatedDate =new Date("2023-01-14")
// console.log(mycreatedDate);
// console.log(mycreatedDate.toString());


let myTimeStamp=Date.now()
        // console.log(myTimeStamp);
        // console.log(mycreatedDate.getTime());
    console.log(Math.floor(Date.now()/1000));
       
let newDate =new Date();
console.log(newDate);
console.log(newDate.getMonth());

 
// `${newDate.getDate()} and the time is`


newDate.toLocaleString('default',{
    weekday: "long",
})