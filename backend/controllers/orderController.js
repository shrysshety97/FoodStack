import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import productModel from "../models/productModel.js";
import Razorpay from "razorpay";

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET
});

// Placing user order for the frontend
const placeOrder = async (req, res) => {
    const frontend_url = "http://localhost:5173";
    try {
        const newOrder = new orderModel({
            userId: req.body.userId,
            items: req.body.items,
            amount: req.body.amount,
            address: req.body.address
        });

        await newOrder.save();
        await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} });

        const amountInPaise = req.body.amount * 100; // Convert amount to paise

        const options = {
            amount: amountInPaise,
            currency: "INR",
            receipt: `receipt_${newOrder._id}`,
            payment_capture: 1
        };

        const order = await razorpay.orders.create(options);

        res.json({
            success: true,
            order_id: order.id,
            amount: amountInPaise,
            currency: "INR",
            key_id: process.env.RAZORPAY_KEY_ID, // Send key_id to frontend
            order_id: order.id, // Send order_id to frontend
            success_url: `${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
            cancel_url: `${frontend_url}/verify?success=false&orderId=${newOrder._id}`
        });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
};

const verifyOrder = async (req, res) => {
    const { orderId, success } = req.body;
    try {
        if (success === "true") {
            await orderModel.findByIdAndUpdate(orderId, { payment: true });
            res.json({ success: true, message: "Paid" });
        } else {
            await orderModel.findByIdAndDelete(orderId);
            res.json({ success: false, message: "Not Paid" });
        }
    } catch (error) {
        console.log("error");
        res.json({ success: false, message: "Error" });
    }
};

const userOrders = async (req, res) => {
    try {
        const orders = await orderModel.find({ userId: req.body.userId });
        res.json({ success: true, data: orders });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
};

const listOrders = async(req, res) => {
    try {
        const orders = await orderModel.find(({}));
        res.json({ success: true, data: orders });
    } catch (error) {
        console.log(error);
        res.json({success:false, message: "Error" });
    }
}

const updateStatus = async(req, res) => {
    try{
        await orderModel.findByIdAndUpdate(req.body.orderId, {status: req.body.status})
        res.json({success:true, message:"Status Updated"})
    } catch(err){
        console.log(err);
        res.json({success:false, message: "Error" });
    }
}

export { placeOrder, verifyOrder, userOrders, listOrders, updateStatus };