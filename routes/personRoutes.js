const express =require("express");
const router = express.Router();
const Person = require('./../models/Person');
router.post("/", async (req, res) => {
    try {
        const data = req.body;
        const newPerson = new Person(data);
        const response = await newPerson.save();
        console.log('Data Save');
        res.status(200).json(response);
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
router.get("/", async (req, res) => {
    try {
        const data = await Person.find(); console.log('Data Fetch Succesfully');
        res.status(200).json(data)
    } catch (err) { }
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