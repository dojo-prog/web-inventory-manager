import { useEffect, useState, type ChangeEvent } from "react";
import useProductStore from "../../../../features/products/product.store";
import AddImageButton from "./AddImageButton";
import useProductImageStore from "../../../../features/product_images/product_image.store";
import type { ProductImage } from "@web-inventory-manager/shared";

const ProductImages = () => {
  const { selectedProduct } = useProductStore();
  const { fetchProductImages, product_images, addProductImage } =
    useProductImageStore();

  useEffect(() => {
    if (!selectedProduct?.id) return;

    fetchProductImages(selectedProduct.id);
  }, [selectedProduct?.id]);

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (!selectedProduct?.id) return;

    const files = e.target.files;

    if (!files || files.length === 0) return;

    const image = files[0];

    try {
      await addProductImage(selectedProduct.id, { image });
    } finally {
      e.target.value = "";
    }
  };

  const [selectedImage, setSelectedImage] = useState<ProductImage | undefined>(
    product_images[0],
  );

  return (
    <div className="w-full">
      {/* Preview Image */}
      <div className="h-90 border bg-gray-200/10 border-border rounded-md shadow mb-4">
        <img
          src={selectedImage?.image_url}
          alt="image_preview"
          className="h-full w-full object-contain"
        />
      </div>

      {/* Images */}
      <div className="grid grid-cols-6 gap-4">
        {product_images.length > 0 &&
          product_images.map((pi) => {
            const is_selected = selectedImage?.id === pi.id;

            return (
              <div
                key={pi.id}
                className={`w-full aspect-square ${is_selected ? "bg-primary/10 border border-primary" : "bg-gray-400/10"} rounded-md cursor-pointer`}
                onClick={() => setSelectedImage(pi)}
              >
                <img
                  src={pi.image_url}
                  alt="product_image"
                  className="h-full w-full object-cover"
                />
              </div>
            );
          })}

        {/* Add Image Button */}
        <AddImageButton id="image" name="image" fileChange={handleFileChange} />
      </div>
    </div>
  );
};

export default ProductImages;
