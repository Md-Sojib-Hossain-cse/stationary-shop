import { Schema } from 'mongoose';

//orders interface
export interface IOrders {
  email: string;
  product: Schema.Types.ObjectId;
  quantity: number;
  totalPrice: number;
  createdAt?: Date;
  updatedAt?: Date;
}
