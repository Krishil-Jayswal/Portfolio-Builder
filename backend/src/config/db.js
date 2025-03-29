import mongoose from "mongoose";

export const connectDB = async (url) => {
    try {
        await mongoose.connect(url);
        console.log("Database connected successfully.");
    } catch (error) {
        console.error("Error in connecting to Database", error);
        process.exit(1);
    }
}
