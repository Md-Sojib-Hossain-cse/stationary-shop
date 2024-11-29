//orders interface
export interface IOrders {
  email: string;
  product: string;
  quantity: number;
  totalPrice: number;
  createdAt?: Date;
  updatedAt?: Date;
}
