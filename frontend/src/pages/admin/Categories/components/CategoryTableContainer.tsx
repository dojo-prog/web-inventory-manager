import CategoriesTable from "./CategoriesTable";
import TableHeader from "./TableHeader";

const CategoryTableContainer = () => {
  return (
    <div className="h-full flex flex-col overflow-hidden rounded-md border border-border bg-surface shadow-sm">
      {/* Header */}
      <TableHeader />

      {/* Table */}
      <div
        className="flex-1 overflow-auto"
        style={{
          scrollbarWidth: "thin",
          scrollbarColor: "#cbd5e1 transparent",
        }}
      >
        <CategoriesTable />
      </div>
    </div>
  );
};

export default CategoryTableContainer;
