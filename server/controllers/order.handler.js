import _ from 'lodash';

import Account from '../models/account.model';
import Order from '../models/order.model';
import User from '../models/user.model';
import Wallet from '../models/wallet.model';

/**
 * @todo
 * Add controller-level validations
 */

class Transaction {
  static async create(request, response) {
    const requestBody = request.body;
    const { type, user_type, email } = requestBody;
    
    const orderPayload = _.pick(requestBody, ['type', 'email', 'asset', 'qty', 'price', ]);
    const userPayload = user_type === 'new' ?
      _.pick(requestBody, ['email', 'firstname', 'lastname', 'phone', 'bvn', 'referrer', ]) : null;
    const accountPayload = type === 'sell' ?
      _.pick(requestBody, ['account_name', 'account_number', 'bank_name', ]) : null;
    const walletpayload = type === 'buy' ?
      _.pick(requestBody, ['wallet_currency', 'wallet_address', ]) : null;


    let userID = await (this.findUserIDByEmail(email));
    userID = userID ? userID : await (this.registerUserGetID(userPayload));

  }

  findUserIDByEmail(email) {
    email = email.trim();
    return new Promise((resolve, reject) => {
      return User.findOne({ email }, '_id')
        .then(user => resolve(user._id))
        .catch(error => reject(error))
      });
  }

  registerUserGetID(userData) {
    return new Promise((resolve, reject) => {
      const newUser = new User(userData);
      return newUser.save()
        .then(user => resolve(user._id))
        .catch(error => reject(error));
    });

    // saveTransaction(orderDetails) {

    //   return 
    // }
  }



}


export default Transaction;
