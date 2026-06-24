CREATE TABLE product_variants (
  id uuid PRIMARY KEY NOT NULL DEFAULT gen_random_uuid(),
  product_id uuid REFERENCES public.products(id) ON DELETE CASCADE NOT NULL,
  supplier_id uuid REFERENCES public.suppliers(id) NOT NULL, 

  size text NOT NULL, 
  color_name text NOT NULL,
  color_hex text NOT NULL, 
  stock_quantity int NOT NULL DEFAULT 0,

  created_at timestamptz NOT NULL DEFAULT now(),

  CONSTRAINT unique_product_variant UNIQUE (product_id, size, color_name, color_hex)
);