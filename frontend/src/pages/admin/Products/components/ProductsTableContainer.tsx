import TableHeader from "./TableHeader";
import ProductsTable from "./ProductsTable";

const ProductsTableContainer = () => {
  return (
    <div className="flex-1 h-full flex flex-col overflow-hidden rounded-md border border-border bg-surface shadow-sm">
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
        <ProductsTable />
      </div>
    </div>
  );
};

export default ProductsTableContainer;
