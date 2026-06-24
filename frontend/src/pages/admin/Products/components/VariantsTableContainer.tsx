import { PlusIcon } from "lucide-react";
import CustomButton from "../../../../shared/CustomButton";
import VariantsTable from "./VariantsTable";

const VariantsTableContainer = () => {
  return (
    <div className="h-full flex flex-col overflow-hidden rounded-md border border-border bg-surface shadow-sm">
      {/* Header */}
      <div className="border-b border-border p-5 shrink-0 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-surface">
        <h2 className="text-xl font-headline font-semibold">
          Variant Management
        </h2>

        <CustomButton
          title="ADD VARIANT"
          Icon={PlusIcon}
          buttonStyles="text-white text-sm font-headline border-sm bg-primary hover:bg-primary-hover"
        />
      </div>

      {/* Table */}
      <VariantsTable />
    </div>
  );
};

export default VariantsTableContainer;
