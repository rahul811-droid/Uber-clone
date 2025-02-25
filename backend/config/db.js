import mongoose from "mongoose";


const connectDB = async () => {
    try {
     await mongoose.connect('mongodb+srv://rahul25062:rahul123@forever.rvo0r.mongodb.net/uber-clone')
        console.log('MongoDB Connected');
    } catch (error) {
        
        console.error(`Error: ${error.message}`);
        process.exit(1);    
    }
    };

    export default connectDB;