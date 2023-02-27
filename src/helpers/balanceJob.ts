import fs from 'fs/promises';
import path from 'path';
import config from '../config/config.js';
import { getWalletBalance } from '../services/balanceService.js';
import { UserBalance } from '../types/types.js';

const {
  BALANCE_DIR_NAME,
  BALANCE_FILE_NAME,
  TEST_WALLET_ADDRESS
} = config;

export const writeToFile = async (balance: UserBalance) => {
  const balanceFilePath: string = path.resolve(BALANCE_DIR_NAME, BALANCE_FILE_NAME);
  await fs.writeFile(balanceFilePath, JSON.stringify(balance));
  console.log('The result is saved!');
}

export const fetchBalances = async () => {
  const balance: UserBalance = await getWalletBalance(TEST_WALLET_ADDRESS);
  await writeToFile(balance);
}

export const runJob = async () => {
  console.log('Job started...');
  await fetchBalances();
  await new Promise(resolve => setTimeout(resolve, 60000));
  // Recursively call the function
  await runJob();
}
