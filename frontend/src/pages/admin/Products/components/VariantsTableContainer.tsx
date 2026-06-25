import { PlusIcon } from "lucide-react";
import CustomButton from "../../../../shared/CustomButton";
import VariantsTable from "./VariantsTable";
import useModalStore from "../../../../features/ui/modals/modal.store";
import useProductVariantStore from "../../../../features/product_variants/product_variant.store";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const VariantsTableContainer = () => {
  const { fetchVariants } = useProductVariantStore();
  const { openProductVariantModal } = useModalStore();

  const { productId } = useParams<{ productId: string }>();

  useEffect(() => {
    if (!productId) return;
    fetchVariants(productId as string);
  }, [productId]);

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
          onClick={() => openProductVariantModal("create")}
        />
      </div>

      {/* Table */}
      <VariantsTable />
    </div>
  );
};

export default VariantsTableContainer;
