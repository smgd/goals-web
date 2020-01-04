import React, { memo, useContext } from 'react';
import { ModalContext } from './ModalContext';
import { ModalCard } from '../Common.styles';
import useHandleClickOutside from '../CustomHooks/useHandeClickOutside';

const Modal = memo(({ component }) => {
  const { setModal } = useContext(ModalContext);

  useHandleClickOutside('modal', () => setModal(null));

  return (
    <ModalCard id="modal">
      {React.cloneElement(component, { setModal })}
    </ModalCard>
  );
});

export default Modal;
