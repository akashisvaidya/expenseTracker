import mongoose from "mongoose";
export const connectMongoDB = () => {
  try {
    const mongoURL = "mongodb://localhost:27017/expense";
    mongoose.set("strictQuery", true); // for the warning
    const conn = mongoose.connect(mongoURL);
    conn && console.log("MongoDB connected");
  } catch (error) {
    console.log(error.message, "from ConnectMongoDB function   ");
  }
};
