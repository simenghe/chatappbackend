import express from 'express';
import bodyParser from 'body-parser';
import router from '../router/router';
import mongoose from 'mongoose';
import password from '../mongoPass'
import connect from './dbconnection'
import Message from '../schemas/message'
const app = express();
console.log(`Password is ${password}`);
// const uri = `mongodb+srv://simenghe:${password}@mongolad-shrff.mongodb.net/test?retryWrites=true&w=majority`;

// mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});

// var db = mongoose.connection;
// db.on('error', console.error.bind(console,'connection error:'));
// db.once('open',function(){
//     //
// });
// connect
// db.close();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router)
const io = require('socket.io').listen(server);
const server = require("http").createServer(app);
const PORT = process.env.PORT || 8080;
connect.then(db => {
    let chatMsg = new Message({
        timeStamp: new Date(),
        msg: "Raw Tingaz",
        userid: "Styll"
    });
    chatMsg.save();
});
io.on("connection", socket => {
    console.log("USER CONNECTED!");
    socket.on("disconnect", () => {
        console.log("USER DISCONNECTED");
    });
    socket.on("chat message", msg => {
        console.log(msg);
        io.emit("chat message", msg);
        connect.then(db => {
            let chatMsg = new Message({
                timeStamp: new Date(),
                msg: "Raw Tingaz",
                userid: "Styll"
            });
            chatMsg.save();
        });
    });
});
server.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});

