import express, { Request, Response } from 'express';
import cors from 'cors';
import { stationaryProductRoute } from './app/modules/stationary-products/stationary-product.route';
import orderRoute from './app/modules/orders/order.route';

const app = express();

// middlewares
app.use(express.json()); //parsing json data
app.use(cors());

//custom middlewares
app.use('/api/products', stationaryProductRoute);
app.use('/api/orders', orderRoute);

//root path
app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Stationary Shop..!📖');
});

export default app;
