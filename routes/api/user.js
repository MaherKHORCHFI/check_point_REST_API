const express = require('express');
const router = express.Router()

// User model

const User = require('../../models/User')

// @route   GET api/users
// @desc    Get All users
// @ access Public

router.get('/',(req,res)=>{
    User.find()
        .sort({name : 1})
        .then(users=>res.json(users))
        .catch(err=>console.log(err))
})

// @route   POST api/users/add-user
// @desc    CREATE A new user
// @ access Public

router.get('/add-user',(req,res)=>{
    let newUser = new User({
        ...req.body
    })
        newUser.save()
        .then(user=>res.json({msg:"success",user}))
        .catch(err=>console.log(err))
})

// @route   PUT api/users/edit-user/:id
// @desc    UPDATE a user by id
// @ access Public

router.put('/edit-user/:id',(req,res)=>{

    User.findByIdAndUpdate({_id:req.params.id},{$set:{...req.body}})
        .then(user=>res.json({msg:"Success: user updated", user}))
        .catch(err=>console.log(err))
})

// @route   DELETE api/users/delete-user/:id
// @desc    DELETE a user by id
// @ access Public

router.delete('/delete-user/:id',(req,res)=>{
    // console.log(req.params)
    User.findByIdAndDelete(req.params.id)
    
    .then(user=>res.json({msg:"Succsess delete", user}))
    .catch(err=>console.log(err))
})

module.exports = router
