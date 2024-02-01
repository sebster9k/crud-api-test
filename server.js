require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/users');

const port = process.env.PORT;
const mongoDB = process.env.MONGODB_URI;
const app = express();

// Middleware
app.use('/api', router);


// Connect to data base
mongoose
    .connect(mongoDB)
    .then(() => {
        console.log('Connection with data base successful');
    })
    .catch((error) => {
        console.log(error);
    })


app.listen(port, () => {
    console.log(`Server starting at port: ${port}`);
})