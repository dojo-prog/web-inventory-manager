import {
  AddProductVariantInput,
  ProductVariant,
  ProductVariantFilters,
} from "@web-inventory-manager/shared";
import buildFilterClause from "../../utils/buildFilterClause";
import db from "../../database/db";
import buildInsertFields from "../../utils/buildInsertFields";
import AppError from "../../utils/AppError";
import buildUpdateFields from "../../utils/buildUpdateFields";

export const findAll = async (productId: string): Promise<ProductVariant[]> => {
  const result = await db.query(
    `
    SELECT * 
    FROM product_variants
    WHERE product_id = $1
    `,
    [productId],
  );

  return result.rows;
};

export const findById = async (
  productId: string,
  variantId: string,
): Promise<ProductVariant> => {
  const result = await db.query(
    `
    SELECT *
    FROM product_variants
    WHERE id = $1 
      AND product_id = $2;
    `,
    [variantId, productId],
  );

  return result.rows[0];
};

export const create = async (
  productId: string,
  inputs: AddProductVariantInput,
): Promise<ProductVariant> => {
  const { keysStr, placeholders, values } = buildInsertFields(inputs);

  const result = await db.query(
    `
    INSERT INTO product_variants (${keysStr})
    VALUES (${placeholders})
    RETURNING *;
    `,
    values,
  );

  return result.rows[0];
};

export const update = async (
  productId: string,
  variantId: string,
  changes: Partial<ProductVariant>,
): Promise<ProductVariant> => {
  const { setClause, values } = buildUpdateFields(changes);
  values.push(variantId);
  values.push(productId);

  const result = await db.query(
    `
    UPDATE product_variants
    SET ${setClause}
    WHERE id = $${values.length - 1}
      AND product_id = $${values.length} 
    RETURNING *;
    `,
    values,
  );

  return result.rows[0];
};

export const remove = async (
  productId: string,
  variantId: string,
): Promise<ProductVariant> => {
  const result = await db.query(
    `
    DELETE FROM product_variants
    WHERE id = $1
      AND product_id = $2
    RETURNING *;
    `,
    [variantId, productId],
  );

  return result.rows[0];
};
