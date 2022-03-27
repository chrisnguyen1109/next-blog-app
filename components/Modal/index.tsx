import { ReactNode } from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

interface ModalProps {
    show: boolean;
    title: string;
    children: ReactNode;
    onClose: () => void;
    onOk: () => void;
}

const Modal: React.FC<ModalProps> = ({
    show,
    title,
    children,
    onClose,
    onOk,
}) => {
    return (
        <>
            {show &&
                ReactDOM.createPortal(
                    <div className={classes.modal}>
                        <div
                            className={classes.modal__overlay}
                            onClick={onClose}
                        ></div>
                        <div className={classes.modal__inner}>
                            <div className={classes.modal__body}>
                                <h2>{title}</h2>
                                {children}
                            </div>
                            <div className={classes.modal__footer}>
                                <button onClick={onClose}>Cancel</button>
                                <button onClick={onOk}>Ok</button>
                            </div>
                        </div>
                    </div>,
                    document.getElementById('modal')!
                )}
        </>
    );
};

export default Modal;
