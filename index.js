const express = require("express");
const app = express()




app.get("/user", function(req,res){

  return res.send("I am user")
})


app.get("/student", function(req,res){

    return res.send(" I am saying hello ")
  })



app.get("/books",function(req,res){

  return res.json({
    Subject1:"maths",
    subject1:"science",
    subject3:"English",
    subject4:"Economics",
    
  })
})




app.listen(5000,()=>{
    console.log("I am listening on 5000")
})


