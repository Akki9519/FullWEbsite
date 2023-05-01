const { urlencoded } = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const cors = require('cors');


const app = express();
const PORT = 8000;

app.use(express.json());
app.use(urlencoded({extended:false}));
app.use(cors());

require('dotenv').config();
const mongoString = process.env.DATABASE_URL;

 const connection=async()=>{
   try{
        await mongoose.connect(mongoString,{useNewurlParser:true,useUnifiedtopology:true});
        console.log("Database Connected ...");
    }
    catch(e)
    {
        console.log(e);
    }
}

connection();


app.use('/api', routes)


app.listen(PORT,()=>{
    console.log(`server runnign on port ${PORT}`);
});