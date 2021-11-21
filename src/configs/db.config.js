const mongoose = require('mongoose');
 
async function connect() {   
    try{
        await mongoose.connect('mongodb+srv://admin:utVrYxTjMQiYjgQ8@cluster0.cmtf9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log('Connect successfully');
    } catch (error) {
        console.log(error);
    }
};

module.exports = connect;
