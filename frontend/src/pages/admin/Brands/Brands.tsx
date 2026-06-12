import Header from "./sections/Header";
import BrandCard from "./components/BrandCard";
import RegisterCard from "./components/RegisterCard";
import BrandsTableContainer from "./components/BrandsTableContainer";
import useBrandStore from "../../../features/brands/brand.store";
import { useEffect } from "react";

const Brands = () => {
  const { fetchBrands, brands } = useBrandStore();

  useEffect(() => {
    fetchBrands({});
  }, []);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <Header />
      </div>

      {/* Brand Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {brands.map((b) => (
          <BrandCard key={b.id} item={b} />
        ))}

        {/* Register */}
        <RegisterCard />
      </div>

      {/* Brands Table */}
      <div className="max-h-[calc(100vh-8rem)]">
        <BrandsTableContainer />
      </div>
    </div>
  );
};

export default Brands;
