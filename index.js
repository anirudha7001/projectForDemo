const express = require("express")
const app = express()
const path = require('path')
const router = express.Router();
const port = 3000;

app.use(express.static(path.join(__dirname,'routes')));
app.get('/',(req,res)=>{
    res.send("This is Home Page");
})

app.listen(port,()=>{
    console.log(`The server is running on http:localhost:${port}`)
})


