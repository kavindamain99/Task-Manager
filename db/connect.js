const mongoose = require('mongoose');
//dotenv for secret variable
require('dotenv').config()
 

mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{

    console.log("db connection established")
}).catch((err)=>{
    console.log(err)
})