export const readUsers = () => ({
  type: "READ_USERS",
});

export const readUsersSuccess = (users) => ({
  type: "READ_USERS_SUCCESS",
  payload: users,
});

export const getUser = (userId) => ({
  type: "GET_USER",
  payload: userId,
});

export const getUserSuccess = (user) => ({
  type: "GET_USER_SUCCESS",
  payload: [user],
});
