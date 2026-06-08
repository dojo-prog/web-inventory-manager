interface BuildInsertFieldsResult {
  keysStr: string;
  placeholders: string;
  values: any[];
}

const buildInsertFields = (
  inputs: Record<string, any>,
): BuildInsertFieldsResult => {
  const inputKeys = Object.keys(inputs).filter((k) => inputs[k] !== undefined);
  const values = inputKeys.map((k) => inputs[k]);

  const keysStr = inputKeys.join(", ");
  const placeholders = inputKeys.map((_, i) => `$${i + 1}`).join(", ");

  return { keysStr, placeholders, values };
};

export default buildInsertFields;
