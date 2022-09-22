const mongoose=require('mongoose');
const CustomerSchema=new mongoose.Schema({
    Name:{
        type:String,

    },
    Email:{
        type:String,
        unique:true
    },
    CurrentBalance:{
        type:Number,
    },

},{
    timestamps:true
})

const Rooms =mongoose.model('Customers',CustomerSchema)

module.exports=Rooms