const mongoose = require('mongoose');
const contactUsSchema = mongoose.Schema({
  name: { type: String, required:  true },
  email: { type: String, required: true },
  phoneNumber:{ type: Number, required: true},
  query: {type: String,required:true},
  id: { type: String },
});
var ContactUsModel = mongoose.model('ContactUsModel', contactUsSchema);
module.exports= ContactUsModel;