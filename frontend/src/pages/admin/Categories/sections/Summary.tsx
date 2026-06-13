import { BadgeCheckIcon } from "lucide-react";
import SummaryCard from "../components/SummaryCard";
import useCategoryStore from "../../../../features/categories/category.store";

const Summary = () => {
  const { total_count } = useCategoryStore();

  return (
    <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-4">
      <SummaryCard
        header="Total Categories"
        value={`${total_count}`}
        valueStyles="text-5xl text-primary"
      />
      <SummaryCard
        header="Most Used"
        value="Running Shoes"
        subheader="428 products"
        valueStyles="text-xl"
      />
      <SummaryCard
        header="System Health"
        value="Data Integrity: Optimal"
        subheader="All 12 slugs are SEO compliant and unique"
        Logo={BadgeCheckIcon}
        containerStyles="col-span-2 bg-primary-hover"
        headerStyles="text-white"
        valueStyles="text-white text-xl"
        subheaderStyles="text-white"
      />
    </div>
  );
};

export default Summary;
