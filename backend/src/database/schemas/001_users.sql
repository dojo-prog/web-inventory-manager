CREATE TABLE users (
  id uuid PRIMARY KEY NOT NULL DEFAULT gen_random_uuid(),
  fname text NOT NULL,
  lname text NOT NULL,
  email text NOT NULL,
  hash_password text NOT NULL,
  role text NOT NULL DEFAULT 'manager', -- [admin, manager]
  avatar_url text, 
  avatar_path text, 
  created_at timestamptz NOT NULL DEFAULT now()
);