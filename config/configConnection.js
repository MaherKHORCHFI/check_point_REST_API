const mongoose = require ('mongoose');
const config = require ('config');

const connectToDB = ()=>{
    mongoose
        .connect(config.get("mongoURI"), { useNewUrlParser: true, useUnifiedTopology: true})
        .then(()=>console.log('Mongoose connected'))
        .catch(err=>console.log(err))
}

module.exports = connectToDB