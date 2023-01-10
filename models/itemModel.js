const mongoose=require("mongoose")

const itemSchema=mongoose.Schema({
    category:{
        type:String,
        require:[true,"Fill category"]
    }
})

const Category=mongoose.model("Category",itemSchema)
module.exports=Category