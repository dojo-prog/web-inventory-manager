import { useEffect } from "react";
import useCategoryStore from "../../../features/categories/category.store";
import CategoryTableContainer from "./components/CategoryTableContainer";
import Header from "./sections/Header";
import Summary from "./sections/Summary";

const Categories = () => {
  const { fetchCategories } = useCategoryStore();

  useEffect(() => {
    fetchCategories({});
  }, []);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <Header />
      </div>

      {/* Summary */}
      <div>
        <Summary />
      </div>

      {/* Table */}
      <div>
        <CategoryTableContainer />
      </div>
    </div>
  );
};

export default Categories;
