CREATE TABLE products (
  id uuid PRIMARY KEY NOT NULL DEFAULT gen_random_uuid(),
  brand_id uuid REFERENCES public.brands(id) NOT NULL, 
  category_id uuid REFERENCES public.categories(id) NOT NULL,

  name text NOT NULL,
  description text NOT NULL, 
  price numeric(10,2) NOT NULL, 
  gender text NOT NULL DEFAULT 'unisex', -- [unisex, men, women]
  status text NOT NULL DEFAULT 'inactive', -- [active, inactive]
  search_vector tsvector, 

  thumbnail_url text,
  thumbnail_path text,

  updated_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now()
);