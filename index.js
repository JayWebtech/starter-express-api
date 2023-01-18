const express = require("express");
const app = express()
const server = require("http").Server(app)
const lgaList = require("./lga");

app.get("/", (req, res) => {
    try{
        const state = req.query.state;
        for (let index = 0; index < Object.keys(lgaList).length; index++) {
            //res.status(200).json({Object.values(lgaList.lgaList[state])});
            res.status(200).send(Object.values(lgaList.lgaList[state]));
        } 
    }catch (err){
        res.send("Error: Inavalid state name");
    }
});


app.use((req, res) => {
    res.status(404);
});
server.listen(process.env.PORT || 3000);
