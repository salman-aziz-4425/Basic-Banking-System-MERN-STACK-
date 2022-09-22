const express=require('express')
require('./db/mongoose')
const cors=require('cors')
const Customers=require('./Models/Customers')

const app=express()


app.use(cors())
app.use(express.json())
express(cors())

app.post('/Customer',async (req,res)=>{
    const data=new Customers(req.body)
    try{
        await data.save()
        res.status(200).send()

    }catch(error){
        console.log(error)
    }
})

app.get("/getCustomers",async(req,res)=>{
    try{
        const data=await Customers.find()
        if(data){
            res.send(data)
        }
        else{
            throw new Error(
                "error"
            )
        }
    }catch(error){
        res.send(error)
    }
})

app.patch('/amountTransfer',async(req,res)=>{

    const userData=await Customers.findOne({Email:req.query.UserEmail})
    const recipentData=await Customers.findOne({Email:req.query.Recipent})
    const Transferedamount=req.query.Amount
    try{
        if(Transferedamount<=userData.CurrentBalance){
             userData.CurrentBalance-=parseInt(Transferedamount)
             recipentData.CurrentBalance+=parseInt(Transferedamount)
             await userData.save()
            
             await recipentData.save()
            res.status(200).send()
        }
        else{
            throw new Error("Current balance is less")
        }
    }catch(error){
        res.send(error)
        console.log(error)
    }
})
app.listen(3000,()=>{
    console.log("Welcome to port 3000")
})