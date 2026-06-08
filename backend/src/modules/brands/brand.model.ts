import {
  AddBrandInput,
  Brand,
  BrandFilters,
  UpdateBrandInput,
} from "@web-inventory-manager/shared";
import buildFilterClause from "../../utils/buildFilterClause";
import db from "../../database/db";
import buildInsertFields from "../../utils/buildInsertFields";

export const findAll = async (filters: BrandFilters): Promise<Brand[]> => {
  const { whereClause, values } = buildFilterClause(filters, ["name"]);

  const result = await db.query(
    `
    SELECT * 
    FROM brands
    ${whereClause}
    `,
    values,
  );

  return result.rows;
};

export const findById = async (brandId: string): Promise<Brand> => {
  const result = await db.query(
    `
    SELECT * 
    FROM brands
    WHERE id = $1;
    `,
    [brandId],
  );

  return result.rows[0];
};

export const create = async (inputs: AddBrandInput): Promise<Brand> => {
  const { keysStr, placeholders, values } = buildInsertFields(inputs);

  const result = await db.query(
    `
    INSERT INTO brands (${keysStr})
    VALUES (${placeholders})
    RETURNING *;
    `,
    values,
  );

  return result.rows[0];
};

export const update = async (
  brandId: string,
  changes: Partial<Brand>,
): Promise<Brand> => {
  const { setClause, values } = buildUpdateFields(changes);
  values.push(brandId);

  const result = await db.query(
    `
    UPDATE brands
    SET ${setClause}
    WHERE id = $${values.length}
    RETURNING *;
    `,
    values,
  );

  return result.rows[0];
};

export const remove = async (brandId: string): Promise<Brand> => {
  const result = await db.query(
    `
    DELETE FROM brands
    WHERE id = $1
    `,
    [brandId],
  );

  return result.rows[0];
};
