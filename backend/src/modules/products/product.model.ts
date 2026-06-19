import {
  AddProductInput,
  Product,
  ProductFilter,
  ProductFilterResult,
  ProductWithRelations,
  UpdateProductInput,
} from "@web-inventory-manager/shared";
import buildFilterClause from "../../utils/buildFilterClause";
import db from "../../database/db";
import buildInsertFields from "../../utils/buildInsertFields";
import buildUpdateFields from "../../utils/buildUpdateFields";

const BASE_PRODUCT_SELECT_QUERY = `
  SELECT 
    p.id,  
    p.brand_id,  
    p.category_id,  
    p.name, 
    p.description,
    p.price,
    p.gender,
    p.status,
    p.search_vector,
    p.thumbnail_url,
    p.thumbnail_path,
    p.updated_at,
    p.created_at,

    b.name AS brand_name, 
    c.name AS category_name
`;

const BASE_PRODUCT_FROM_QUERY = `
  FROM products p
  JOIN brands b
    ON b.id = p.brand_id 
  JOIN category c
    ON c.id = p.category_id
`;

export const findAll = async (
  filters: ProductFilter,
): Promise<ProductFilterResult> => {
  const { whereClause, values, limitClause, offsetClause } = buildFilterClause(
    filters,
    ["id", "name"],
  );

  const result = await db.query(
    `
    ${BASE_PRODUCT_SELECT_QUERY}
    COUNT(*) OVER()::INT AS total_count
    ${BASE_PRODUCT_FROM_QUERY}
    ${whereClause}
    ${limitClause} ${offsetClause}
    `,
    values,
  );

  const products = result.rows.map(({ total_count, ...product }) => product);
  const total_count = result.rows.length > 0 ? result.rows[0].total_count : 0;

  return { products, total_count };
};

export const findById = async (
  productId: string,
): Promise<ProductWithRelations> => {
  const result = await db.query(
    `
    ${BASE_PRODUCT_SELECT_QUERY}
    ${BASE_PRODUCT_FROM_QUERY} 
    WHERE id = $1;
    `,
    [productId],
  );

  return result.rows[0];
};

export const create = async (
  inputs: AddProductInput,
): Promise<ProductWithRelations> => {
  const { keysStr, placeholders, values } = buildInsertFields(inputs);

  const result = await db.query(
    `
    INSERT INTO products (${keysStr})
    VALUES (${placeholders})
    RETURNING id;
    `,
    values,
  );

  return findById(result.rows[0].id);
};

export const update = async (
  productId: string,
  changes: Partial<Product>,
): Promise<ProductWithRelations> => {
  const { setClause, values } = buildUpdateFields(changes);
  values.push(productId);

  const result = await db.query(
    `
    UPDATE products 
    SET ${setClause}
    WHERE id = $${values.length}
    RETURNING id;
    `,
    values,
  );

  return await findById(result.rows[0].id);
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
