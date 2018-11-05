export const createItem = (model, data) => {
  const newEntryData = new model(data);
   return new Promise((resolve, reject) => {
     console.log("Inside here .......")
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

