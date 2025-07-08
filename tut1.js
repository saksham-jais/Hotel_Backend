//---------------------------------------------- QUE 1 ------------------------------------------------
// var prompt=require("prompt-sync")();
// const age=prompt("Enter Your Age : ");
// if(age<18){console.log("You Will Get A 20% Discount")}
// else if(age>=18 && age<=65){console.log("Normal Ticket Price Applies")}
// else{console.log("You Will Get A 30% Senior Discount")};

//---------------------------------------------- QUE 2 ------------------------------------------------
// var prompt=require("prompt-sync")();
// const length=prompt("Enter Length : ");
// const width=prompt("Enter Width : ");
// console.log(length*width);

//---------------------------------------------- QUE 3 ------------------------------------------------
// var prompt=require("prompt-sync")();
// function object(obj){
//     obj.name=prompt("Enter Name : ");
//     obj.price=prompt("Enter Price : ");
//     obj.instock=prompt("Enter True/False Whether Stock Available Or Not : ");
//     console.log(obj)
// };
// let Popcorn={};
// object(Popcorn);

// var prompt = require("prompt-sync")();
// function createObject() {
//     var name = prompt("Enter Name: ");
//     var price = parseFloat(prompt("Enter Price: "));
//     var instockInput = prompt("Enter True/False Whether Stock Available Or Not: ").toLowerCase();
//     var instock = instockInput === "true"; // convert string to boolean
//     const obj = {
//         name: name,
//         price: price,
//         inStock: instock
//     };
//     console.log(obj);
// }
// createObject(); // call the function properly

//---------------------------------------------- QUE 4 ------------------------------------------------
// var prompt = require("prompt-sync")();
// let guestList=["Saksham","Suyash","Ansh","Pranav"];
// chkgst=prompt("Enter You Name : ");
// var chk=false;
// for(var i=0;i<=guestList.length;i++){
//     if(chkgst == guestList[i]){
//       chk=true;  
//     }
// }
// if(chk){
//     console.log("Welcome To The Party, "+chkgst);
// }else{
//     console.log("Sorry, You're Not On The Guest List");
// }

//---------------------------------------------- QUE 5 ------------------------------------------------
// let Wtf={
//     date:"2025-06-02",
//     temperatue: "40 C",
//     conditions:"Hot",
//     humidity:"Low"
// }
// const jsonString = JSON.stringify(Wtf);
// console.log(jsonString);

// const parsedObject = JSON.parse(jsonString);
// console.log(parsedObject);

