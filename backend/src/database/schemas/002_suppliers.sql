CREATE TABLE suppliers (
  id uuid PRIMARY KEY NOT NULL DEFAULT gen_random_uuid(),
  name text UNIQUE NOT NULL, 
  supplier_code text UNIQUE NOT NULL, 
  contact_name text NOT NULL, 
  email text NOT NULL, 
  phone text, 
  website text,
  address_line jsonb NOT NULL, -- contains region, province, city, barangay, street_add, postal_code
  is_active boolean NOT NULL DEFAULT false,

  updated_at timestamptz, 
  created_at timestamptz NOT NULL DEFAULT now()
);