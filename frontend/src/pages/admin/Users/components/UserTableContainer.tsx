import CustomButton from "../../../../shared/CustomButton";
import { PlusIcon } from "lucide-react";
import UserTable from "./UserTable";

const UserTableContainer = () => {
  return (
    <div className="h-full flex flex-col overflow-hidden rounded-md border border-border bg-surface shadow-sm">
      {/* Header */}
      <div className="border-b border-border p-5 shrink-0 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-surface">
        <h2 className="text-lg font-headline font-semibold">
          User Staff Directory
        </h2>

        <CustomButton
          title="ADD STAFF"
          Icon={PlusIcon}
          buttonStyles="text-white text-sm font-headline rounded-sm bg-primary hover:bg-primary-hover"
          // onClick={() => openProductVariantModal("create")}
        />
      </div>

      {/* Table */}
      <div>
        <UserTable />
      </div>
    </div>
  );
};

export default UserTableContainer;
