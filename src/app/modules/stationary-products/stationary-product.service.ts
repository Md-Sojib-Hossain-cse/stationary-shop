import {
  IProduct,
  TQueryObj,
  TQueryParams,
} from './stationary-product.interface';
import { StationaryProductModel } from './stationary-product.mdoel';

//retrieve stationary product data from database
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

//get single stationary product from database based on id
const getSingleStationaryProductFromBD = async (id: string | undefined) => {
  const result = await StationaryProductModel.findById(id);
  return result;
};

//post single data on database
const createStationaryProductOnDB = async (data: IProduct) => {
  const result = await StationaryProductModel.create(data);
  return result;
};

//update a stationary product on database
const updateAStationaryProductOnDB = async (
  id: string | undefined,
  data: IProduct,
) => {
  //update current date
  data.updatedAt = new Date();

  const result = await StationaryProductModel.findByIdAndUpdate(id, data, {
    new: true,
  });
  return result;
};

//exporting all services
export const stationaryProductService = {
  getStationaryProductsFromDB,
  createStationaryProductOnDB,
  getSingleStationaryProductFromBD,
  updateAStationaryProductOnDB,
};
