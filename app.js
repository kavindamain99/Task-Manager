const express = require('express')
const app = express();
const tasks = require('./routes/tasks')
const bp = require('body-parser')
//connect with db using separate file
require('./db/connect')

const port = 3000;
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))
//routes
app.use('/api',tasks)

//middleware
app.use(express.json());


app.listen(port,()=>{
    console.log(`listening on port ${port}`);
});


