import express from 'express';
import { ordersController } from './orders.controller';
const orderRoute = express.Router();

orderRoute.post('/', ordersController.createOrder);

export default orderRoute;
