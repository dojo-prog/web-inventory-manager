import { TriangleAlert } from "lucide-react";
import useModalStore from "../features/ui/modals/modal.store";
import ModalWrapper from "./ModalWrapper";
import CustomButton from "./CustomButton";

const DeleteConfirmationModal = () => {
  const { deleteConfirmModalOpen, closeDeleteConfirmModal, entity } =
    useModalStore();

  return (
    <ModalWrapper
      title="Removal Confirmation"
      isOpen={deleteConfirmModalOpen}
      onClose={closeDeleteConfirmModal}
      size="xs"
    >
      <div className="w-full flex flex-col items-center text-center space-y-4">
        <div className="h-16 w-16 bg-red-100 rounded flex items-center justify-center">
          <TriangleAlert className="text-red-500" size={35} />
        </div>

        <h2 className="text-xl font-headline font-bold capitalize">
          Delete {entity}?
        </h2>

        <p className="font-label text-sm text-secondary">
          Are you sure you want to delete this {entity}? This action{" "}
          <span className="font-bold text-black">cannot be undone.</span>
        </p>

        <div className="w-full border-t border-border flex items-center space-x-4 mt-8">
          <CustomButton
            type="button"
            title="Cancel"
            titleStyles="font-medium text-secondary"
            buttonStyles="w-1/2 bg-white hover:bg-gray-100 border border-border"
            onClick={closeDeleteConfirmModal}
          />
          <CustomButton
            type="submit"
            title={`Delete ${entity}`}
            titleStyles="text-white"
            buttonStyles="w-1/2 bg-red-500 hover:bg-red-600"
          />
        </div>
      </div>
    </ModalWrapper>
  );
};

export default DeleteConfirmationModal;
