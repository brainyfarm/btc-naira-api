import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import logger from 'console';
import express from 'express';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.get('/api/v1', (req, res) => {
  return res.json({
    message: "Welcome to BTC Naira API",
  });
});


app.listen(PORT, () => 
  logger.log(`Server running on ${PORT}`)
);
