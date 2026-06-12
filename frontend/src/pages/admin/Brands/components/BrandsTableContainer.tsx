import BrandsTable from "./BrandsTable";
import TableHeader from "./TableHeader";

const BrandsTableContainer = () => {
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
        <BrandsTable />
      </div>
    </div>
  );
};

export default BrandsTableContainer;
