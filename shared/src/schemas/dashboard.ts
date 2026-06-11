import { z } from "zod";

const SummarySchema = z.object({
  total_units: z.coerce.number().int(),
  low_stock_units: z.coerce.number().int(),
  active_suppliers: z.coerce.number().int(),
});

const LowStockProductSchema = z.object({
  id: z.string().uuid(),
  size: z.string(),
  color: z.string(),
  stock_quantity: z.string(),

  brand_id: z.string().uuid(),
  brand_name: z.string(),

  category_id: z.string().uuid(),
  category_name: z.string(),

  product_id: z.string().uuid(),
  product_name: z.string(),
  thumbnail_url: z.string().nullable(),
});

// Types
export type Summary = z.infer<typeof SummarySchema>;
export type LowStockProduct = z.infer<typeof LowStockProductSchema>;
