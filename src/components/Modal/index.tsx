import React from 'react';
import { Modal as AntModal, ModalProps as AntModalProps } from 'antd';

interface ModalProps extends AntModalProps {
    modalBody: React.ReactNode;
    setOpenModal?: React.Dispatch<React.SetStateAction<boolean>>;
}

const App: React.FC<ModalProps> = ({ modalBody, setOpenModal, ...props }) => {
    return (
        <AntModal onClose={() => setOpenModal && setOpenModal(false)} {...props}>
            {modalBody}
        </AntModal>
    );
};

export default App;