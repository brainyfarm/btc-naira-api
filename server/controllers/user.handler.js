import _ from 'lodash';

import UserModel from '../models/user.model';
import * as db from '../helpers/db.operations';


class User {
  static create(request, response) {
    console.log(request.body);
    const userData = _.pick(request.body, [
      'firstname', 'lastname', 'email', 'phone', 'bvn',
    ]);
    return db.createUser(UserModel, userData)
      .then(instance => response.json(instance))
  }
}

export default User;
