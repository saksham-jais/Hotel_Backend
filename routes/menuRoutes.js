const express = require('express');
const router = express.Router();
const MenuItem = require('./../models/MenuItems');
router.post('/', async (req, res) => {
    try {
        const menuitem = req.body;
        const Menu = new MenuItem(menuitem);
        const response = await Menu.save();
        console.log('Data Save');
        res.status(200).json(response);
    }
    catch (err) { console.log(err), res.status(500).json({ error: "Internal Sever Error" }) }
})
router.get("/", async (req, res) => {
    try {
        const data = await MenuItem.find();
        console.log("Data Fetch Succesfully");
        res.status(200).json(data);
    }
    catch (err) { console.log(err); res.status(500).json({ error: "Internal Server Error" }) }
})

router.get('/:taste',async(req,res)=>{
    const response =await MenuItem.find({taste:req.params.taste});
    console.log(req.params.taste)
    res.status(200).json(response)
})

module.exports=router;