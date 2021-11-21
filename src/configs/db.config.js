const mongoose = require('mongoose');
 
async function connect() {   
    try{
        await mongoose.connect(`mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log('Connect successfully');
    } catch (error) {
        console.log('Connect failure !!!');
    }
};

module.exports = connect;
