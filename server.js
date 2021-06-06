const express = require ('express');
const connectToDB = require ('./config/configConnection')
// 1) instanciation
const app = express()

// 2) middelweare
app.use(express.json())

// 3) connect to DATA BASE
connectToDB()

// 4) Routes
app.use('/api/users', require('./routes/api/user'))

// 5) Port
const port = 5000;
app.listen(port,(err)=>{
    err? console.log(err) : console.log(`Server is listenning on port: ${port}`)
})

