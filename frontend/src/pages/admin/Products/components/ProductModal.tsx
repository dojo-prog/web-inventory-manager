import { useEffect, useState } from "react";
import useModalStore from "../../../../features/ui/modals/modal.store";
import { useForm } from "../../../../hooks/useForm";
import CustomInput from "../../../../shared/CustomInput";
import CustomSegmentedControl from "../../../../shared/CustomSegmentedControl";
import CustomTextArea from "../../../../shared/CustomTextArea";
import ImageUploadZone from "../../../../shared/ImageUploadZone";
import ModalWrapper from "../../../../shared/ModalWrapper";
import CustomToggleSwitch from "../../../../shared/CustomToggleSwitch";
import CustomSelect from "../../../../shared/CustomSelect";
import useBrandStore from "../../../../features/brands/brand.store";
import useCategoryStore from "../../../../features/categories/category.store";
import CustomButton from "../../../../shared/CustomButton";
import useProductStore from "../../../../features/products/product.store";
import UploadImagePreview from "../../../../shared/UploadImagePreview";
import validateInputs from "../../../../utils/validateInputs";
import { toast } from "react-toastify";
import {
  ProductFormSchema,
  type ProductForm,
} from "../../../../schemas/product";

const genderButtons = [
  { title: "unisex", value: "unisex" },
  { title: "men", value: "men" },
  { title: "women", value: "women" },
];

const ProductModal = () => {
  const {
    productModalOpen,
    closeProductModal,
    productModalType,
    selectedProduct: sp,
  } = useModalStore();
  const { brands, fetchBrands } = useBrandStore();
  const { categories, fetchCategories } = useCategoryStore();
  const { loading, addProduct, updateProduct } = useProductStore();

  const brandOptions = brands.map((b) => ({
    title: b.name,
    value: b.id,
  }));

  const categoryOptions = categories.map((c) => ({
    title: c.name,
    value: c.id,
  }));

  useEffect(() => {
    if (brands.length === 0) {
      fetchBrands({ limit: 100000000000 });
    }
    if (categories.length === 0) {
      fetchCategories({ limit: 100000000000 });
    }
  }, []);

  const typeMap = {
    create: {
      title: "Add New Product",
      btnTitle: "Add Product",
    },
    update: {
      title: "Update Existing Product",
      btnTitle: "Update Product",
    },
  };

  const { formData, setFormData, handleChange, handleFileChange } = useForm({
    name: "",
    price: 0,
    brand_id: "",
    category_id: "",
    description: "",
    gender: "unisex",
    status: "active",
    thumbnail: undefined,
  });
  const { name, price, brand_id, category_id, description, status } = formData;

  const [thumbnailPreview, setThumbnailPreview] = useState<string>("");

  useEffect(() => {
    if (sp) {
      setFormData({
        name: sp.name,
        price: sp.price,
        brand_id: sp.brand_id,
        category_id: sp.category_id,
        description: sp.description,
        gender: sp.gender,
        status: sp.status,
      });

      if (sp.thumbnail_url) {
        setThumbnailPreview(sp.thumbnail_url);
      }
    }
  }, [sp]);

  const handleThumbnailSelection = (e: any) => {
    const file = e.target.files?.[0];

    if (!file) return;

    if (thumbnailPreview) URL.revokeObjectURL(thumbnailPreview);

    setThumbnailPreview(URL.createObjectURL(file));

    handleFileChange(e);
  };

  const handleRemoveThumbnail = () => {
    if (thumbnailPreview) URL.revokeObjectURL(thumbnailPreview);
    setThumbnailPreview("");

    setFormData((prev) => ({ ...prev, thumbnail: undefined }));
  };

  useEffect(() => {
    return () => {
      if (thumbnailPreview) URL.revokeObjectURL(thumbnailPreview);
    };
  }, [thumbnailPreview]);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const error = validateInputs(ProductFormSchema, formData);

    if (error) {
      toast.error(error);
      return;
    }

    if (productModalType === "create") {
      addProduct(formData as ProductForm);
    } else if (productModalType === "update") {
      if (!sp || !sp.id) return;
      updateProduct(sp.id, formData as ProductForm);
    }
  };

  return (
    <ModalWrapper
      title={typeMap[productModalType].title}
      isOpen={productModalOpen}
      onClose={closeProductModal}
      size="md"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name and Price */}
        <div className="w-full flex space-x-4">
          <div className="w-1/2">
            <CustomInput
              label="PRODUCT NAME"
              placeholder="e.g. Air Max Logistics Pro"
              id="name"
              name="name"
              inputStyles="text-sm"
              value={name}
              onChange={handleChange}
            />
          </div>
          <div className="w-1/2">
            <CustomInput
              type="number"
              label="PRICE (PHP)"
              placeholder="0.00"
              id="price"
              name="price"
              inputStyles="text-sm"
              value={price}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Brand and Category */}
        <div className="w-full flex space-x-4">
          <div className="w-1/2">
            <CustomSelect
              label="BRAND"
              id="brand_id"
              name="brand_id"
              value={brand_id}
              options={brandOptions}
              onChange={(name, value) =>
                setFormData((prev) => ({ ...prev, [name]: value }))
              }
            />
          </div>
          <div className="w-1/2">
            <CustomSelect
              label="CATEGORY"
              id="category_id"
              name="category_id"
              value={category_id}
              options={categoryOptions}
              onChange={(name, value) =>
                setFormData((prev) => ({ ...prev, [name]: value }))
              }
            />
          </div>
        </div>

        {/* Gender and Status */}
        <div className="w-full flex items-center space-x-6 bg-gray-50/50 p-3 rounded-lg border border-gray-100">
          <div className="w-1/2">
            <CustomSegmentedControl
              label="GENDER TARGET"
              id="gender"
              name="gender"
              value={formData.gender}
              buttons={genderButtons}
              onChange={(name, value) =>
                setFormData((prev) => ({ ...prev, [name]: value }))
              }
            />
          </div>

          {/* Status Section (Active switch preview) */}
          <div className="w-1/2">
            <CustomToggleSwitch
              label="AVAILABILITY STATUS"
              checked={status === "active"}
              onChange={(isChecked) =>
                setFormData((prev) => ({
                  ...prev,
                  status: isChecked ? "active" : "inactive",
                }))
              }
              stateLabels={["active", "inactive"]}
            />
          </div>
        </div>

        {/* Description */}
        <CustomTextArea
          label="DESCRIPTION"
          placeholder="Describe materials, texh specs, and target usage..."
          id="description"
          name="description"
          value={description}
          onChange={handleChange}
        />

        {/* Thumbnail */}
        {thumbnailPreview ? (
          <UploadImagePreview
            imagePreview={thumbnailPreview}
            handleRemove={handleRemoveThumbnail}
          />
        ) : (
          <ImageUploadZone
            label="PRODUCT THUMBNAIL"
            id="thumbnail"
            name="thumbnail"
            fileChange={handleThumbnailSelection}
          />
        )}

        <div className="flex items-center justify-end space-x-4">
          <CustomButton
            type="button"
            title="Cancel"
            titleStyles="font-medium text-secondary"
            buttonStyles="bg-white hover:bg-gray-100 border border-border"
            onClick={closeProductModal}
          />
          <CustomButton
            type="submit"
            title={typeMap[productModalType].btnTitle}
            titleStyles="text-white"
            buttonStyles="bg-primary hover:bg-primary-hover"
            loading={loading}
          />
        </div>
      </form>
    </ModalWrapper>
  );
};

export default ProductModal;
