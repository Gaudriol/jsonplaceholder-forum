export const usersSelector = ({ users }) => (users.length ? users : null);

export const userByIdSelector = (userId) => ({ users }) =>
  users.length && users.find(({ id }) => String(id) === String(userId));
