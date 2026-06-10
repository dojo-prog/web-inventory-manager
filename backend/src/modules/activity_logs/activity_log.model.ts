import {
  ActivityLog,
  ActivityLogFilter,
  CreateLogInput,
} from "@web-inventory-manager/shared";
import buildFilterClause from "../../utils/buildFilterClause";
import db from "../../database/db";
import buildInsertFields from "../../utils/buildInsertFields";

export const findAll = async (
  filters: ActivityLogFilter,
): Promise<ActivityLog[]> => {
  const { whereClause, values, limitClause, offsetClause } = buildFilterClause(
    filters,
    ["id"],
  );

  const result = await db.query(
    `
    SELECT * 
    FROM activity_logs
    ${whereClause}
    ORDER BY created_at DESC
    ${limitClause} ${offsetClause}
    `,
    values,
  );

  return result.rows;
};

export const findById = async (logId: string): Promise<ActivityLog> => {
  const result = await db.query(
    `
    SELECT *
    FROM activity_logs
    WHERE id = $1;
    `,
    [logId],
  );

  return result.rows[0];
};

export const create = async (payload: CreateLogInput) => {
  const { keysStr, placeholders, values } = buildInsertFields(payload);

  const result = await db.query(
    `
    INSERT INTO activity_logs (${keysStr})
    VALUES (${placeholders})
    RETURNING *;
    `,
    values,
  );

  return result.rows[0];
};
