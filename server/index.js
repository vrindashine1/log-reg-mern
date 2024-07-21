import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import EmployeeModel from './models/Employee.js';

const app=express()
app.use(express.json())
app.use(cors())

// mongoose.connect("mongodb://127.0.0.1:27017/employee")
mongoose.connect("mongodb+srv://vrindashine25:GZUuFqyi3pLpuTM9@cluster0.1e66qb3.mongodb.net/log-reg-mern?retryWrites=true&w=majority&appName=Cluster0")

app.post("/login",(req,res)=>{
    const {email,password}=req.body
    EmployeeModel.findOne({email:email})
    .then(user=>{
        if(user){
            if(user.password=== password){
                res.json("Success")
            }
            else{
                res.json("password is incorrect")
            }
        }
        else{
            res.json("no record existed")
        }
    })
})

app.post('/register',(req,res)=>{
    EmployeeModel.create(req.body)
    .then(employees=> res.json(employees))
    .catch(err=>res.json(err))
    
})

app.listen(3001,()=>{
    console.log('server is running');
})

