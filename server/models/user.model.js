import mongoose from 'mongoose';
import md5 from 'md5';

/**
 * @todo
 * Fix phone number and bvn regex
 * Add ref when other tables are added
 */

const User = new mongoose.Schema({
  email: {
    type: String,
    trim: true,
    lowercase: true,
    required: [true, 'provide an email address'],
    unique: [true, 'a user with that email exists'],
    validate: {
      validator: value => 
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(value),
      message: 'invalid email address',
    },
  },
  firstname: {
    type: String,
    trim: true,
    min: [2, 'name too short'],
    max: [60, 'name too long'],
    required: [true, 'please provide a name'], 
  },
  lastname: {
    type: String,
    trim: true,
    min: [2, 'lastname too short'],
    max: [60, 'lastname too long'],
    required: [true, 'please provide a name'], 
  },
  phone: {
    type: String,
    min: [10],
    max: [14],
  },
  bvn: {
    type: String,
    max: [11, 'invalid bvn number'],
    required: true,
    unique: [true, 'bvn is mapped to another user'],
  },
  referrer: {
    type: String,
  },
  confirmed: {
    type: Boolean,
    default: false,
  },
  hash: {
    type: String
  },
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
});

User.pre('save', function(next) {
  const user = this;
  if(user.hash) 
    return next();
  
  user.hash = md5(user._id);
  return next();
});

export default mongoose.model('User', User);
