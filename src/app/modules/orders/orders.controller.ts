import { Request, Response } from 'express';
import config from '../../config';
import { ordersService } from './orders.service';
import { IOrders } from './orders.interface';

const createOrder = async (req: Request, res: Response) => {
  try {
    //receive order data
    const orderData: IOrders = req?.body;

    const result = await ordersService.createOrderInDB(orderData);

    //in sufficient stock
    if (!Object.keys(result).length) {
      res.status(200).json({
        message: 'Order denied because of , insufficient quantity of product',
        status: false,
        data: result,
      });
    }
    //success response
    res.status(200).json({
      message: 'Order created successfully',
      status: true,
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      message: error.message,
      success: false,
      error: error,
      stack: config.node_env === 'development' ? error.stack : undefined,
    });
  }
};

export const ordersController = {
  createOrder,
};
