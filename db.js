const mongoose =require('mongoose')
require('dotenv').config();
const mongoURL =process.env.MONGODB_URL_LOCAL;
// const mongoURL=process.env.DB_URL;
mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
const db=mongoose.connection;
db.on('connected',()=>{console.log("Connected To MongoDB Server...")})
db.on('disconnected',()=>{console.log("MongoDB Server Disconnected")})
db.on('error',()=>{console.log("MongoDB Connection Error")})
module.exports=db;
