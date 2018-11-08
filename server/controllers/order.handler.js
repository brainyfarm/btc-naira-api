import _ from 'lodash';

import Account from '../models/account.model';
import Order from '../models/order.model';
import User from '../models/user.model';
import Wallet from '../models/wallet.model';


import * as db from '../helpers/db.operations';

/**
 * @todo
 * Add controller-level validations
 */


class Transaction {
  static async create(request, response) {
    const requestBody = request.body;
    const { user_id, account_id, wallet_id, type } = requestBody;

    const userPayload = 
        _.pick(requestBody, ['email', 'firstname', 'lastname', 'phone', 'bvn', 'referrer', ]);
    const accountPayload = 
        _.pick(requestBody, ['account_name', 'account_number', 'bank_name', ]);
    const walletpayload = 
        _.pick(requestBody, ['wallet_currency', 'wallet_address', ]);
    const orderCommon = _.pick(requestBody, ['type', 'asset', 'qty', 'price', ]);

      try {
        const userID = user_id ? user_id : await db.saveRecordGetID(User, userPayload);
        const accountID = account_id ?
            account_id : await db.saveRecordGetID(Account, {...accountPayload, user_id: userID});
        const walletID = wallet_id ?
            wallet_id : await db.saveRecordGetID(Wallet, {...walletpayload, user_id: userID});

        const orderPayload = type === 'buy' ? {
          ...orderCommon,
          user_id: userID,
          wallet_id: walletID,
        } : {
          ...orderCommon,
          user_id: userID,
          account_id: accountID,
        }
        
        const orderDetails = await db.createAndReturn(Order, orderPayload);
        return response.status(201)
          .json(orderDetails);

      } catch(error) {
        return response.status(400)
          .json({ error })
      }
  }
}


export default Transaction;
