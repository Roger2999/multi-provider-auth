import { LoginForm, RegisterForm } from "./components/Forms";

import { useContext } from "react";
import { ModalContext } from "./context";
import { ModalPortal } from "./components";
export const FormApp = () => {
  const { openModal, setOpenModal } = useContext(ModalContext);
  const { openModal2, setOpenModal2 } = useContext(ModalContext);

  const open = () => {
    setOpenModal(true);
  };
  const open2 = () => {
    setOpenModal2(true);
  };
  return (
    <>
      <div className="open-btns">
        <button type="button" className="btn" onClick={open}>
          Open Modal #1
        </button>
        <button type="button" className="btn" onClick={open2}>
          Open Modal #2
        </button>
      </div>
      <ModalPortal openModal={openModal} setOpenModal={setOpenModal}>
        <h1>Modal con Portal</h1>
        <h2>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime
          labore odit accusantium incidunt id assumenda enim, exercitationem
          ullam dolore! Ipsam inventore cupiditate vero. Libero amet, laboriosam
          hic quos voluptates doloremque?
        </h2>
      </ModalPortal>
      <ModalPortal openModal={openModal2} setOpenModal={setOpenModal2}>
        <h1>Modal 2 con Portal</h1>
        <h2>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime
          labore odit accusantium incidunt id assumenda enim, exercitationem
          ullam dolore! Ipsam inventore cupiditate vero. Libero amet, laboriosam
          hic quos voluptates doloremque?
        </h2>
      </ModalPortal>
      <RegisterForm />
      <LoginForm />
    </>
  );
};
