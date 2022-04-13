const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const ItemSchema=new Schema({
    name:{
        type:String,
        required:true
    }
});
module.exports=item=mongoose.model('item',ItemSchema);