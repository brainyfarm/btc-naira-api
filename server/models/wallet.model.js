import mongoose from 'mongoose';

const Wallet = new mongoose.Schema({
  user_id: {
    type: String,
    required: true,
    ref: 'User',
  },
  currency: {
    type: String,
    required: true,
    enum: ['btc', 'eth', 'bch', 'ltc', 'dash', 'xrp'],
  },
  address: {
    type: String,
    required: true,
  },
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }
});

export default mongoose.model('Wallet', Wallet);
