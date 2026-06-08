import { AddUserInput, User, UserFilter } from "@web-inventory-manager/shared";
import { keyof } from "zod";
import db from "../../database/db";
import { userSelectProjection } from "../../constants/auth.constants";
import buildFilterClause from "../../utils/buildFilterClause";

export const findAll = async (filters: UserFilter): Promise<User[]> => {
  const {} = buildFilterClause(filters, [
    "fname",
    "lname",
    "email",
    "id::text",
  ]);

  const conditions: string[] = [];
  const values: any[] = [];

  const entries = Object.entries(filters);

  entries.forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      const placeholderNum = values.length + 1;

      if (key === "q") {
        conditions.push(
          `(fname ILIKE $${placeholderNum} 
              OR lname ILIKE $${placeholderNum} 
              OR email ILIKE $${placeholderNum} 
              OR id::text ILIKE $${placeholderNum}) `,
        );
        values.push(`%${value}%`);
      } else {
        conditions.push(`${key} = $${placeholderNum}`);
        values.push(value);
      }
    }
  });

  const whereClause =
    conditions.length > 0 ? `WHERE ${conditions.join(" AND ")}` : "";

  const result = await db.query(
    `
    SELECT ${userSelectProjection}
    FROM users 
    ${whereClause}
    `,
    values,
  );

  return result.rows;
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
  inputs: AddUserInput & { hash_password: string },
): Promise<User> => {
  const { fname, lname, email, role, hash_password, avatar_url, avatar_path } =
    inputs;

  const result = await db.query(
    `
    INSERT INTO users (
     fname,
     lname,
     email, 
     role,
     hash_password,
     avatar_url,
     avatar_path
    )
    VALUES ($1, $2, $3, $4, $5, $6, $7)
    RETURNING ${userSelectProjection};
    `,
    [
      fname,
      lname,
      email,
      role,
      hash_password,
      avatar_url ?? null,
      avatar_path ?? null,
    ],
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
