const getAllProducts = async(req, res) =>{
    res.status(200).json({"msg": "hello coders here you all get the products"});
}


const getAllProductsTesting = async(req, res) =>{
    res.status(200).json({"msg":"Hello Ravi Bhaiya jii"});
}

module.exports = {getAllProducts, getAllProductsTesting};