const generateChanges = (
  original: Record<string, any>,
  modified: Record<string, any>,
): Record<string, any> => {
  let changes: Record<string, any> = {};

  const comparisonKeys = Object.keys(modified);

  comparisonKeys.forEach((k) => {
    if (original[k] !== modified[k]) {
      changes[k] = modified[k];
    }
  });

  return changes;
};

export default generateChanges;
