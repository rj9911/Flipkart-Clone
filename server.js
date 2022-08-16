import express from "express";
import dotenv from "dotenv";
import cors from 'cors';
import bodyParser from "body-parser";
import { v4 as uuid } from "uuid";


import Connection from "./database/db.js";
import DefaultData from "./DefaultData.js";
import Router from "./routes/route.js";

const app = express() // express as function be initialized to any variable.

dotenv.config(); // For initializing the env File

app.use(cors());
app.use(bodyParser.json({extended : true}))  // To parse
app.use(bodyParser.urlencoded({extended: true})) // To parse the URL
app.use('/',Router);

const PORT = process.env.PORT || 8000; 

const USERNAME = process.env.DB_USERNAME; // Sytax to get any variable from env file.
const PASSWORD = process.env.DB_PASSWORD;

const URL = process.env.MONGODB_URI || `mongodb://${USERNAME}:${PASSWORD}@ac-1ti3kdi-shard-00-00.dape3t6.mongodb.net:27017,ac-1ti3kdi-shard-00-01.dape3t6.mongodb.net:27017,ac-1ti3kdi-shard-00-02.dape3t6.mongodb.net:27017/?ssl=true&replicaSet=atlas-91yqyi-shard-0&authSource=admin&retryWrites=true&w=majority`;

Connection(URL);  // Calling Connection Function and passing USRNAME,PASSWORD

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
}

app.listen(PORT , () => console.log(`Hello This server is started on ${PORT}`))

// After server is created and connection is made then after we called DefaultData function.
DefaultData();   
     
export let paytmMerchantKey = process.env.PAYTM_MERCHANT_KEY;
export let paytmParams = {};
paytmParams['MID'] = process.env.PAYTM_MID;
paytmParams['WEBSITE'] = process.env.PAYTM_WEBSITE;
paytmParams['CHANNEL_ID'] = process.env.PAYTM_CHANNEL_ID;
paytmParams['INDUSTRY_TYPE_ID'] = process.env.PAYTM_INDUSTRY_TYPE_ID;
paytmParams['ORDER_ID'] = uuid();
paytmParams['CUST_ID'] = process.env.PAYTM_CUST_ID;
paytmParams['TXN_AMOUNT'] = '100';  // Hardcored
paytmParams['CALLBACK_URL'] = 'https://availcart.herokuapp.com/callback';
paytmParams['EMAIL'] = 'priyamgupta880@gmail.com';
paytmParams['MOBILE_NO'] = '8287438697';



