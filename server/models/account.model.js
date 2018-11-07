import mongoose from 'mongoose';

const Account = new mongoose.Schema({
  user_id: {
    type: String,
    required: true,
  },
  bank_name: {
    type: String,
    required: true,
  },
  account_name: {
    type: String,
    required: true,
  },
  account_number: {
    type: String,
    required: true,
  },
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }
});

export default mongoose.model('Account', Account);
