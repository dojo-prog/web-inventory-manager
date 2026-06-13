import ModalWrapper from "../../../../shared/ModalWrapper";
import useModalStore from "../../../../features/ui/modals/modal.store";
import { useForm } from "../../../../hooks/useForm";
import CustomInput from "../../../../shared/CustomInput";
import { InfoIcon } from "lucide-react";
import CustomButton from "../../../../shared/CustomButton";
import useCategoryStore from "../../../../features/categories/category.store";
import validateInputs from "../../../../utils/validateInputs";
import {
  AddCategoryInputSchema,
  type AddCategoryInput,
  type UpdateCategoryInput,
} from "@web-inventory-manager/shared";
import { toast } from "react-toastify";
import { useEffect } from "react";

const CategoryModal = () => {
  const {
    categoryModalOpen,
    closeCategoryModal,
    categoryModalType,
    selectedCategory,
  } = useModalStore();
  const { loading, addCategory, updateCategory } = useCategoryStore();

  const { formData, setFormData, handleChange } = useForm({
    name: "",
  });
  const { name } = formData;

  const typeMap = {
    create: {
      title: "Add New Category",
      btnTitle: "Add Category",
    },
    update: {
      title: "Update Existing Category",
      btnTitle: "Update Category",
    },
  };

  useEffect(() => {
    if (!selectedCategory || categoryModalType !== "update") return;

    setFormData({
      name: selectedCategory.name,
    });
  }, [categoryModalType]);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const error = validateInputs(AddCategoryInputSchema, formData);
    if (error) {
      toast.error(error);
      return;
    }

    if (categoryModalType === "create") {
      addCategory(formData as AddCategoryInput);
    } else if (categoryModalType === "update") {
      if (!selectedCategory) return;
      updateCategory(selectedCategory.id, formData as UpdateCategoryInput);
    }
  };

  return (
    <ModalWrapper
      title={typeMap[categoryModalType].title}
      isOpen={categoryModalOpen}
      onClose={closeCategoryModal}
      size="xs"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <CustomInput
          label="Category Name"
          id="name"
          name="name"
          value={name}
          onChange={handleChange}
        />

        <div className="w-full bg-gray-50 flex items-start space-x-4 p-5 rounded">
          <div className="w-5 h-5 mt-1">
            <InfoIcon size={17} className="text-primary" />
          </div>
          <div className="flex">
            <p className="text-secondary font-label text-sm">
              Category Slug will be automatically generated
            </p>
          </div>
        </div>

        <div className="w-full border-b border-border" />

        <div className="flex items-center justify-end space-x-4">
          <CustomButton
            type="button"
            title="Cancel"
            titleStyles="font-medium text-secondary"
            buttonStyles="bg-white hover:bg-gray-100 border border-border"
            onClick={closeCategoryModal}
          />
          <CustomButton
            type="submit"
            title={typeMap[categoryModalType].btnTitle}
            titleStyles="text-white"
            buttonStyles="bg-primary hover:bg-primary-hover"
            loading={loading}
          />
        </div>
      </form>
    </ModalWrapper>
  );
};

export default CategoryModal;
