export const paginateData = (data, page, perPage = 10) => {
  const start = (page - 1) * perPage;
  const end = perPage * page;
  const totalPages = data.length / perPage;

  return [data.slice(start, end), totalPages];
};
