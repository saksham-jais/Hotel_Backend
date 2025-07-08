console.log('Note Page Loaded');
var age=24;
const addNumber=function(a,b){return a+b}
module.exports={
    age,addNumber
}
//------------------------------------------------ Connecting To DB ------------------------------------------------------

//------------------------------------------------ Creating A Server ------------------------------------------------------
// const express=require('express')
// const app=express();
// app.get('/',function(req,res){
//     res.send('Hello World')
// })
// app.get('/chicken',(req,res)=>{
//     res.send("Sure Sir, i Would Love To serve Chicken")
// })
// app.get('/idli',(req,res)=>{
//     var customized_idli ={
//         name: 'rava idli',
//         size: '10cm diameter',
//         is_sambhar:true,
//         is_chtney:false
//     }
//     res.send(customized_idli)
// })
// app.post(('/items'),(req,res)=>{
//     res.send("Data Is saved")
// })
// app.listen(3000,()=>{console.log("Server is Running On Port 3000")})

//------------------------------------------------ Module Import ------------------------------------------------------

// const notes=require('./notes.js');
// console.log(notes.age);
// console.log(notes.addNumber(2,3));


//------------------------------------------------ Callback Function ------------------------------------------------------
// var fs = require('fs');
// var os = require('os');
// var user=os.userInfo();
// console.log(user);
// fs.appendFile('greting.txt','Hii'+user.username+'!',()=>{
//     console.log('file is created')
// });


//------------------------------------------------ Callback Function ------------------------------------------------------

// const add=function(a,b){
//     var result=a+b;
//     console.log("Result : "+result);
//     callback();
// }
// function callback(){
//     console.log("Successful Added");
// }
// add(5,6);

// const add=function(a,b,callback){
//     var result=a+b;
//     console.log("Result : "+result);
//     callback();
// }
// add(5,6,()=>{});
// add(5,6,function(){console.log("Completed")});


//-------------------------------------------------------------------------------------------------------
// function add(a,b){
//     return a+b;}

// var add =function (a,b){
//     return a+b;}

// var add=(a,b)=>{return a+b;}

// var add=(a,b)=>a+b;

// let result=add(3,5);
// console.log(result);

// (function(){
//     console.log("Hello...")
// })()