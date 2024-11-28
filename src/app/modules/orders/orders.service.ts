import mongoose from 'mongoose';
import { StationaryProductModel } from '../stationary-products/stationary-product.mdoel';
import { IOrders } from './orders.interface';
import { OrderModel } from './orders.model';

const createOrderInDB = async (orderData: IOrders) => {
  //parsed id into mongodb object id
  let productId = new mongoose.mongo.ObjectId(orderData.product);

  //Check if order can make
  const orderedProduct = await StationaryProductModel.aggregate([
    //stage 1
    {
      $match: {
        $and: [{ _id: productId }, { quantity: { $gte: orderData.quantity } }],
      },
    },
  ]);
  // if ordered product didn't exists or quantity isn't enough
  if (!orderedProduct.length) {
    return {};
  }
  //order created on database
  const result = await OrderModel.create(orderData);

  //reducing product quantity on db
  const updatedData = await StationaryProductModel.aggregate([
    //stage 1
    {
      $match: { _id: productId },
    },
    //stage 3
    {
      $project: {
        _id: 0,
        quantity: { $subtract: ['$quantity', orderData.quantity] },
        inStock: {
          $cond: {
            if: {
              $gt: [{ $subtract: ['$quantity', orderData.quantity] }, 0],
            },
            then: true,
            else: false,
          },
        },
      },
    },
  ]);

  //update ordered document in database
  await StationaryProductModel.findByIdAndUpdate(
    orderData.product,
    updatedData[0],
    {
      new: true,
    },
  );

  return result;
};

export const ordersService = {
  createOrderInDB,
};
