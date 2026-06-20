import { useEffect, type ChangeEvent } from "react";
import useProductStore from "../../../../features/products/product.store";
import AddImageButton from "./AddImageButton";
import useProductImageStore from "../../../../features/product_images/product_image.store";

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
        <AddImageButton id="image" name="image" fileChange={handleFileChange} />
      </div>
    </div>
  );
};

export default ProductImages;
