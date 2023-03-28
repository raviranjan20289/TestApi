const express = require("express");
const app = express();

const get_routes = require("./routes/products");

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) =>{
    res.send("Hello Bhaiya jii");
});

app.use("/api/products", get_routes);
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