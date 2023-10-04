require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const DbModel = require('./models/dbs');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/getdbs', (req, res) => {
    DbModel.find()
        .then((dbs) => res.json(dbs))
        .catch((error) => res.json(error));
});

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        //listen for requests
        app.listen(process.env.PORT, () => {
            console.log(`Server connected to db & listening on port ${process.env.PORT}`);
        })
    })
    .catch(err => console.log(err));
