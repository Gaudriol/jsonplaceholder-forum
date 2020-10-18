export const usersSelector = ({ users }) => users;

export const userByIdSelector = (userId) => ({ users }) =>
  users && users.find(({ id }) => String(id) === String(userId));
