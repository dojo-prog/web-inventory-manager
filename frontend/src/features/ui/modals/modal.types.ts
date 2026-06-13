import type { Category, DetailedBrand } from "@web-inventory-manager/shared";

export type ModalType = "create" | "update";
export type Entity = "brand" | "category" | "product" | "user" | undefined;

export interface ModalState {
  // Brand Modal
  brandModalOpen: boolean;
  modalType: ModalType;
  selectedBrand: DetailedBrand | null;
  openBrandModal: (type: ModalType, brand?: DetailedBrand) => void;
  closeBrandModal: () => void;

  // Category Modal
  categoryModalOpen: boolean;
  categoryModalType: ModalType;
  selectedCategory: Category | null;
  openCategoryModal: (type: ModalType, category?: Category) => void;
  closeCategoryModal: () => void;

  // Delete Confirmation Modal
  deleteConfirmModalOpen: boolean;
  entity: Entity;
  selectedEntity: any; // TODO replace w/ true entity type
  openDeleteConfirmModal: (entityType: Entity, entityData: any) => void;
  closeDeleteConfirmModal: () => void;
}
