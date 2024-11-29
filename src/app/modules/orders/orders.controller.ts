import { NextFunction, Request, Response } from 'express';
import { ordersService } from './orders.service';
import { IOrders } from './orders.interface';

//create order request/response controller
const createOrder = async (req: Request, res: Response, next: NextFunction) => {
  try {
    //receive order data
    const orderData: IOrders = req?.body;

    const result = await ordersService.createOrderInDB(orderData);

    if (result === null) {
      res.status(404).json({
        message: 'Product not Found!',
        status: false,
        data: result,
      });
      return;
    }

    //in sufficient stock
    if (!Object.keys(result as object).length) {
      res.status(500).json({
        message: 'Order denied because of , insufficient quantity of product',
        status: false,
        data: result,
      });
      return;
    }
    //success response
    res.status(200).json({
      message: 'Order created successfully',
      status: true,
      data: result,
    });
  } catch (error: any) {
    next(error);
  }
};

//get revenue request/response controller
const getTotalRevenue = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    //try to get total revenue
    const result = await ordersService.getTotalRevenueFromDB();
    //success response
    res.status(200).json({
      message: 'Revenue calculated successfully',
      status: true,
      data: result,
    });
  } catch (error: any) {
    next(error);
  }
};

export const ordersController = {
  createOrder,
  getTotalRevenue,
};
