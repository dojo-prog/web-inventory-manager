import {
  AddSupplierInput,
  Supplier,
  SupplierFilterResult,
  SupplierFilters,
} from "@web-inventory-manager/shared";
import db from "../../database/db";
import buildFilterClause from "../../utils/buildFilterClause";
import buildInsertFields from "../../utils/buildInsertFields";
import buildUpdateFields from "../../utils/buildUpdateFields";

export const findAll = async (
  filters: SupplierFilters,
): Promise<SupplierFilterResult> => {
  const { whereClause, values, limitClause, offsetClause } = buildFilterClause(
    filters,
    ["name", "supplier_code", "contact_name", "email", "website", "id::text"],
  );

  const result = await db.query(
    `
    SELECT *,
      COUNT(*) OVER()::INT AS total_count
    FROM suppliers  
    ${whereClause}
    ORDER BY created_at DESC
    ${limitClause} ${offsetClause}
    `,
    values,
  );

  const total_count = result.rows.length > 0 ? result.rows[0].total_count : 0;
  const suppliers = result.rows.map(
    ({ total_count, ...suppliers }) => suppliers,
  );

  return { suppliers, total_count };
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
