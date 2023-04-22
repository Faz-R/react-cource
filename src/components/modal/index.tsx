import { ReactNode } from 'react';
import classes from './index.module.css';

interface ModalProps {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  children: ReactNode;
}

const Modal = ({ visible, setVisible, children }: ModalProps) => {
  return (
    <div
      className={`${classes.modal} ${visible && classes.active}`}
      onClick={(e) => {
        e.stopPropagation();
        setVisible(false);
      }}
      data-testid="modal"
    >
      <div className={classes.content} onClick={(e) => e.stopPropagation()}>
        <div
          className={`fa-solid fa-xmark ${classes.cross}`}
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
