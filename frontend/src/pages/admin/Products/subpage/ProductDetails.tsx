import { useEffect } from "react";
import useProductStore from "../../../../features/products/product.store";
import { useParams } from "react-router-dom";
import ProductDetailsHeader from "../sections/ProductDetailsHeader";
import ProductInfo from "../sections/ProductInfo";
import useModalStore from "../../../../features/ui/modals/modal.store";
import ProductModal from "../components/ProductModal";
import VariantsTableContainer from "../components/VariantsTableContainer";

const ProductDetails = () => {
  const {
    fetchProductById,
    fetchingProduct,
    selectedProduct: sp,
  } = useProductStore();
  const { productModalOpen } = useModalStore();

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

      {/* Variants Table */}
      <div>
        <VariantsTableContainer />
      </div>

      {productModalOpen && <ProductModal />}
    </div>
  );
};

export default ProductDetails;
