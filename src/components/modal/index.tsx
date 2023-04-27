import { ReactNode } from 'react';
import './index.css';

interface ModalProps {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  children: ReactNode;
}

const Modal = ({ visible, setVisible, children }: ModalProps) => {
  return (
    <div
      className={`modal ${visible && 'modal__active'}`}
      onClick={(e) => {
        e.stopPropagation();
        setVisible(false);
      }}
      data-testid="modal"
    >
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <div
          className={`fa-solid fa-xmark modal__cross`}
          onClick={(e) => {
            e.stopPropagation();
            setVisible(false);
          }}
          data-testid="close"
        />
        {children}
      </div>
    </div>
  );
};

export default Modal;
