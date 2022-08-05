import Modal from 'react-modal';
import React, { useCallback } from 'react';
import styles from './style.module.scss';

function DashboardCliente() {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const openModal = useCallback((() => {
    setIsOpen(true);
  }), [setIsOpen]);
  const closeModal = useCallback((() => {
    setIsOpen(false);
  }), [setIsOpen]);

  return (
    <div className={styles.flex}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Dashboard</h1>
        </div>
        <div className={styles.avaliacoes}>
          <h1>avaliacoes</h1>
        </div>
        <div className={styles.consultas}>
          <h1>consultas</h1>
        </div>
        <div className={styles.dietas}>
          <h1>dietas</h1>
          <button type="button" onClick={openModal}>Open Modal</button>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className={styles.modal}
        contentLabel="Example Modal"
        overlayClassName={styles.overlayModal}
      >
        <h1>Dietas</h1>
        <button type="button" onClick={closeModal}>close</button>

      </Modal>
    </div>
  );
}

export default DashboardCliente;
