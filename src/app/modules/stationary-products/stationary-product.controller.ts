import { Request, Response } from 'express';
import { stationaryProductService } from './stationary-product.service';
import { IProduct } from './stationary-product.interface';

//stationary products get request/response controller
const getStationaryProducts = async (req: Request, res: Response) => {
  try {
    //call service to retrieve data
    const result = await stationaryProductService.getStationaryProductsFromDB();
    //success response
    res.status(200).json({
      message: 'Products retrieved successfully',
      status: true,
      data: result,
    });
  } catch (error) {
    //error response
    res.status(500).json({
      message: 'Something went wrong!',
      success: false,
      data: [],
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
  } catch (error) {
    res.status(500).json({
      message: 'Something went wrong!',
      success: false,
      data: {},
    });
  }
};

export const stationaryProductController = {
  getStationaryProducts,
  createStationaryProduct,
};
