const express = require("express");

const app = express();
let requestCount = 0; //global variable requestcount that counts the nunbeer of request the server have also log the value whenever either sum or multiply end point hit. 
function requestIncreaser(req,res,next) { // here requestincreases act as an middleware.
    requestCount = requestCount + 1;
    console.log("Total mumber of requests = " + requestCount);
    res.jsonn({
        message: "I ended the request early",//this is used to end the request the realsumhandler doesn't called 
        //remind that you can use the one out of the both and using one is complelsary.
    })
    next();//by using this next we can call the realsumhandleer
}

function realSumHandler(req,res) {
    //main logic
    const a = pareseInt(req.query.a);
    const b = pareseInt(req.query.b);

    res.json({
        ans: a + b,
    });
}

app.get("/sum",requestIncreaser,realSumHandler); //sabse phele get on the requestincreaser function then after call the realsum handler function if the middleware that is requestIncreaser wants to


//if you use app.use(requestIncreaser) you don't need to call it again and agian