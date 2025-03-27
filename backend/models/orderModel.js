import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId,ref:'user', required: true },
    items: { type: Array, required: true },
    amount: { type: Number, required: true },
    address: { type: Object, required: true }, // Corrected field name
    status: { type: String, default: "Food Processing" },
    date: { type: Date, default: Date.now() },
    payment: { type: Boolean, default: false }
});

const orderModel = mongoose.models.order || mongoose.model("order", orderSchema);

export default orderModel;