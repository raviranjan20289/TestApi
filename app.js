

const express = require("express");
const app = express();

const get_routes = require("./routes/products");
require("dotenv").config();
const connectDB = require("./db/connect");

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) =>{
    res.send("Hello Bhaziya jii");
});

app.use("/api/products", get_routes);



     const start = async() => {
       await connectDB(process.env.MONGODB_URL)
       
        try{
            app.listen(PORT, () =>{
                console.log(`${PORT} yes you are connected now`);
            })
        }catch(error) {
            console.log(error);
        }
     }
start()

