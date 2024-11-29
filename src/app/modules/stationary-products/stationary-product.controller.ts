import { NextFunction, Request, Response } from 'express';
import { stationaryProductService } from './stationary-product.service';
import { IProduct, TQueryParams } from './stationary-product.interface';
import config from '../../config';

//stationary products get request/response controller
const getStationaryProducts = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
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
    //error response using generic error middleware
    next(error);
  }
};

//single stationary product get request/response controller
const getSingleStationaryProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    //params
    const productId = req?.params?.productId;
    //call service to retrieve data
    const result =
      await stationaryProductService.getSingleStationaryProductFromBD(
        productId,
      );
    //success response
    res.status(200).json({
      message: 'Product retrieved successfully',
      status: true,
      data: result,
    });
  } catch (error: any) {
    //error response
    next(error);
  }
};

//stationary product post request/response controller
const createStationaryProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
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
    next(error);
  }
};

//single stationary product update request/response controller
const updateAStationaryProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    //params
    const productId = req?.params?.productId;
    //data
    const updateData = req?.body;
    //call service to retrieve data
    const result = await stationaryProductService.updateAStationaryProductOnDB(
      productId,
      updateData,
    );
    //success response
    res.status(200).json({
      message:
        result === null
          ? 'There is no product exist with this information to update'
          : 'Product updated successfully',
      status: result === null ? false : true,
      data: result,
    });
  } catch (error: any) {
    //error response
    next(error);
  }
};

//single stationary product delete request/response controller
const deleteSingleStationaryProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    //params
    const productId = req?.params?.productId;
    //call service to retrieve data
    const result =
      await stationaryProductService.deleteSingleStationaryProductFromBD(
        productId,
      );
    //success response
    res.status(200).json({
      message:
        result === null
          ? 'There is no such product to delete'
          : 'Product deleted successfully',
      status: result === null ? false : true,
      data: {},
    });
  } catch (error: any) {
    //error response
    next(error);
  }
};

export const stationaryProductController = {
  getStationaryProducts,
  createStationaryProduct,
  getSingleStationaryProduct,
  updateAStationaryProduct,
  deleteSingleStationaryProduct,
};
