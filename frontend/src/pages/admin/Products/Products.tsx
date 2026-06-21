import { useEffect } from "react";
import useProductStore from "../../../features/products/product.store";
import ProductsTableContainer from "./components/ProductsTableContainer";
import Header from "./sections/Header";
import useModalStore from "../../../features/ui/modals/modal.store";
import ProductModal from "./components/ProductModal";

const Products = () => {
  const { fetchProducts, filters } = useProductStore();
  const { productModalOpen } = useModalStore();

  useEffect(() => {
    if (filters) {
      fetchProducts(filters);
    }
  }, []);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <Header />
      </div>

      {/* Table Container */}
      <div className="h-[calc(100vh-16rem)] flex space-x-4">
        <ProductsTableContainer />
      </div>

      {productModalOpen && <ProductModal />}
    </div>
  );
};

export default Products;
