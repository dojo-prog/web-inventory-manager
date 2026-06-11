import {
  ActivityLog,
  DetailedActivityLog,
  LowStockProduct,
  Summary,
} from "@web-inventory-manager/shared";
import db from "../../database/db";

export const findSummary = async (): Promise<Summary> => {
  const result = await db.query(
    `
    SELECT
      COALESCE(SUM(stock_quantity), 0)::INT as total_units,
      COUNT(id) FILTER (WHERE stock_quantity < 10)::INT as low_stock_units,
      (SELECT COUNT(id) FROM suppliers WHERE is_active = true)::INT as active_suppliers
    FROM product_variants; 
    `,
  );

  const { total_units, low_stock_units, active_suppliers } = result.rows[0];

  return {
    total_units,
    low_stock_units,
    active_suppliers,
  };
};

export const findLowStock = async (): Promise<LowStockProduct[]> => {
  const result = await db.query(
    `
    SELECT 
      pv.id, 
      pv.size,
      pv.color,
      pv.stock_quantity,

      b.id AS brand_id,
      b.name AS brand_name,

      p.id AS product_id,
      p.name AS product_name,
      p.thumbnail_url,

      c.id AS category_id,
      c.name AS category_name

    FROM product_variants pv

    JOIN products p
      ON p.id = pv.product_id

    JOIN brands b
      ON b.id = p.brand_id

    JOIN categories c
      ON c.id = p.category_id
    
    WHERE pv.stock_quantity < 10
    ORDER BY pv.created_at DESC;
    `,
  );

  return result.rows;
};

export const findRecentLogs = async (): Promise<DetailedActivityLog[]> => {
  const result = await db.query(
    `
    SELECT 
      al.id,
      al.user_id,
      al.action,
      al.entity_type,
      al.entity_id,
      al.old_values,
      al.new_values,
      al.created_at,

      u.fname AS user_fname,
      u.lname AS user_lname,
      u.email AS user_email

    FROM activity_logs al

    JOIN users u
      ON u.id = al.user_id 

    ORDER BY al.created_at DESC
    LIMIT 4; 
    `,
  );

  return result.rows;
};
