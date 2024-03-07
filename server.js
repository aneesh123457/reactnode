// node js server.js code
const express = require('express');
const cors = require('cors');
const app= express();
app.use(cors());
app.get('/api',(req,res)=>
{
    return res.json({mess:"this is maddy"});
})
app.listen(8000,(()=>
{
    console.log("listening");
}))

