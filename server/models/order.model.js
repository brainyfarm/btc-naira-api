import moment from 'moment';
import mongoose from 'mongoose';

const Order = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    enum: ['buy', 'sell'],
  },
  user_id: {
    type: String,
    required: true,
  },
  asset: {
    type: String,
    required: true,
  },
  qty: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  account_id: {
    type: String,
    ref: 'Account',
    default: null,
  },
  open_date: {
    type: Number,
    default: moment().unix(),
  },
  status: {
    type: String,
    default: 'pending',
    enum: ['pending', 'failed', 'cancelled', 'complete'],
  },
  wallet_id: {
    type: String,
    default: null,
  },
  closed_date: {
    type: Number,
  }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
});

export default mongoose.model('Order', Order);
