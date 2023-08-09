const mongoose = require("mongoose")
const mongoUsername = process.env.MONGO_INITDB_ROOT_USERNAME;
const mongoPassword = process.env.MONGO_INITDB_ROOT_PASSWORD;
const mongoHost = 'mongo'; 
const connectionString = `mongodb://${mongoUsername}:${mongoPassword}@${mongoHost}:27017/`;

mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(db => console.log("Db is connected to", db.connection.host))
    .catch(err => console.error("error connecting to db", err));