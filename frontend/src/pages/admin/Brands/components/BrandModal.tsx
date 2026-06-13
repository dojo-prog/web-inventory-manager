import ModalWrapper from "../../../../shared/ModalWrapper";
import useModalStore from "../../../../features/ui/modals/modal.store";
import CustomInput from "../../../../shared/CustomInput";
import { useForm } from "../../../../hooks/useForm";
import ImageUploadZone from "../../../../shared/ImageUploadZone";
import { InfoIcon } from "lucide-react";
import CustomButton from "../../../../shared/CustomButton";

const BrandModal = () => {
  const { brandModalOpen, closeBrandModal, modalType } = useModalStore();

  const brandTypeMap = {
    create: {
      title: "Add New Brand",
    },
    update: {
      title: "Update Brand",
    },
  };

  const { formData, handleChange } = useForm({
    name: "",
    logo: undefined,
  });
  const { name, logo } = formData;

  return (
    <ModalWrapper
      isOpen={brandModalOpen}
      onClose={closeBrandModal}
      title={brandTypeMap[modalType].title}
      size="sm"
    >
      <form className="space-y-4">
        <CustomInput
          label="BRAND NAME"
          placeholder="e.g. Velocity Sport"
          id="name"
          name="name"
          value={name}
          onChange={handleChange}
        />

        <ImageUploadZone
          label="BRAND LOGO"
          id="logo"
          name="logo"
          fileChange={(e) => {}}
        />

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
          />
        </div>
      </form>
    </ModalWrapper>
  );
};

export default BrandModal;
