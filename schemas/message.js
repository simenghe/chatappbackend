import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
    timeStamp : String,
    msg: String,
    userid: String
});

const Message = mongoose.model("Message",messageSchema);
export default Message;