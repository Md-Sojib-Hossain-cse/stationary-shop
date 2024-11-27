import {
  IProduct,
  TQueryObj,
  TQueryParams,
} from './stationary-product.interface';
import { StationaryProductModel } from './stationary-product.mdoel';

//try to retrieve data from database
const getStationaryProductsFromDB = async (
  productName: TQueryParams,
  productBrand: TQueryParams,
  productCategory: TQueryParams,
) => {
  //take a query object
  let queryObj: TQueryObj = {};
  //if queries exists then include them into query object
  if (productName) {
    queryObj.name = productName;
  }
  if (productBrand) {
    queryObj.brand = productBrand;
  }
  if (productCategory) {
    queryObj.category = productCategory;
  }

  const result = await StationaryProductModel.find(queryObj);
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
