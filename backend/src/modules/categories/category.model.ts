import {
  AddCategoryInput,
  Category,
  CategoryFilters,
} from "@web-inventory-manager/shared";
import buildFilterClause from "../../utils/buildFilterClause";
import db from "../../database/db";
import buildInsertFields from "../../utils/buildInsertFields";

export const findAll = async (
  filters: CategoryFilters,
): Promise<Category[]> => {
  const { whereClause, values } = buildFilterClause(filters, [
    "id",
    "name",
    "slug",
  ]);

  const result = await db.query(
    `
    SELECT * 
    FROM categories 
    ${whereClause}
    `,
    values,
  );

  return result.rows;
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
