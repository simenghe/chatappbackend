import mongoose from 'mongoose';
import password from '../mongoPass';
//bluebird line
const uri = `mongodb+srv://simenghe:${password}@mongolad-shrff.mongodb.net/test?retryWrites=true&w=majority`;

const connect = mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true,dbName: 'multichat'});

export default connect;