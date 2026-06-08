interface BuildFilterClauseResult {
  whereClause: string;
  values: any[];
}

const buildFilterClause = (
  filters: Record<string, any>,
  queryFields: string[],
): BuildFilterClauseResult => {
  const conditions: string[] = [];
  const values: any[] = [];

  const entries = Object.entries(filters);

  entries.forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      const placeholderNumber = values.length + 1;

      if (queryFields.length > 0 && key === "q") {
        const queries = queryFields
          .map((field) => `${field} ILIKE $${placeholderNumber}`)
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

  return {
    whereClause,
    values,
  };
};

export default buildFilterClause;
