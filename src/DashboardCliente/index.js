import { useState } from 'react';

import Modal from '../components/modal';
import styles from './style.module.scss';

function DashboardCliente() {
  const [isAvaliationOpen, setAvaliationIsOpen] = useState(false);
  const [isConsultOpen, setConsultIsOpen] = useState(false);
  const [isDietOpen, setDietIsOpen] = useState(false);

  return (
    <div className={styles.flex}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Dashboard</h1>
        </div>
        <div className={styles.avaliacoes}>
          <h1>avaliacoes</h1>
          <button type="button" onClick={() => setAvaliationIsOpen(true)}>Open Modal</button>
        </div>
        <div className={styles.consultas}>
          <h1>consultas</h1>
          <button
            type="button"
            onClick={() => { setConsultIsOpen(true); }}
          >
            Open Modal
          </button>
        </div>
        <div className={styles.dietas}>
          <h1>dietas</h1>
          <button type="button" onClick={() => setDietIsOpen(true)}>Open Modal</button>
        </div>
      </div>

      {isAvaliationOpen && (
      <Modal setIsOpen={setAvaliationIsOpen}>
        <h1>Avaliacao</h1>
      </Modal>
      )}

      {isConsultOpen && (
      <Modal setIsOpen={setConsultIsOpen}>
        <h1>Consulta</h1>
      </Modal>
      )}

      {isDietOpen && (
      <Modal setIsOpen={setDietIsOpen}>
        <h1>Dietas</h1>
      </Modal>
      )}
    </div>
  );
}

export default DashboardCliente;
