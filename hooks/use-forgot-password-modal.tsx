import { create } from "zustand";

interface useForgotPasswordModalStore {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}

export const useForgotPasswordModal = create<useForgotPasswordModalStore>(
  (set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
  })
)
