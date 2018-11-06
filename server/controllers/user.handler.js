import _ from 'lodash';

import * as db from '../helpers/db.operations';
import UserModel from '../models/user.model';

class User {
  static create(request, response) {
    const userData = _.pick(request.body, ['firstname', 'lastname', 'email', 'phone', 'bvn']);
    return db.createUser(UserModel, userData)
      .then(user => {
        return response.status(201)
          .json(user);
      })
      .catch(error => response.status(400).json({ error }));
  }
  
}

export default User;
