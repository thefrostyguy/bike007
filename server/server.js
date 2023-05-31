const express= require('express');
const dotenv= require('dotenv');
const bodyParser= require('body-parser');
const cors= require('cors')
const userrouter= require('./routes/auth');
const contactUsRouter= require('./routes/contactus');
const connectDB = require('./config/db');
dotenv.config('.env');

connectDB();

const app=express();



app.use(cors());
app.use(bodyParser.json({
    limit:'30mb',
    extended:true
}))

app.use(bodyParser.urlencoded({ 
    limit: '30mb',
     extended: true }));
app.use("/auth",userrouter)
app.use("/contactUs",contactUsRouter)
const PORT = process.env.PORT

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})