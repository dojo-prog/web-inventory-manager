import SuppliersTable from "./SuppliersTable";
import TableHeader from "./TableHeader";

const SuppliersContainerTable = () => {
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
        <SuppliersTable />
      </div>
    </div>
  );
};

export default SuppliersContainerTable;
