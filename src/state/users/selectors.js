export const usersSelector = ({ users: { list } }) =>
  list.length ? list : null;

export const hasFullListUsersSelector = ({ users: { hasFullList } }) =>
  hasFullList;

export const userByIdSelector = (userId) => ({ users: { list } }) =>
  list.length && list.find(({ id }) => String(id) === String(userId));
