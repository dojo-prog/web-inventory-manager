CREATE TABLE brands (
  id uuid PRIMARY KEY NOT NULL DEFAULT gen_random_uuid(),
  name text UNIQUE NOT NULL,
  logo_url text,
  logo_path text,
  created_at timestamptz NOT NULL DEFAULT now()
);