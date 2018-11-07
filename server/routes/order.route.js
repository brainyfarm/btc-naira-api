import express from 'express';
import Order from '../controllers/order.handler';

const router = express.Router();

router.route('/')
  .post(Order.create)

export default router;
