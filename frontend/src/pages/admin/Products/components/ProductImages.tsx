import { useEffect, useState, type ChangeEvent } from "react";
import useProductStore from "../../../../features/products/product.store";
import AddImageButton from "./AddImageButton";
import useProductImageStore from "../../../../features/product_images/product_image.store";
import type { ProductImage } from "@web-inventory-manager/shared";
import { ImageIcon, Loader2Icon, Trash2Icon } from "lucide-react";

const ProductImages = () => {
  const { selectedProduct } = useProductStore();
  const {
    fetchProductImages,
    product_images,
    addProductImage,
    removeProductImage,
    loading,
  } = useProductImageStore();

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

  const [selectedImage, setSelectedImage] = useState<ProductImage | null>(
    product_images[0],
  );

  useEffect(() => {
    const image = product_images[0] ? product_images[0] : null;
    setSelectedImage(image);
  }, [product_images]);

  return (
    <div className="w-full">
      {/* Preview Image */}
      <div className="relative group h-90 border bg-gray-200/10 border-border rounded-md shadow mb-4">
        {selectedImage ? (
          <>
            <img
              src={selectedImage?.image_url}
              alt="image_preview"
              className="h-full w-full object-contain"
            />

            <button
              className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-all duration-150 text-secondary hover:text-red-500 cursor-pointer"
              onClick={() =>
                removeProductImage(selectedProduct!.id, selectedImage!.id)
              }
            >
              {!loading ? (
                <Trash2Icon size={20} />
              ) : (
                <Loader2Icon size={20} className="animate-spin" />
              )}
            </button>
          </>
        ) : (
          <div className="h-full w-full flex flex-col items-center justify-center select-none animate-fade-in">
            <div className="p-4 bg-primary/5 rounded-full mb-3 border border-dashed border-gray-300">
              <ImageIcon size={32} className="text-primary/60" />
            </div>
            <p className="text-sm font-label font-medium text-primary">
              No Image Selected
            </p>
            <p className="text-xs text-primary/70 font-body mt-1 max-w-50 text-center">
              Select an image from the gallery below or upload a new one to
              preview it here.
            </p>
          </div>
        )}
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
