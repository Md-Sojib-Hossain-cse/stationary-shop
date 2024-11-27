//stationary product interface
export interface IProduct {
  name: string;
  brand: string;
  price: number;
  category:
    | 'Writing'
    | 'Office Supplies'
    | 'Art Supplies'
    | 'Educational'
    | 'Technology';
  description: string;
  quantity: number;
  inStock: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

//query params type
export type TQueryParams = string | undefined;

//query object type
export type TQueryObj = {
  name?: string;
  brand?: string;
  category?: string;
};
