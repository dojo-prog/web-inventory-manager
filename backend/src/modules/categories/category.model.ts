import {
  AddCategoryInput,
  Category,
  CategoryFilterResult,
  CategoryFilters,
  MostUsedCategoryResult,
} from "@web-inventory-manager/shared";
import buildFilterClause from "../../utils/buildFilterClause";
import db from "../../database/db";
import buildInsertFields from "../../utils/buildInsertFields";
import buildUpdateFields from "../../utils/buildUpdateFields";

export const findAll = async (
  filters: CategoryFilters,
): Promise<CategoryFilterResult> => {
  const { whereClause, values, limitClause, offsetClause } = buildFilterClause(
    filters,
    ["id", "name", "slug"],
  );

  const result = await db.query(
    `
    SELECT *,
      COUNT(*) OVER()::INT AS total_count
    FROM categories 
    ${whereClause}
    ORDER BY created_at DESC
    ${limitClause} ${offsetClause}
    `,
    values,
  );

  const total_count = result.rows.length > 0 ? result.rows[0].total_count : 0;
  const categories = result.rows.map(
    ({ total_count, ...categories }) => categories,
  );

  return {
    total_count,
    categories,
  };
};

export const findById = async (categoryId: string): Promise<Category> => {
  const result = await db.query(
    `
    SELECT *
    FROM categories
    WHERE id = $1;
    `,
    [categoryId],
  );

  return result.rows[0];
};

export const findMostUsed =
  async (): Promise<MostUsedCategoryResult | null> => {
    const result = await db.query(
      `
    SELECT category_id, COUNT(*) as product_count
    FROM products
    WHERE category_id IS NOT NULL
    GROUP BY category_id
    ORDER BY product_count DESC
    LIMIT 1;
    `,
    );

    const data = result.rows[0];

    if (!data) return null;

    const category = await findById(data.category_id);

    return { category, product_count: data.product_count };
  };

export const create = async (inputs: AddCategoryInput): Promise<Category> => {
  const { keysStr, placeholders, values } = buildInsertFields(inputs);

  const result = await db.query(
    `
    INSERT INTO categories (${keysStr})
    VALUES (${placeholders})
    RETURNING *;
    `,
    values,
  );

  return result.rows[0];
};

export const update = async (
  categoryId: string,
  changes: Partial<Category>,
): Promise<Category> => {
  const { setClause, values } = buildUpdateFields(changes);
  values.push(categoryId);

  const result = await db.query(
    `
    UPDATE categories
    SET ${setClause}
    WHERE id = $${values.length}
    RETURNING *;
    `,
    values,
  );

  return result.rows[0];
};

export const remove = async (categoryId: string): Promise<Category> => {
  const result = await db.query(
    `
    DELETE FROM categories 
    WHERE id = $1
    RETURNING *;
    `,
    [categoryId],
  );

  return result.rows[0];
};
