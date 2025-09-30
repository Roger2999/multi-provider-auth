import { useEffect, useRef, type ReactNode } from "react";
import { createPortal } from "react-dom";
import "./ModalPortal.css";
interface Props {
  children: ReactNode;
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}
export const ModalPortal = ({ openModal, setOpenModal, children }: Props) => {
  const modalRoot = document.getElementById("modal");
  const modalRef = useRef<HTMLDivElement>(null);
  const keyDown = "keydown";
  const closeModal = () => {
    setOpenModal(false);
  };
  const handleClickContent = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenModal(false);
      }
    };
    if (openModal) {
      document.addEventListener(keyDown, handleEsc);
    }
    return () => {
      document.removeEventListener(keyDown, handleEsc);
    };
  }, [setOpenModal, openModal]);

  if (!openModal || !modalRoot) return null;
  return createPortal(
    <div className="overload" onClick={closeModal}>
      <div className="modall" ref={modalRef} onClick={handleClickContent}>
        <div className="btn-container flex justify-end">
          <button
            type="button"
            className="action-btn action-btn btn btn-outline rounded-full text-lg"
            onClick={closeModal}
          >
            x
          </button>
        </div>
        {children}
      </div>
    </div>,
    modalRoot
  );
};
