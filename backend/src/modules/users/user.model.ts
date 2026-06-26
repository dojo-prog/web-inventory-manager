import {
  AddUserInput,
  User,
  UserFilter,
  UserFilterResult,
} from "@web-inventory-manager/shared";
import { keyof } from "zod";
import db from "../../database/db";
import { userSelectProjection } from "../../constants/auth.constants";
import buildFilterClause from "../../utils/buildFilterClause";
import buildInsertFields from "../../utils/buildInsertFields";
import buildUpdateFields from "../../utils/buildUpdateFields";

export const findAll = async (
  filters: UserFilter,
): Promise<UserFilterResult> => {
  const { whereClause, values, limitClause, offsetClause } = buildFilterClause(
    filters,
    ["fname", "lname", "email", "id::text"],
  );

  const result = await db.query(
    `
    SELECT ${userSelectProjection},
      COUNT(*) OVER()::INT AS total_count
    FROM users 
    ${whereClause}
    ${limitClause} ${offsetClause}
    `,
    values,
  );

  const total_count = result.rows.length > 0 ? result.rows[0].total_count : 0;
  const users = result.rows.map(({ total_count, ...user }) => user);

  return { users, total_count };
};

export const findById = async (userId: string): Promise<User> => {
  const result = await db.query(
    `
    SELECT ${userSelectProjection}
    WHERE id = $1
    `,
    [userId],
  );

  return result.rows[0];
};

export const create = async (
  inputs: Partial<AddUserInput> & { hash_password: string },
): Promise<User> => {
  const { keysStr, placeholders, values } = buildInsertFields(inputs);

  const result = await db.query(
    `
    INSERT INTO users (${keysStr})
    VALUES (${placeholders})
    RETURNING ${userSelectProjection};
    `,
    values,
  );

  return result.rows[0];
};

export const update = async (
  userId: string,
  changes: Partial<User>,
): Promise<User> => {
  const { setClause, values } = buildUpdateFields(changes);
  values.push(userId);

  const result = await db.query(
    `
    UPDATE users 
    SET ${setClause}
    WHERE id = $${values.length}
    `,
    [values],
  );

  return result.rows[0];
};

export const remove = async (userId: string): Promise<User> => {
  const result = await db.query(
    `
    DELETE FROM users
    WHERE id = $1;
    `,
    [userId],
  );

  return result.rows[0];
};
