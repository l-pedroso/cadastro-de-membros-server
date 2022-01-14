require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

async function mongoConnect() {
    try {
        await mongoose.connect(process.env.MONGO_CONN_URL);
        console.log('MongoDB --  database connection established successfully!');
    }
    catch (e) {
        console.log(e)
    }
}
mongoConnect();


app.use('/api/v1', routes);


app.listen(process.env.PORT || 3000, () => console.log('Server running on http://localhost:' + (process.env.PORT || 3000) + '/'));

