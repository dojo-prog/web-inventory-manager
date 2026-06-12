interface BuildFilterClauseResult {
  whereClause: string;
  values: any[];
  limitClause: string;
  offsetClause: string;
}

const buildFilterClause = (
  filters: Record<string, any>,
  queryFields: string[],
): BuildFilterClauseResult => {
  const { page, limit, ...dbFilters } = filters;

  const conditions: string[] = [];
  const values: any[] = [];

  const entries = Object.entries(dbFilters);

  entries.forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      const placeholderNumber = values.length + 1;

      if (queryFields.length > 0 && key === "q") {
        const queries = queryFields
          .map((field) => `${field}::text ILIKE $${placeholderNumber}`)
          .join(" OR ");

        conditions.push(`(${queries})`);
        values.push(`%${value}%`);
      } else {
        conditions.push(`${key} = $${placeholderNumber}`);
        values.push(value);
      }
    }
  });

  const whereClause =
    conditions.length > 0 ? `WHERE ${conditions.join(" AND ")}` : "";

  const returnData: BuildFilterClauseResult = {
    whereClause,
    values,
    limitClause: "",
    offsetClause: "",
  };

  if (page !== undefined && limit !== undefined) {
    const parsedPage = Number(page);
    const parsedLimit = Number(limit);

    if (!isNaN(parsedPage) && !isNaN(parsedLimit)) {
      const offset = (page - 1) * limit;
      values.push(limit, offset);

      returnData.limitClause = `LIMIT $${values.length - 1}`;
      returnData.offsetClause = `OFFSET $${values.length}`;
    }
  }

  return returnData;
};

export default buildFilterClause;
