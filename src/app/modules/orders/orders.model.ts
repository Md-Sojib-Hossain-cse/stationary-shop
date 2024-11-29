import { model, Schema } from 'mongoose';
import { IOrders } from './orders.interface';
import { StationaryProductModel } from '../stationary-products/stationary-product.mdoel';

const OrdersSchema = new Schema<IOrders>({
  email: {
    type: String,
    trim: true,
    required: [true, 'Email is Required'],
    validate: {
      validator: async function (value: string) {
        //validating email using regex
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
      },
      message: '{VALUE} is not in a valid email format',
    },
  },
  product: {
    type: Schema.Types.ObjectId,
    ref: StationaryProductModel.collection.name,
    required: [true, "Order can't be placed without a valid product"],
  },
  quantity: {
    type: Number,
    required: [true, 'Product quantity is required'],
    min: [1, 'At least one product required for order'],
  },
  totalPrice: {
    type: Number,
    required: [true, 'Total price is required'],
    min: [0, 'Price should be a positive number'],
  },
  createdAt: {
    type: Date,
    immutable: true,
  },
  updatedAt: {
    type: Date,
  },
});

OrdersSchema.pre('save', async function (this, next) {
  this.createdAt = new Date();
  this.updatedAt = new Date();
  next();
});

export const OrderModel = model('orders', OrdersSchema);
