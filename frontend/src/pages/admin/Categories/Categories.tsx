import { useEffect } from "react";
import useCategoryStore from "../../../features/categories/category.store";
import CategoryTableContainer from "./components/CategoryTableContainer";
import Header from "./sections/Header";
import Summary from "./sections/Summary";
import useModalStore from "../../../features/ui/modals/modal.store";
import CategoryModal from "./components/CategoryModal";

const Categories = () => {
  const { fetchCategories } = useCategoryStore();
  const { categoryModalOpen } = useModalStore();

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
      <div className="h-[calc(100vh-8rem)]">
        <CategoryTableContainer />
      </div>

      {categoryModalOpen && <CategoryModal />}
    </div>
  );
};

export default Categories;
