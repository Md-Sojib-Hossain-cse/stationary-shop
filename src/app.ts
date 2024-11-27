import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();

// middlewares
app.use(express.json());      //parsing json data
app.use(cors());

//root path
app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Stationary Shop..!📖');
});

export default app;
