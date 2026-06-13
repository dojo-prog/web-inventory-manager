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

  // Categories
  categoryModalOpen: false,
  categoryModalType: "create" as ModalType,
  selectedCategory: null,
  openCategoryModal: (type, category) => {
    if (category) {
      set({ selectedCategory: category });
    }

    set({ modalType: type, categoryModalOpen: true });
  },
  closeCategoryModal: () => {
    set({
      selectedCategory: null,
      modalType: "create",
      categoryModalOpen: false,
    });
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
