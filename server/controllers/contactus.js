const ContactUsModel = require('../models/contactus');

exports.contactUS=async (req,res)=>{
    try {
        
        const {name,email,phoneNumber,query}=req.body;
        const createdQuery=await ContactUsModel.create({name,email,phoneNumber,query})
        res.status(201).json({ createdQuery});
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    
    console.log(error);
    }
}