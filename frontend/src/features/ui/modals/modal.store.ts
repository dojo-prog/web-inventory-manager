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

    set({ categoryModalType: type, categoryModalOpen: true });
  },
  closeCategoryModal: () => {
    set({
      selectedCategory: null,
      categoryModalType: "create",
      categoryModalOpen: false,
    });
  },

  // Supplier
  supplierModalOpen: false,
  supplierModalType: "create" as ModalType,
  selectedSupplier: null,
  openSupplierModal: (type, supplier) => {
    if (supplier) {
      set({ selectedSupplier: supplier });
    }

    set({ supplierModalType: type, supplierModalOpen: true });
  },
  closeSupplierModal: () => {
    set({ selectedSupplier: null, supplierModalOpen: false });
  },

  // Product
  productModalOpen: false,
  productModalType: "create" as ModalType,
  selectedProduct: null,
  openProductModal: (type, product) => {
    if (product) {
      set({ selectedProduct: product });
    }

    set({ productModalType: type, productModalOpen: true });
  },
  closeProductModal: () => {
    set({ selectedProduct: null, productModalOpen: false });
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
