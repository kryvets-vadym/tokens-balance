import { Request, Response, NextFunction } from 'express';
import { isValidEthereumAddress } from '../helpers/isValidEthereumAddress.js';

export const validateEthereumAddress = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const address = req.params.address;

  if (!isValidEthereumAddress(address)) {
    res.status(400).json({ error: 'Invalid Ethereum address' });
  } else {
    next();
  }
};
