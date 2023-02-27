import express from 'express';
import config from './config/config.js'
import balanceRouter from './routes/balanceRouter.js';

const app = express();
const PORT = config.PORT || 3000;
app.use(express.json());

app.use('/api', balanceRouter);

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server started on port ${PORT}`);
});
