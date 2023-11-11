
const express=require("express");
const mongoose=require("mongoose");
const Product=require("./models/productModel");
const app =express();
var cors = require('cors');
app.use(cors());
app.use(express.json())
//routes
app.get("/",(req,res)=>{
    //res.send("welcome sailendra")
})
app.get("/getproducts",async(req,res)=>{
    try{
        const products=await Product.find({});
        res.status(200).json(products);
            }
            catch(error){
        console.log(error.message);
        res.status(500).json({message:error.message});
            }
})
app.get("/getproductsbyid/:id",async(req,res)=>{
    try{
        const {id}=req.params;
        const product=await Product.findById(id);
        res.status(200).json(product);
            }
            catch(error){
        console.log(error.message);
        res.status(500).json({message:error.message});
            }
})
app.delete("/deleteproducts/:id",async(req,res)=>{
    try{
        const {id}=req.params;
        const product=await Product.findByIdAndDelete(id);
        if(!product){
            res.status(404).json({message:"cannot find the product ${id}"}); 
        }
        res.status(200).json(product);
            }
            catch(error){
        console.log(error.message);
        res.status(500).json({message:error.message});
            }
})
app.put("/updateproducts/:id",async(req,res)=>{
    try{
        const {id}=req.params;
        const product=await Product.findByIdAndUpdate(id,req.body);
        if(!product){
            res.status(404).json({message:"cannot find the product ${id}"}); 
        }
        const updatedproduct=await Product.findById(id);
        res.status(200).json(updatedproduct);
            }
            catch(error){
        console.log(error.message);
        res.status(500).json({message:error.message});
            }
})
app.post("/createproducts",async(req,res)=>{
    /*console.log(req.body);
    res.send(req.body);*/
    try{
const product=await Product.create(req.body);
res.status(200).json(product);
    }
    catch(error){
console.log(error.message);
res.status(500).json({message:error.message});
    }
})

//mongodb+srv://sailendra:Sailendra%401234@cluster0.uufjzwq.mongodb.net/collection1?retryWrites=true
mongoose.connect("mongodb://127.0.0.1:27017/sastra").then(()=>{
    console.log("connected to mongoose")   
app.listen(3000,()=> 
    {console.log("server is running on port 3000")});    

}).catch((error)=>{
    console.log(error)
})