import { useState, type ReactNode } from "react";
import { ModalContext } from "./ModalContext";

export const ModalProvaider = ({ children }: { children: ReactNode }) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openModal2, setOpenModal2] = useState<boolean>(false);
  return (
    <ModalContext.Provider
      value={{ openModal, setOpenModal, openModal2, setOpenModal2 }}
    >
      {children}
    </ModalContext.Provider>
  );
};
