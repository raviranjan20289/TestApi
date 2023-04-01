const mongoose = require("mongoose");
// uri = "mongodb+srv://ranjan:test@cluster0.a2ndrjy.mongodb.net/RestApi?retryWrites=true&w=majority";

const connectDB = async (uri) =>{
    console.log("db connected");
    return mongoose.connect(uri,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

 
};


module.exports = connectDB;
