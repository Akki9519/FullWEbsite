const express = require('express');
const Model = require('../model/model');

const router = express.Router()


//Post Method
router.post('/post',  async(req, res) => {
    
    try {
        const data = await new Model({
            name: req.body.name,
            age: req.body.age
        });
    
        console.log(data);
        
        const dataToSave = await data.save();
        console.log(dataToSave);
        res.send(dataToSave);
    }
    catch (error) {
        console.log(error);
        res.status(400).json("error is coming");
    }
    
})

//Get all Method
router.get('/getAll', async(req, res) => {
    try{
        const data = await Model.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
    res.send('Hello welcome my new api');
})

//Get by ID Method
router.get('/getOne/:id', async (req, res) => {
    try{
        const data = await Model.findById(req.params.id);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Update by ID Method
router.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Model.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Delete by ID Method
router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})



module.exports = router;
