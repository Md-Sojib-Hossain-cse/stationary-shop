import { model, Schema } from 'mongoose';
import { IProduct } from './stationary-product.interface';

// stationary product schema
const stationaryProductSchema = new Schema<IProduct>({
  name: {
    type: String,
    required: [true, 'Name must be a string'],
    trim: true,
    maxlength: [20, 'Name cannot be more then 20 characters'],
    validate: {
      validator: function (value: string) {
        const nameCapitalizeStr =
          value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
        if (value !== nameCapitalizeStr) {
          return false;
        } else {
          return true;
        }
      },
      message: '{VALUE} is not in capitalize format',
    },
  },
  brand: {
    type: String,
    required: [true, 'Brand must be a string'],
    trim: true,
    maxlength: [30, 'Brand cannot be more then 30 characters'],
    validate: {
      validator: function (value: string) {
        const BrandFirstChar = value.charAt(0).toUpperCase();
        if (value.charAt(0) !== BrandFirstChar) {
          return false;
        } else {
          return true;
        }
      },
      message: "{VALUE}'s first character should be an uppercase",
    },
  },
  price: {
    type: Number,
    required: [true, 'Price must be a positive number'],
    min: [1, 'Price cannot be less then 1'],
    max: [1000000, 'Price cannot be more then 1000000'],
  },
  category: {
    type: String,
    trim: true,
    required: [
      true,
      'Category must be --> Writing | Office Supplies | Art Supplies | Educational | Technology <-- one of this.',
    ],
    enum: {
      values: [
        'Writing',
        'Office Supplies',
        'Art Supplies',
        'Educational',
        'Technology',
      ],
      message: '{VALUE} is not a valid category',
    },
  },
  description: {
    type: String,
    trim: true,
    required: [true, 'Product must have a brief description'],
  },
  quantity: {
    type: Number,
    required: [true, 'Your product should be a quantity'],
    min: [0, 'Product quantity should be a positive number'],
    default: 0,
  },
  inStock: {
    type: Boolean,
    required: [true, 'Product stock status should be true or false'],
  },
});

export const StationaryProductModel = model<IProduct>(
  'stationary-product',
  stationaryProductSchema,
);
