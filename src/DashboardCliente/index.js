import { useState } from 'react';

import { BiTrash } from 'react-icons/bi';
import { FaUserCircle } from 'react-icons/fa';
import Modal from '../components/modal';
import ShowAvaliation from './ShowAvaliation';
import ShowDiet from './ShowDiet';
import styles from './style.module.scss';

function DashboardCliente() {
  const [isAvaliationOpen, setIsAvaliationOpen] = useState(false);
  const [isDietOpen, setIsDietOpen] = useState(false);

  return (
    <div className={styles.flex}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Dashboard</h1>
          <a href="/#">
            <FaUserCircle />
          </a>
        </div>
        <div className={styles.avaliacoesContainer}>
          <div className={styles.title}>
            <h1>avaliacoes</h1>
          </div>
          <div className={styles.avaliacoes}>
            <p>avaliacao nome</p>
            <div>
              <button
                type="button"
                className={styles.buttonLink}
                onClick={() => {
                  setIsAvaliationOpen(true);
                }}
              >
                exibir

              </button>
              <a href="/#">
                <BiTrash />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.consultasContainer}>
          <div className={styles.title}>
            <h1>consultas Marcadas</h1>
          </div>

          <div className={styles.consultas}>
            <p>consulta a</p>
            <a href="/#">
              <BiTrash />
            </a>
          </div>
          <div className={styles.consultas}>
            <p>consulta a</p>
            <a href="/#">
              <BiTrash />
            </a>
          </div>
          <div className={styles.consultas}>
            <p>consulta a</p>
            <a href="/#">
              <BiTrash />
            </a>
          </div>
          <div className={styles.consultas}>
            <p>consulta a</p>
            <a href="/#">
              <BiTrash />
            </a>
          </div>
          <div className={styles.consultas}>
            <p>consulta a</p>
            <a href="/#">
              <BiTrash />
            </a>
          </div>
          <div className={styles.consultas}>
            <p>consulta a</p>
            <a href="/#">
              <BiTrash />
            </a>
          </div>

        </div>
        <div className={styles.dietasContainer}>
          <div className={styles.title}>
            <h1>Dietas</h1>
          </div>
          <div className={styles.dietas}>
            <p>avaliacao nome</p>
            <div>
              <button type="button" className={styles.buttonLink} onClick={() => setIsDietOpen(true)}>exibir</button>
              <a href="/#">
                <BiTrash />
              </a>
            </div>
          </div>
        </div>
      </div>

      {isAvaliationOpen && (
        <Modal setIsOpen={setIsAvaliationOpen}>
          <ShowAvaliation />
        </Modal>
      )}

      {isDietOpen && (
        <Modal setIsOpen={setIsDietOpen}>
          <ShowDiet />
        </Modal>
      )}
    </div>
  );
}

export default DashboardCliente;
