export const createItem = (model, data) => {
  const newEntryData = new model(data);
   return new Promise((resolve, reject) => {
      return newEntryData.save()
        .then((instance) => resolve(instance))
        .catch((error) => reject(error))
  });
};

export const createUser = (UserModel, newUserData) => {
  return createItem(UserModel, newUserData)
    .then(user => user)
    .catch(error => error);
}

export const getUser = (UserModel, queries) => {
  return UserModel
}

export const getUserTransactions = () => {

}

export const getUserDataPublic = () => {

}

export const createOrder = () => {

}

export const approveOrder = () => {

}

export const cancelOrder = () => {

}

