const getPaginationRange = (
  total_count: number,
  page: number,
  limit: number,
) => {
  const from = total_count === 0 ? 0 : (page - 1) * limit + 1;
  const to = Math.min(page * limit, total_count);

  return {
    from,
    to,
  };
};

export default getPaginationRange;
