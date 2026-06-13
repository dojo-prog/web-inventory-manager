import type { DetailedBrand } from "@web-inventory-manager/shared";

type ModalType = "create" | "update";

export interface ModalState {
  // Brand Modal
  brandModalOpen: boolean;
  modalType: ModalType;
  selectedBrand: DetailedBrand | null;
  openBrandModal: (type: ModalType, brand?: DetailedBrand) => void;
  closeBrandModal: () => void;
}
