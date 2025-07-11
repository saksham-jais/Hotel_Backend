const express =require("express");
const router = express.Router();
const Person = require('./../models/Person');
const {jwtAuthMiddleware,generateToken}=require("../jwt");
const { use } = require("passport");
router.post("/signup", async (req, res) => {
    try {
        const data = req.body;
        const newPerson = new Person(data);
        const response = await newPerson.save();
        console.log('Data Save');
        const payload={
            id:response.id,
            username:response.username
        };
        console.log(JSON.stringify(payload))
        const token=generateToken(payload);
        console.log("Token Is : "+token);
        res.status(200).json({response:response,token:token});
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' })
    }
    // Deprecated Method
    // const data =req.body;
    // const newPerson = new Person(data);
    // // newPerson.name = data.name;
    // // newPerson.age = data.age;
    // // newPerson.mobile = data.mobile;
    // // newPerson.email = data.email;
    // // newPerson.address = data.address;
    // newPerson.save((error,saved_person)=>{
    //     if(error){console.log('Error Saving Person',error);
    //     res.status(500).json({error:"Internal Server Error"})}
    //     else{console.log('Data Saved Successfully');
    //         res.status(200).json(saved_person);
    //     }
    // })
})
// Login Routes 
router.post('/login',async (req,res)=>{
    try {
        // Extract Username And Password From Request Body
        const {username,password}=req.body;
        // Find The User By Username
        const user = await Person.findOne({username:username})
        // If User Does Not Exists Or password Does Not Matched, return Error 
        if(!user || !(await user.comparePassword(password))){
            return res.status(401).json({error:'Invalid Username Or Password'});}
        //Generate Token
        const payload = {
            id:user.id,
            usernmae:user.username
        }
        const token =generateToken(payload);
        // Return Token As Response
        res.json({token})

    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Internal Server Error"})
    }
})
router.get('/profile',jwtAuthMiddleware,async (req,res)=>{
    try {
        const userData = req.user;
        console.log("User Data: ",userData);
        const userId=userData.id;
        const user=await Person.findById(userId);
        res.status(200).json({user})
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Internal Server Error"})
    }
})
router.get("/",jwtAuthMiddleware, async (req, res) => {
    try {
        const data = await Person.find(); console.log('Data Fetch Succesfully');
        res.status(200).json(data)
    } catch (err) { 
        console.log(err);
        res.status(500).json({error:"Internal Server Error"})
    }
})
router.get('/:workType', async (req, res) => {
    try {
        const workType = req.params.workType;
        if (workType == "chef" || workType == 'manager' || workType == 'waiter') {
            const response = await Person.find({work:workType});
            res.status(200).json(response);
        }
        else { res.status(404).json({ error: "Invalid Work Type" }) }
    }
    catch (err) {
        console.log(err); res.status(500).json({ error: "Internal Error" })
    }

})
router.put('/:id',async(req,res)=>{
    try{
        const personId =req.params.id;
        const updatedPersonData =req.body;
        const response = await Person.findByIdAndUpdate(personId,updatedPersonData,{
            new:true,
            runValidators:true
        })
        if(!response){return res.status(404).json({error:'Person Not Found'})};
        console.log("Data Updated");
        res.status(200).json(response);
    }
    catch(err){
        res.status(500).json({error:"Internal Server Error"})
    }
})
router.delete('/:id',async(req,res)=>{
    try{
    const personId =req.params.id;
    const response = await Person.findByIdAndDelete(personId);
    if(!response){return res.status(404).json({error:'Person Not Found'})};
    console.log("Data Deleted");
    res.status(200).json({message:"Data Deleted Successfully"});
}
    catch(err){res.status(500).json({error:"Internal Server Error"})}
})

module.exports = router;