import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import logger from 'console';
import express from 'express';
import mongoose from 'mongoose';

import User from './routes/user.route';

dotenv.config();

const { log, error } = console;
const app = express();
const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/btc-naira';

mongoose.Promise = global.Promise;

mongoose.connect(MONGO_URI, { useNewUrlParser: true }, () => {
  log('Connection Successful');
});

app.use(cors());
app.use(morgan('combined', { immediate: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/v1', (req, res) => {
  return res.json({
    message: "Welcome to BTC Naira API",
  });
});

app.use('/v1/users', User);

app.listen(PORT, () => 
  logger.log(`Server running on ${PORT}`)
);
