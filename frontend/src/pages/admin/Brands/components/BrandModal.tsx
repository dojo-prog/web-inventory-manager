import ModalWrapper from "../../../../shared/ModalWrapper";
import useModalStore from "../../../../features/ui/modals/modal.store";
import CustomInput from "../../../../shared/CustomInput";
import { useForm } from "../../../../hooks/useForm";
import ImageUploadZone from "../../../../shared/ImageUploadZone";
import { InfoIcon } from "lucide-react";
import CustomButton from "../../../../shared/CustomButton";
import { useEffect, useState, type ChangeEvent } from "react";
import UploadImagePreview from "../../../../shared/UploadImagePreview";
import validateInputs from "../../../../utils/validateInputs";
import { toast } from "react-toastify";
import useBrandStore from "../../../../features/brands/brand.store";
import { BrandFormSchema, type BrandForm } from "../../../../schemas/brand";

const BrandModal = () => {
  const { addBrand, loading } = useBrandStore();
  const { brandModalOpen, closeBrandModal, modalType } = useModalStore();

  const brandTypeMap = {
    create: {
      title: "Add New Brand",
    },
    update: {
      title: "Update Brand",
    },
  };

  const { formData, setFormData, handleChange, handleFileChange } = useForm({
    name: "",
    logo: undefined,
  });
  const { name } = formData;

  const [logoPreview, setLogoPreview] = useState<string>("");

  const handleLogoSelection = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    if (logoPreview) URL.revokeObjectURL(logoPreview);

    setLogoPreview(URL.createObjectURL(file));

    handleFileChange(e);
  };

  const handleRemoveLogo = () => {
    if (logoPreview) URL.revokeObjectURL(logoPreview);
    setLogoPreview("");

    setFormData((prev) => ({ ...prev, logo: undefined }));
  };

  useEffect(() => {
    return () => {
      if (logoPreview) URL.revokeObjectURL(logoPreview);
    };
  }, [logoPreview]);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const error = validateInputs(BrandFormSchema, formData);
    if (error) {
      toast.error(error);
      return;
    }

    if (modalType === "create") {
      addBrand(formData as BrandForm);
    }
  };

  return (
    <ModalWrapper
      isOpen={brandModalOpen}
      onClose={closeBrandModal}
      title={brandTypeMap[modalType].title}
      size="sm"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <CustomInput
          label="BRAND NAME"
          placeholder="e.g. Velocity Sport"
          id="name"
          name="name"
          value={name}
          onChange={handleChange}
        />

        {logoPreview ? (
          <UploadImagePreview
            imagePreview={logoPreview}
            handleRemove={handleRemoveLogo}
          />
        ) : (
          <ImageUploadZone
            label="BRAND LOGO"
            id="logo"
            name="logo"
            fileChange={handleLogoSelection}
          />
        )}

        {/* Message block */}
        <div className="w-full bg-gray-50 flex items-start space-x-4 p-5 rounded">
          <div className="w-5 h-5 mt-1">
            <InfoIcon size={17} className="text-primary" />
          </div>
          <div className="flex">
            <p className="text-secondary font-label text-sm">
              Verify brand trademark and category alignment before submitting.
              New brands require manager approval.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-end space-x-4">
          <CustomButton
            type="button"
            title="Cancel"
            titleStyles="font-medium text-secondary"
            buttonStyles="bg-white hover:bg-gray-100 border border-border"
            onClick={closeBrandModal}
          />
          <CustomButton
            type="submit"
            title="Add Brand"
            titleStyles="text-white"
            buttonStyles="bg-primary hover:bg-primary-hover"
            loading={loading}
          />
        </div>
      </form>
    </ModalWrapper>
  );
};

export default BrandModal;
