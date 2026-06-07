CREATE TABLE categories (
  id uuid PRIMARY KEY NOT NULL DEFAULT gen_random_uuid(),
  name text UNIQUE NOT NULL, 
  slug text UNIQUE NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);