import React from 'react';
import { Modal as AntModal, ModalProps as AntModalProps } from 'antd';

interface ModalProps extends AntModalProps {
    modalBody: React.ReactNode;
    setOpenModal?: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: React.FC<ModalProps> = ({ modalBody, setOpenModal, ...props }) => {
    return (
        <AntModal onCancel={() => setOpenModal && setOpenModal(false)} {...props}>
            {modalBody}
        </AntModal>
    );
};

export { Modal };