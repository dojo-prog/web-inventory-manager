import {
  AddSupplierInput,
  Supplier,
  SupplierFilters,
} from "@web-inventory-manager/shared";
import db from "../../database/db";
import buildFilterClause from "../../utils/buildFilterClause";
import buildInsertFields from "../../utils/buildInsertFields";

export const findAll = async (
  filters: SupplierFilters,
): Promise<Supplier[]> => {
  const { whereClause, values } = buildFilterClause(filters, [
    "name",
    "supplier_code",
    "contact_name",
    "email",
    "website",
    "id::text",
  ]);

  const result = await db.query(
    `
    SELECT * FROM suppliers
    ${whereClause}
    `,
    values,
  );

  return result.rows;
};

export const findById = async (supplierId: string): Promise<Supplier> => {
  const result = await db.query(
    `
    SELECT *
    FROM suppliers
    WHERE id = $1;
    `,
    [supplierId],
  );

  return result.rows[0];
};

export const create = async (inputs: AddSupplierInput): Promise<Supplier> => {
  const { keysStr, placeholders, values } = buildInsertFields(inputs);

  const result = await db.query(
    `
    INSERT INTO suppliers (${keysStr})
    VALUES (${placeholders})
    RETURNING *;
    `,
    values,
  );

  return result.rows[0];
};

export const update = async (
  supplierId: string,
  changes: Partial<Supplier>,
): Promise<Supplier> => {
  const { setClause, values } = buildUpdateFields(changes);
  values.push(supplierId);

  const result = await db.query(
    `
    UPDATE suppliers 
    SET ${setClause}
    WHERE id = $${values.length}
    RETURNING *
    `,
    values,
  );

  return result.rows[0];
};

export const toggleStatus = async (supplierId: string): Promise<Supplier> => {
  const supplier = await findById(supplierId);

  const result = await db.query(
    `
    UPDATE suppliers
    SET is_active = $1
    RETURNING *;
    `,
    [!supplier.is_active],
  );

  return result.rows[0];
};
