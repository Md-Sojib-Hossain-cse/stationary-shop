import { IProduct } from './stationary-product.interface';
import { StationaryProductModel } from './stationary-product.mdoel';

//try to retrieve data from database
const getStationaryProductsFromDB = async () => {
  const result = await StationaryProductModel.find();
  return result;
};

//try to post single data on database
const createStationaryProductOnDB = async (data: IProduct) => {
  const result = await StationaryProductModel.create(data);
  return result;
};

//exporting all services
export const stationaryProductService = {
  getStationaryProductsFromDB,
  createStationaryProductOnDB,
};
