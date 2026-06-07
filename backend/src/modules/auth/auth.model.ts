import { User } from "@web-inventory-manager/shared";
import db from "../../database/db";
import { userSelectProjection } from "../../constants/auth.constants";

export const findById = async (userId: string) => {
  const result = await db.query(
    `
    SELECT ${userSelectProjection}
    FROM users
    WHERE id = $1;
    `,
    [userId],
  );

  return result.rows[0];
};

export const findByEmail = async (
  email: string,
): Promise<User & { hash_password: string }> => {
  const result = await db.query(
    `
    SELECT ${userSelectProjection}, hash_password
    FROM users 
    WHERE email = $1;
    `,
    [email],
  );

  return result.rows[0];
};
