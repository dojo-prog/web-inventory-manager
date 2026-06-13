import { PlusIcon } from "lucide-react";
import CustomButton from "../../../../shared/CustomButton";
import useModalStore from "../../../../features/ui/modals/modal.store";

const Header = () => {
  const { openCategoryModal } = useModalStore();

  return (
    <div className="flex items-center justify-between">
      {/* Title */}
      <div>
        <h2 className="text-4xl font-headline font-semibold">
          Categories Management
        </h2>
        <p className="text-xs text-secondary font-label mt-1">
          Organize and manage footwear product classififcations.
        </p>
      </div>

      {/* Actions */}
      <div>
        <CustomButton
          title="Add Categories"
          Icon={PlusIcon}
          buttonStyles="h-12 rounded-sm px-6 bg-primary hover:bg-primary-hover"
          titleStyles="text-white text-sm font-body"
          onClick={() => openCategoryModal("create")}
        />
      </div>
    </div>
  );
};

export default Header;
