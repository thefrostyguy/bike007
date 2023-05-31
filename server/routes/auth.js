const express= require('express');
const {signin,signup}= require('../controllers/auth');
const userrouter = express.Router();

userrouter.post('/signin', signin);
userrouter.post('/signup', signup);

module.exports =userrouter;