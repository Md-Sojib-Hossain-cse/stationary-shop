import express from 'express';
import { stationaryProductController } from './stationary-product.controller';

//routers
export const stationaryProductRoute = express.Router();

//stationary product get route
stationaryProductRoute.get(
  '/',
  stationaryProductController.getStationaryProducts,
);

//single stationary product get route
stationaryProductRoute.get(
  '/:productId',
  stationaryProductController.getSingleStationaryProduct,
);

//stationary product post route
stationaryProductRoute.post(
  '/',
  stationaryProductController.createStationaryProduct,
);
