import CustomButton from "../../../../shared/CustomButton";
import { LayersPlusIcon } from "lucide-react";

const Header = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="">
        <h2 className="text-4xl font-headline font-semibold">
          Dashboard Overview
        </h2>
        <p className="text-sm text-secondary font-body">
          Real-time Inventory Metrics
        </p>
      </div>

      <div>
        <CustomButton
          Icon={LayersPlusIcon}
          title="Quick Stock-up"
          buttonStyles="h-12 bg-primary text-white rounded-sm hover:bg-primary-hover"
        />
      </div>
    </div>
  );
};

export default Header;
