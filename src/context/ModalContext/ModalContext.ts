import { createContext } from "react";

export const ModalContext = createContext<{
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  openModal2: boolean;
  setOpenModal2: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  openModal: false,
  setOpenModal: () => null,
  openModal2: false,
  setOpenModal2: () => null,
});
