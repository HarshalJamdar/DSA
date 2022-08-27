const express = require('express');
const app = express();
let axios = require("axios");

app.use('/',function(req,res,next){
    console.log("This is global middleware.")
})

app.get('/test-me',(req,res)=>{
    res.send("Welcome!")
})

app.get('/getWeather',async (req,res)=>{
    let city = req.query.q;
    let id = req.query.appid;
    console.log(`query params are: ${city} ${id}`);
    var options = {
      method: "get",
      url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${id}`,
    };
    let result = await axios(options);
    console.log(result.data);
    res.status(200).send({ msg: result.data });
})

app.listen(5000,()=>{
    console.log("App listening on port :", 5000);
})