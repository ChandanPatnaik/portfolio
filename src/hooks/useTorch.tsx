import { create } from "zustand";

type AuthState = {
  isTorchOn: boolean;
  setIsTorchOn: (pre: boolean) => void;
};
const useTorch = create<AuthState>((set) => ({
  isTorchOn: false,
  setIsTorchOn: () => set((state) => ({ isTorchOn: !state.isTorchOn })),
}));

export default useTorch;
