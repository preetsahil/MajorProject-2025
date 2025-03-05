import express from "express"
import dotenv from "dotenv"

dotenv.config();


const app=express();
app.get("/",(req,res)=>{
    console.log("Hello dosto")
})

const PORT=process.env.PORT;

app.listen(PORT,()=>{
    console.log("server is listening")
})

