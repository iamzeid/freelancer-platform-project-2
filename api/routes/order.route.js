// import express from "express";
// import { verifyToken } from "../middleware/jwt.js";
// import { getOrders, intent, confirm } from "../controllers/order.controller.js";
// import Order from "../models/order.model.js";

// const router = express.Router();

// // router.post("/:gigId", verifyToken, createOrder);
// router.get("/", verifyToken, getOrders);
// router.post("/create-payment-intent/:id", verifyToken, intent);
// router.put("/", verifyToken, confirm);
// router.get("/completed/count", async (req, res) => {
//   // Update route to match the mounting point in index.js
//   try {
//     const count = await Order.countDocuments({ isCompleted: true });
//     res.json({ count });
//   } catch (error) {
//     console.error("Error retrieving completed orders count:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });
// export default router;
// import express from "express";
// import { getUserOrders } from "../controllers/order.controller.js"; // Import the getUserOrders function

// const router = express.Router();

// // Route to fetch orders for a specific user
// router.get("/user/:userId/orders", async (req, res) => {
//   const { userId } = req.params;

//   try {
//     const orders = await getUserOrders(userId);
//     res.json(orders);
//   } catch (error) {
//     res.status(500).json({ error: "Error fetching user orders" });
//   }
// });

// export default router;
// order.route.js

import express from 'express';
import { completeOrder } from '../controllers/order.controller.js';

const router = express.Router();

// Route to complete an order
router.put('/orders/:id/complete', completeOrder);

export default router;

