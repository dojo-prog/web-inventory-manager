import Header from "./sections/Header";
import BrandCard from "./components/BrandCard";
import RegisterCard from "./components/RegisterCard";
import BrandsTableContainer from "./components/BrandsTableContainer";

const Brands = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <Header />
      </div>

      {/* Brand Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {/* Card */}
        <BrandCard />
        <BrandCard />
        <BrandCard />
        <BrandCard />

        {/* Register */}
        <RegisterCard />
      </div>

      {/* Brands Table */}
      <BrandsTableContainer />
    </div>
  );
};

export default Brands;
