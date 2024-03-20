
import Order from '../models/order.model.js';

export const completeOrder = async (req, res) => {
    try {
        // Logic to update the order status to completed
        const orderId = req.params.id;
        const updatedOrder = await Order.findByIdAndUpdate(orderId, { isCompleted: true }, { new: true });

        if (!updatedOrder) {
            return res.status(404).json({ error: "Order not found" });
        }

        res.json(updatedOrder);
    } catch (error) {
        console.error("Error completing order:", error);
        res.status(500).json({ error: "Error completing order" });
    }
};
