const express = require("express");
const app = express();


const PORT = process.env.PORT || 5000;

app.get("/", (req, res) =>{
    res.send("Hello Bhaiya jii");
});
 console.log("hello world");
 console.log("hii");

const start = async() =>{
    try{
        app.listen(PORT, () =>{
            console.log(`${PORT} yes you are connected now`);
        })
    } catch (error) {
        console.log(error);
    }

}
start();