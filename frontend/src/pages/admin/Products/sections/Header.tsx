import { PlusIcon } from "lucide-react";
import CustomButton from "../../../../shared/CustomButton";
import useModalStore from "../../../../features/ui/modals/modal.store";

const Header = () => {
  const { openProductModal } = useModalStore();
  return (
    <div className="flex items-center justify-between">
      <div>
        <h2 className="text-4xl font-headline font-semibold">
          Product Management
        </h2>
        <p className="text-xs text-secondary font-label mt-1">
          Manage your enterprise inventory and stock levels.
        </p>
      </div>

      <div>
        <CustomButton
          title="Add New Product"
          Icon={PlusIcon}
          buttonStyles="h-12 rounded-sm px-6 bg-primary hover:bg-primary-hover"
          titleStyles="text-white text-sm font-body"
          onClick={() => openProductModal("create")}
        />
      </div>
    </div>
  );
};

export default Header;
