import type {
  Category,
  DetailedBrand,
  ProductWithRelations,
  Supplier,
} from "@web-inventory-manager/shared";

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

  // Supplier Modal
  supplierModalOpen: boolean;
  supplierModalType: ModalType;
  selectedSupplier: Supplier | null;
  openSupplierModal: (type: ModalType, supplier?: Supplier) => void;
  closeSupplierModal: () => void;

  // Products
  productModalOpen: boolean;
  productModalType: ModalType;
  selectedProduct: ProductWithRelations | null;
  openProductModal: (type: ModalType, product?: ProductWithRelations) => void;
  closeProductModal: () => void;

  // Delete Confirmation Modal
  deleteConfirmModalOpen: boolean;
  entity: Entity;
  selectedEntity: any; // TODO replace w/ true entity type
  openDeleteConfirmModal: (entityType: Entity, entityData: any) => void;
  closeDeleteConfirmModal: () => void;
}
