const express = require("express");
const app = expresss();

app.get("/sum",function(req,res) { //request and response
    const a = req.query.a;
    const b = req.query.b;
    res.json({
        answer: a + b
    })

})

//As the value passes is string so...also mention that we are doing a=1 & b=2
const express = require("express");
const app = expresss();

app.get("/sum",function(req,res) { //request and response
    const a = parseInt (req.query.a);//parseInt means pass the string as an integer.
    const b = parseInt(req.query.b);
    res.json({
        answer: a + b
    })

})

//now try to in this way a/b;

const express = require("express");
const app = expresss();

app.get("/add/:firstArg/:secondArg",function(req,res) { //any request comes as /add /anything /anything it will add
    const a = parseInt (req.params.firstArg);//parseInt means pass the string as an integer.
    const b = parseInt(req.params.secongArg);
    res.json({
        answer: a + b
    })

})