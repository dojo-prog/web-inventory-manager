CREATE TABLE product_images (
  id uuid PRIMARY KEY NOT NULL DEFAULT gen_random_uuid(),
  product_id uuid REFERENCES public.products(id) ON DELETE CASCADE NOT NULL, 
  
  image_url text NOT NULL,
  image_path text NOT NULL,

  created_at timestamptz NOT NULL DEFAULT now()
);