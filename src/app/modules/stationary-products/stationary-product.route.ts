import express from 'express';
import { stationaryProductController } from './stationary-product.controller';

//routers
export const stationaryProductRoute = express.Router();

//stationary product get route
stationaryProductRoute.get(
  '/',
  stationaryProductController.getStationaryProducts,
);

stationaryProductRoute.post(
  '/',
  stationaryProductController.createStationaryProduct,
);
