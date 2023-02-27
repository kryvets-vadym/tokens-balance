import { Request, Response } from 'express';
import { getWalletBalance } from '../services/balanceService.js';
import { runJob, writeToFile } from '../helpers/balanceJob.js';

export const getTokensBalance = async (req: Request, res: Response) => {
  const { address } = req.params;

  const walletBalance = await getWalletBalance(address);

  res.send(walletBalance);

  await writeToFile(walletBalance)

  await runJob();
};
