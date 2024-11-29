import { NextFunction, Request, Response } from 'express';
import config from '../config';

export const GenericError = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const statusCode = error.statusCode || 500;
  res.status(statusCode).json({
    message: error.message || 'Something went wrong!',
    success: false,
    error: error.errors || error,
    stack: config.node_env === 'development' ? error.stack : undefined,
  });
};
