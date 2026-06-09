import { ProductImage } from "@web-inventory-manager/shared";
import db from "../../database/db";
import buildInsertFields from "../../utils/buildInsertFields";

export const findAll = async (productId: string): Promise<ProductImage[]> => {
  const result = await db.query(
    `
    SELECT * 
    FROM product_images
    WHERE product_id = $1;
    `,
    [productId],
  );

  return result.rows;
};

export const findById = async (
  productImageId: string,
): Promise<ProductImage> => {
  const result = await db.query(
    `
    SELECT *
    FROM product_images
    WHERE id = $1;
    `,
    [productImageId],
  );

  return result.rows[0];
};

export const add = async (
  productId: string,
  inputs: Record<string, any>,
): Promise<ProductImage> => {
  const { keysStr, placeholders, values } = buildInsertFields(inputs);

  const result = await db.query(
    `
    INSERT INTO product_images (${keysStr})
    VALUES (${placeholders})
    RETURNING *;
    `,
    values,
  );

  return result.rows[0];
};

export const remove = async (
  productId: string,
  productImageId: string,
): Promise<ProductImage> => {
  const result = await db.query(
    `
    DELETE FROM product_images
    WHERE id = $1
      AND product_id = $2
    `,
    [productImageId, productId],
  );

  return result.rows[0];
};
