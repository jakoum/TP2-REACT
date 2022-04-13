import expess, {Request,Response} from 'express';
const express=require('express');
const router=express.Router();
//item model
const Item=require('../../models/item');
 router.get('/',(req:Request,res:Response)=>{
     Item.find().sort({date:-1}).then((items: any)=>res.json(items))
 })
 router.post('/',(req:Request,res:Response)=>{
     const newItem=new Item({
         name:req.body.name
     });
     newItem.save().then((item: any)=>res.json(item))
 });
 router.delete('/:id',(req:Request,res:Response)=>{
     Item.findById(req.params.id).then((item:any)=>item.remove().then(()=>res.json({success:true})))
 });
 module.exports=router;