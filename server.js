const express = require('express')

const app = express()

const PORT = process.env.PORT || 5000

app.get('/',(req,res)=>{
    res.send("hello")
})

app.listen(PORT,()=>{
    console.log(`server is live on port ${PORT}`);
})