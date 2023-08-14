const mongoose = require('mongoose')
const subscriberModel = require('./src/models/subscribers')
const data = require('./src/data')
const dotenv = require("dotenv");

// ENV config
dotenv.config();

// Database Connection
const DATABASE_URL = "mongodb+srv://amitbej:amitbej@cluster0.jz8b9cz.mongodb.net/ytsubscriber?retryWrites=true&w=majority";
mongoose.connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection
db.on('error', (err) => console.log(err))
db.once('open', () => console.log('Database created...'))

const refreshAll = async () => {
    await subscriberModel.deleteMany({});
    await subscriberModel.insertMany(data);
    await mongoose.disconnect();
}
refreshAll();