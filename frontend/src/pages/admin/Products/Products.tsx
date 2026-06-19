import { useEffect } from "react";
import useProductStore from "../../../features/products/product.store";
import ProductsTableContainer from "./components/ProductsTableContainer";
import Header from "./sections/Header";

const Products = () => {
  const { fetchProducts, filters } = useProductStore();

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
    </div>
  );
};

export default Products;
