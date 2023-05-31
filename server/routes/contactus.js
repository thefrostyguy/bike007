const express= require('express');
const { contactUS } = require('../controllers/contactus');
const contactUsRouter = express.Router();

contactUsRouter.post('/askQuery',contactUS);

module.exports=contactUsRouter;