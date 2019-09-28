import express from 'express';
import bodyParser from 'body-parser';
import router from '../router/router';
import mongoose from 'mongoose';
import password from '../mongoPass'
const app = express();
console.log(`Password is ${password}`);
const uri = `mongodb+srv://simenghe:${password}@mongolad-shrff.mongodb.net/test?retryWrites=true&w=majority`;

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console,'connection error:'));
db.once('open',function(){
    //
});
db.close();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router)

const io = require('socket.io').listen(server);
const server = require("http").createServer(app);
const PORT = process.env.PORT || 8080;

io.on("connection", socket => {
    console.log("CONNECTED!");
    socket.on("chat message", jsonObject => {
        console.log(jsonObject);
        io.emit("chat message", jsonObject);
      });
});
server.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});

