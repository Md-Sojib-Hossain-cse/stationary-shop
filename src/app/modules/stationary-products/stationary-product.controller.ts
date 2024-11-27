import { Request, Response } from 'express';
import { stationaryProductService } from './stationary-product.service';
import { IProduct, TQueryParams } from './stationary-product.interface';
import config from '../../config';

//stationary products get request/response controller
const getStationaryProducts = async (req: Request, res: Response) => {
  try {
    //queries
    const productName = req?.query?.name;
    const productBrand = req?.query?.brand;
    const productCategory = req?.query?.category;
    //call service to retrieve data
    const result = await stationaryProductService.getStationaryProductsFromDB(
      productName as TQueryParams,
      productBrand as TQueryParams,
      productCategory as TQueryParams,
    );
    //success response
    res.status(200).json({
      message: 'Products retrieved successfully',
      status: true,
      data: result,
    });
  } catch (error: any) {
    //error response
    res.status(500).json({
      message: error.message,
      success: false,
      error: error,
      stack: config.node_env === 'development' ? error.stack : undefined,
    });
  }
};

//stationary product post request/response controller
const createStationaryProduct = async (req: Request, res: Response) => {
  try {
    const data: IProduct = req.body;
    const result =
      await stationaryProductService.createStationaryProductOnDB(data);

    res.status(200).json({
      message: 'Product created successfully',
      success: true,
      data: result,
    });
  } catch (error: any) {
    console.log(error);
    res.status(500).json({
      message: error.message,
      success: false,
      error: error,
      stack: config.node_env === 'development' ? error.stack : undefined,
    });
  }
};

export const stationaryProductController = {
  getStationaryProducts,
  createStationaryProduct,
};
