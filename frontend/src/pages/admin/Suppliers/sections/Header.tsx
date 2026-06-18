import CustomButton from "../../../../shared/CustomButton";
import { PlusIcon } from "lucide-react";

const Header = () => {
  return (
    <div className="flex items-center justify-between">
      {/* Title */}
      <div>
        <h2 className="text-4xl font-headline font-semibold">
          Supplier Management
        </h2>
        <p className="text-xs text-secondary font-label mt-1">
          Oversee abd coordinate your global procurement network.
        </p>
      </div>

      {/* Actions */}
      <div>
        <CustomButton
          title="Add New Supplier"
          Icon={PlusIcon}
          buttonStyles="h-12 rounded-sm px-6 bg-primary hover:bg-primary-hover"
          titleStyles="text-white text-sm font-body"
          // onClick={() => openCategoryModal("create")}
        />
      </div>
    </div>
  );
};

export default Header;
