import { useEffect } from "react";
import useProductStore from "../../../../features/products/product.store";
import { useParams } from "react-router-dom";
import ProductDetailsHeader from "../sections/ProductDetailsHeader";
import ProductInfo from "../sections/ProductInfo";

const ProductDetails = () => {
  const {
    fetchProductById,
    fetchingProduct,
    selectedProduct: sp,
  } = useProductStore();

  const { productId } = useParams<{ productId: string }>();

  useEffect(() => {
    if (!productId) return;
    fetchProductById(productId);
  }, [productId]);

  // TODO add loader
  if (fetchingProduct && !sp) return null;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <ProductDetailsHeader />
      </div>

      {/* Info */}
      <div>
        <ProductInfo />
      </div>
    </div>
  );
};

export default ProductDetails;
