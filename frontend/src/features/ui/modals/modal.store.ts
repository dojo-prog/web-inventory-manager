import { create } from "zustand";
import type { ModalState } from "./modal.types";

const useModalStore = create<ModalState>((set) => ({
  // Brands
  brandModalOpen: false,
  modalType: "create",
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
}));

export default useModalStore;
