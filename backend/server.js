import 'dotenv/config'
import express from 'express';
import cors from 'cors'
import { connectDB } from './config/db.js';
import productRouter from './routes/productRoute.js';
import 'dotenv/config';
import userRouter from './routes/userRoute.js';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';



const app = express();
const Port = 4000;



//middlewares
app.use(express.json());
app.use(cors());

//db connection
connectDB();

//api endpoint
app.use("/api/product", productRouter);
app.use("/images", express.static('uploads'));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order",orderRouter);

app.get("/", (req, res) =>{
     res.send("Hello")
})


app.listen(Port, (req, res) => {
    console.log(`Server is running on Port ${Port}`);
    
});