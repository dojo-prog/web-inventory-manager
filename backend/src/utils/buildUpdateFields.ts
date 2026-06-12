interface UpdateFieldsResult {
  setClause: string;
  values: any[];
}

const buildUpdateFields = (
  changes: Record<string, any>,
): UpdateFieldsResult => {
  const changesKeys = Object.keys(changes).filter(
    (k) => changes[k] !== undefined && changes[k] !== null,
  );

  const setClause = changesKeys.map((k, i) => `${k} = $${i + 1}`).join(", ");
  const values = changesKeys.map((k) => changes[k]);

  return {
    setClause,
    values,
  };
};

export default buildUpdateFields;
