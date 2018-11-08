import Account from '../models/account.model';
import Order from '../models/order.model';
import User from '../models/user.model';
import Wallet from '../models/wallet.model';


export const findUserIDByEmail = (email) => {
  email = email.trim();
  return new Promise((resolve, reject) => {
    return User.findOne({ email }, '_id')
      .then(user => resolve(user))
      .catch(error => reject(error))
    });
}

export const saveRecordGetID = (Model, recordData) => {
  return new Promise((resolve, reject) => {
    const newRecord = new Model(recordData);
    return newRecord.save()
      .then(record => resolve(record._id))
      .catch(error => reject(error));
  });
}

export const createAndReturn = (Model, recordData) => {
  return new Promise((resolve, reject) => {
    const newRecord = new Model(recordData);
    return newRecord.save()
      .then(record => resolve(record))
      .catch(error => reject(error));
  });
}
