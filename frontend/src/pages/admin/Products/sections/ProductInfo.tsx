import ProductData from "../components/ProductData";
import ProductImages from "../components/ProductImages";

const ProductInfo = () => {
  return (
    <div className="flex space-x-6">
      {/* Product Images */}
      <div className="flex-1">
        <ProductImages />
      </div>

      {/* Product Data */}
      <div className="w-100">
        <ProductData />
      </div>
    </div>
  );
};

export default ProductInfo;
