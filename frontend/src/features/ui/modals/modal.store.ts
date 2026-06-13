import { create } from "zustand";
import type { ModalState, ModalType } from "./modal.types";

const useModalStore = create<ModalState>((set) => ({
  // Brands
  brandModalOpen: false,
  modalType: "create" as ModalType,
  selectedBrand: null,
  openBrandModal: (type, brand) => {
    if (brand) {
      set({ selectedBrand: brand });
    }

    set({ modalType: type, brandModalOpen: true });
  },
  closeBrandModal: () => {
    set({ selectedBrand: null, modalType: "create", brandModalOpen: false });
  },

  // Delete Confirmation
  deleteConfirmModalOpen: false,
  entity: undefined,
  selectedEntity: null,
  openDeleteConfirmModal: (entityType, entityData) => {
    if (!entityData) return;

    set({
      entity: entityType,
      selectedEntity: entityData,
      deleteConfirmModalOpen: true,
    });
  },
  closeDeleteConfirmModal: () => {
    set({
      entity: undefined,
      selectedEntity: null,
      deleteConfirmModalOpen: false,
    });
  },
}));

export default useModalStore;
