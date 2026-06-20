import { useEffect } from "react";
import useProductStore from "../../../../features/products/product.store";
import AddImageButton from "./AddImageButton";
import useProductImageStore from "../../../../features/product_images/product_image.store";

const ProductImages = () => {
  const { selectedProduct } = useProductStore();
  const { fetchProductImages, product_images } = useProductImageStore();

  useEffect(() => {
    if (!selectedProduct?.id) return;

    fetchProductImages(selectedProduct.id);
  }, [selectedProduct?.id]);

  return (
    <div className="w-full">
      {/* Preview Image */}
      <div className="h-90 border bg-gray-200/10 border-border rounded-md shadow mb-4"></div>

      {/* Images */}
      <div className="grid grid-cols-6 gap-4">
        {product_images.length > 0 &&
          product_images.map((pi) => (
            <div key={pi.id} className="w-full aspect-square bg-gray-400/10">
              <img
                src={pi.image_url}
                alt="product_image"
                className="h-full w-full object-cover"
              />
            </div>
          ))}

        {/* Add Image Button */}
        <AddImageButton />
      </div>
    </div>
  );
};

export default ProductImages;
