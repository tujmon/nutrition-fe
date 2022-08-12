import { useState, useEffect } from 'react';

import { BiTrash } from 'react-icons/bi';
import { FaUserCircle } from 'react-icons/fa';
import Modal from '../components/modal';
import ShowAvaliation from './ShowAvaliation';
import ShowDiet from './ShowDiet';
import styles from './style.module.scss';
import getFetch from '../utils/getFetch';

function DashboardCliente() {
  const [isAvaliationOpen, setIsAvaliationOpen] = useState(false);
  const [selectedAvaliation, setSelectedAvaliation] = useState(1);
  const [isDietOpen, setIsDietOpen] = useState(false);
  const [client, setClient] = useState([{
    name: 'undefined',
    appointments: [{ id: null, dateAndTime: new Date() }],
    diets: [{ id: 1, calories: 1 },
    ],
    avaliations: [{ date: new Date() }],
  }]);
  function dataAtualFormatada(data) {
    const dia = data.getDate().toString().padStart(2, '0');
    const mes = (data.getMonth() + 1).toString().padStart(2, '0'); // +1 pois no getMonth Janeiro começa com zero.
    const ano = data.getFullYear();
    return `${dia}/${mes}/${ano}`;
  }
  useEffect(() => {
    getFetch('http://localhost:3000/client', setClient);
  }, []);

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
          {client.map(((element) => (
            element.avaliations.map(((avaliation) => (
              <div className={styles.avaliacoes}>
                <p>
                  avaliacao -
                  {' '}
                  {dataAtualFormatada(new Date(avaliation.date))}
                </p>
                <div>
                  <button
                    type="button"
                    className={styles.buttonLink}
                    onClick={() => {
                      setSelectedAvaliation(avaliation.appointmentId);
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
            )))
          )))}
        </div>
        <div className={styles.consultasContainer}>
          <div className={styles.title}>
            <h1>consultas Marcadas</h1>
          </div>
          {client.map(((element) => (
            element.appointments.map(((appointment) => (
              <div key={appointment.id} className={styles.consultas}>
                <p>
                  consulta -
                  {' '}
                  {dataAtualFormatada(new Date(appointment.dateAndTime))}
                </p>
                <a href="/#">
                  <BiTrash />
                </a>
              </div>
            )))
          )))}

        </div>
        <div className={styles.dietasContainer}>
          <div className={styles.title}>
            <h1>Dietas</h1>
          </div>
          {client.map(((element) => (
            element.diets.map(((diet) => (
              <div key={diet.id} className={styles.dietas}>
                <p>
                  consulta -
                  {' '}
                  {diet.id}
                </p>
                <a href="/#">
                  <BiTrash />
                </a>
              </div>
            )))
          )))}
        </div>
      </div>

      {isAvaliationOpen && (
      <ShowAvaliation setIsOpen={setIsAvaliationOpen} avaliationId={selectedAvaliation} />
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
