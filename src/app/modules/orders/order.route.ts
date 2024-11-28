import express from 'express';
import { ordersController } from './orders.controller';
const orderRoute = express.Router();

//create order post route
orderRoute.post('/', ordersController.createOrder);

//total revenue get route
orderRoute.get('/revenue', ordersController.getTotalRevenue);

export default orderRoute;
