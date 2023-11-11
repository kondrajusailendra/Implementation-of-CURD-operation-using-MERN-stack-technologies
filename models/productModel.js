const mongoose=require("mongoose")
const productSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,"please enter the name"]
    },
    reg_num:{
        type:Number,
        required:true,
          },
          email:{
            type:String,
            required:true
          },
          age:{
            type:Number,
            required:true
          },
          university:{
            type:String,
            required:true
          },
    
        
},
{
    timestamps:true

}
)
const Product =mongoose.model("newcollection",productSchema)
module.exports =Product;