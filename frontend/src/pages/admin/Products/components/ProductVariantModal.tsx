import { useParams } from "react-router-dom";
import useModalStore from "../../../../features/ui/modals/modal.store";
import ModalWrapper from "../../../../shared/ModalWrapper";
import CustomInput from "../../../../shared/CustomInput";
import CustomSelect from "../../../../shared/CustomSelect";
import { useForm } from "../../../../hooks/useForm";
import useSupplierStore from "../../../../features/suppliers/supplier.store";
import { useEffect } from "react";
import useProductVariantStore from "../../../../features/product_variants/product_variant.store";
import CustomButton from "../../../../shared/CustomButton";
import {
  type AddProductVariantInput,
  type UpdateProductVariantInput,
} from "@web-inventory-manager/shared";

const ProductVariantModal = () => {
  const {
    productVariantModalOpen,
    closeProductVariantModal,
    productVariantModalType,
    selectedProductVariant: spv,
  } = useModalStore();
  const { suppliers, fetchSuppliers } = useSupplierStore();
  const { loading, addVariant, updateVariant } = useProductVariantStore();

  const typeMap = {
    create: {
      title: "Add New Product Variant",
      btnTitle: "Add Variant",
    },
    update: {
      title: "Update Existing Variant",
      btnTitle: "Update Variant",
    },
  };

  const { productId } = useParams<{ productId: string }>();
  if (!productId) return null;

  useEffect(() => {
    if (suppliers.length === 0) {
      fetchSuppliers({ limit: 1000000000 });
    }
  }, []);

  const supplierOptions = suppliers?.map((s) => ({
    title: s.name,
    value: s.id,
  }));

  const { formData, setFormData, handleChange } = useForm({
    product_id: productId || "",
    supplier_id: "",
    size: 0,
    color_name: "",
    color_hex: "#000000",
    stock_quantity: 0,
  });
  const { supplier_id, size, color_name, color_hex, stock_quantity } = formData;

  useEffect(() => {
    if (spv && productId && productVariantModalType === "update") {
      setFormData({
        product_id: spv.product_id,
        supplier_id: spv.supplier_id,
        size: spv.size,
        color_name: spv.color_name,
        color_hex: spv.color_hex,
        stock_quantity: spv.stock_quantity,
      });
    }
  }, [productVariantModalType]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (productVariantModalType === "create") {
      addVariant(productId, formData as AddProductVariantInput);
    } else if (productVariantModalType === "update" && spv) {
      updateVariant(
        spv.product_id,
        spv.id,
        formData as UpdateProductVariantInput,
      );
    }
  };

  return (
    <ModalWrapper
      title={typeMap[productVariantModalType].title}
      isOpen={productVariantModalOpen}
      onClose={closeProductVariantModal}
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Supplier Id and Size */}
        <div className="flex space-x-4">
          <div className="w-1/2">
            <CustomSelect
              label="SUPPLIER"
              id="supplier_id"
              name="supplier_id"
              options={supplierOptions}
              value={supplier_id}
              onChange={(name, value) =>
                setFormData((prev) => ({ ...prev, [name]: value }))
              }
            />
          </div>

          <div className="w-1/2">
            <CustomInput
              type="number"
              label="Size (US)"
              placeholder="e.g. 8.0"
              id="size"
              name="size"
              value={size}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Color name and hex */}
        <div className="flex space-x-4">
          <div className="w-1/2">
            <CustomInput
              label="Color Name"
              placeholder="e.g. Crimson"
              id="color_name"
              name="color_name"
              value={color_name}
              onChange={handleChange}
            />
          </div>
          <div className="w-1/2">
            <CustomInput
              type="color"
              label="Color Hex"
              id="color_hex"
              name="color_hex"
              value={color_hex}
              onChange={handleChange}
              inputStyles="px-0 border-0 h-10 w-full cursor-pointer"
            />
          </div>
        </div>

        {/* Stock Quantity */}
        <div className="flex space-x-4">
          <div className="w-1/2">
            <CustomInput
              type="number"
              label="Stock Quantity"
              placeholder="e.g. 10"
              id="stock_quantity"
              name="stock_quantity"
              value={stock_quantity}
              onChange={handleChange}
            />
          </div>
          {/* Empty spacer div to maintain grid alignment consistency */}
          <div className="w-1/2" />
        </div>

        {/* Form Action Footer */}
        <div className="flex items-center justify-end space-x-4">
          <CustomButton
            type="button"
            title="Cancel"
            titleStyles="font-medium text-secondary"
            buttonStyles="bg-white hover:bg-gray-100 border border-border"
            onClick={closeProductVariantModal}
          />
          <CustomButton
            type="submit"
            title={typeMap[productVariantModalType].btnTitle}
            titleStyles="text-white"
            buttonStyles="bg-primary hover:bg-primary-hover"
            loading={loading}
          />
        </div>
      </form>
    </ModalWrapper>
  );
};

export default ProductVariantModal;
