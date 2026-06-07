CREATE TABLE activity_logs (
  id uuid PRIMARY KEY NOT NULL DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES public.users(id) ON DELETE SET NULL, -- Nullable if a system process triggers it
  
  action text NOT NULL,        -- ['CREATE', 'UPDATE', 'DELETE', 'LOGIN_SUCCESS', 'STOCK_ADJUST']
  entity_type text NOT NULL,   -- ['products', 'supplier', 'users', 'brands']
  entity_id uuid,              
  
  old_values jsonb,            
  new_values jsonb,            
  
  created_at timestamptz NOT NULL DEFAULT now()
);