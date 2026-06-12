import {
  AddBrandInput,
  Brand,
  BrandFilters,
  DetailedBrand,
} from "@web-inventory-manager/shared";
import buildFilterClause from "../../utils/buildFilterClause";
import db from "../../database/db";
import buildInsertFields from "../../utils/buildInsertFields";
import buildUpdateFields from "../../utils/buildUpdateFields";

const DETAILED_BRAND_FIELDS = `
  id, 
  name, 
  logo_url,
  logo_path,
  created_at,
  (
    SELECT COUNT(*)::INT
    FROM products
    WHERE products.brand_id = brands.id
  ) AS active_units_count
`;

export const findAll = async (
  filters: BrandFilters,
): Promise<DetailedBrand[]> => {
  const { whereClause, values, limitClause, offsetClause } = buildFilterClause(
    filters,
    ["id", "name"],
  );

  const result = await db.query(
    `
    SELECT ${DETAILED_BRAND_FIELDS}
    FROM brands
    ${whereClause}
    ${limitClause} ${offsetClause}
    `,
    values,
  );

  return result.rows;
};

export const findById = async (brandId: string): Promise<DetailedBrand> => {
  const result = await db.query(
    `
    SELECT ${DETAILED_BRAND_FIELDS}
    FROM brands
    WHERE id = $1;
    `,
    [brandId],
  );

  return result.rows[0];
};

export const create = async (inputs: AddBrandInput): Promise<DetailedBrand> => {
  const { keysStr, placeholders, values } = buildInsertFields(inputs);

  const result = await db.query(
    `
    INSERT INTO brands (${keysStr})
    VALUES (${placeholders})
    RETURNING id;
    `,
    values,
  );

  return await findById(result.rows[0].id);
};

export const update = async (
  brandId: string,
  changes: Partial<Brand>,
): Promise<DetailedBrand> => {
  const { setClause, values } = buildUpdateFields(changes);
  values.push(brandId);

  const result = await db.query(
    `
    UPDATE brands
    SET ${setClause}
    WHERE id = $${values.length}
    RETURNING id;
    `,
    values,
  );

  return await findById(result.rows[0].id);
};

export const remove = async (brandId: string): Promise<Brand> => {
  const result = await db.query(
    `
    DELETE FROM brands
    WHERE id = $1
    RETURNING *;
    `,
    [brandId],
  );

  return result.rows[0];
};
