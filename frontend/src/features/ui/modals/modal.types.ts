import type {
  Category,
  DetailedBrand,
  ProductVariant,
  ProductWithRelations,
  Supplier,
  User,
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

  // Product Variant
  productVariantModalOpen: boolean;
  productVariantModalType: ModalType;
  selectedProductVariant: ProductVariant | null;
  openProductVariantModal: (type: ModalType, variant?: ProductVariant) => void;
  closeProductVariantModal: () => void;

  // Users
  userModalOpen: boolean;
  userModalType: ModalType;
  selectedUser: User | null;
  openUserModal: (type: ModalType, user?: User) => void;
  closeUserModal: () => void;

  // Delete Confirmation Modal
  deleteConfirmModalOpen: boolean;
  entity: Entity;
  selectedEntity: any; // TODO replace w/ true entity type
  openDeleteConfirmModal: (entityType: Entity, entityData: any) => void;
  closeDeleteConfirmModal: () => void;
}
