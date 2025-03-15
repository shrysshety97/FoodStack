import mongoose from "mongoose"



const connectDB = async() => {
  await mongoose.connect(process.env.DB_CONNECT);

}

connectDB()
.then(()=> {
    console.log("Database Connected Successfully");
}).catch((err) => {
    console.log("Connection Failed", err);
    
});

export {connectDB}