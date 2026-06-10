import {
  AddProductInput,
  Product,
  ProductFilter,
  UpdateProductInput,
} from "@web-inventory-manager/shared";
import buildFilterClause from "../../utils/buildFilterClause";
import db from "../../database/db";
import buildInsertFields from "../../utils/buildInsertFields";

export const findAll = async (filters: ProductFilter): Promise<Product[]> => {
  const { whereClause, values, limitClause, offsetClause } = buildFilterClause(
    filters,
    ["id", "name"],
  );

  const result = await db.query(
    `
    SELECT * 
    FROM products
    ${whereClause}
    ${limitClause} ${offsetClause}
    `,
    values,
  );

  return result.rows;
};

export const findById = async (productId: string): Promise<Product> => {
  const result = await db.query(
    `
    SELECT * 
    FROM products
    WHERE id = $1;
    `,
    [productId],
  );

  return result.rows[0];
};

export const create = async (inputs: AddProductInput): Promise<Product> => {
  const { keysStr, placeholders, values } = buildInsertFields(inputs);

  const result = await db.query(
    `
    INSERT INTO products (${keysStr})
    VALUES (${placeholders})
    RETURNING *;
    `,
    values,
  );

  return result.rows[0];
};

export const update = async (
  productId: string,
  changes: Partial<Product>,
): Promise<Product> => {
  const { setClause, values } = buildUpdateFields(changes);
  values.push(productId);

  const result = await db.query(
    `
    UPDATE products 
    SET ${setClause}
    WHERE id = $${values.length}
    RETURNING *;
    `,
    values,
  );

  return result.rows[0];
};

export const remove = async (productId: string): Promise<Product> => {
  const result = await db.query(
    `
    DELETE FROM products
    WHERE id = $1
    RETURNING *;
    `,
    [productId],
  );

  return result.rows[0];
};
