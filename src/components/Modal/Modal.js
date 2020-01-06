import React  from 'react';
import RModal from 'react-modal';

import './Modal.sass';

export default function Modal({isOpen, children, close}) {
  return (
      <RModal
        className="Modal"
        overlayClassName="Modal__overlay"
        isOpen={isOpen}
        onRequestClose={close}
        closeTimeoutMS={500}
        appElement={document.body}
      >
        {children}
      </RModal>
  )
}
