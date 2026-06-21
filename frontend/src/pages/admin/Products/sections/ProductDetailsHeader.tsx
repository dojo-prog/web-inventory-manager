import { ChevronRightIcon, PencilIcon, Trash2Icon } from "lucide-react";
import { Link } from "react-router-dom";
import useProductStore from "../../../../features/products/product.store";
import CustomButton from "../../../../shared/CustomButton";
import useModalStore from "../../../../features/ui/modals/modal.store";

const ProductDetailsHeader = () => {
  const { selectedProduct: sp } = useProductStore();
  const { openDeleteConfirmModal, openProductModal } = useModalStore();

  return (
    <div className="flex items-center justify-between">
      {/* Route Navigation */}
      <div className="flex items-center space-x-2 text-sm">
        <Link to={"/admin/products"} className="cursor-pointer">
          Products
        </Link>
        <ChevronRightIcon size={15} />
        <h2 className="font-semibold">{sp?.name}</h2>
      </div>

      {/* Actions Buttons */}
      <div className="flex items-center space-x-4">
        <CustomButton
          type="button"
          Icon={Trash2Icon}
          title="Delete"
          titleStyles="font-medium text-secondary"
          buttonStyles="bg-white hover:bg-gray-100 border border-gray-300 rounded-sm"
          onClick={() => openDeleteConfirmModal("product", sp)}
        />
        <CustomButton
          type="button"
          Icon={PencilIcon}
          title={"Edit Product"}
          titleStyles="text-white"
          buttonStyles="bg-primary hover:bg-primary-hover rounded-sm"
          onClick={() => openProductModal("update", sp!)}
        />
      </div>
    </div>
  );
};

export default ProductDetailsHeader;
