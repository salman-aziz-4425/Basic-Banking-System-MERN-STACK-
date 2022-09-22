const mongoose=require('mongoose')


mongoose.connect("mongodb+srv://Salman:salman999@cluster0.1tlao.mongodb.net/banking?retryWrites=true&w=majority").then(()=>{
    console.log("connected")
}).catch(()=>{
    console.log("errors")
})