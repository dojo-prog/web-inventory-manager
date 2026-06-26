import { PlusIcon } from "lucide-react";
import CustomButton from "../../../../shared/CustomButton";
import useModalStore from "../../../../features/ui/modals/modal.store";

const Header = () => {
  const { openUserModal } = useModalStore();

  return (
    <div className="flex items-center justify-between">
      <div>
        <h2 className="text-4xl font-headline font-semibold">
          Team Management
        </h2>
        <p className="text-xs text-secondary font-label mt-1">
          Manage enterprise access, roles, and platform permissions for your
          logistics staff.
        </p>
      </div>

      <CustomButton
        title="ADD STAFF USER"
        Icon={PlusIcon}
        buttonStyles="h-12 rounded-sm px-6 bg-primary hover:bg-primary-hover"
        titleStyles="text-white text-sm font-body"
        onClick={() => openUserModal("create")}
      />
    </div>
  );
};

export default Header;
