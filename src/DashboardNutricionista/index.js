import 'react-calendar/dist/Calendar.css';
import './calendar.scss';
import { useState } from 'react';
import Calendar from 'react-calendar';
import { BiTrash } from 'react-icons/bi';
import { FaUserCircle } from 'react-icons/fa';
import styles from './style.module.scss';
import Modal from '../components/modal';
import FormDiet from './FormDiet';

import FormConsult from './FormConsult';
import FormClient from './FormClient';
import FormAvaliation from './FormAvaliation';
import FormMeal from './FormMeal';

function DashboardNutricionista() {
  const [date, setDate] = useState(new Date());

  const [dietIsOpen, setDietIsOpen] = useState(false);
  const [consultIsOpen, setConsultIsOpen] = useState(false);
  const [avaliationIsOpen, setAvaliationIsOpen] = useState(false);
  const [clientIsOpen, setClientIsOpen] = useState(false);
  const [mealIsOpen, setMealIsOpen] = useState(false);
  const onChange = (value) => {
    setDate(value);
  };
  return (
    <>
      <div className={styles.flex}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h1>Dashboard</h1>
            <a href="/#">
              <FaUserCircle />
            </a>
          </div>
          <div className={styles.calendarContainer}>
            <h1>Calendar</h1>
            <Calendar onChange={onChange} value={date} className={`react-calendar ${styles.calendar}`} />
          </div>
          <div className={styles.dadosContainer}>
            <h1>Dados</h1>
            <div className={styles.dadosClientes}>
              <h1>Novos Clientes</h1>
              <p>42</p>
            </div>
            <div className={styles.dadosDietasF}>
              <h1>Dietas Feitas</h1>
              <p>42</p>
            </div>
            <div className={styles.dadosDietasP}>
              <h1>Dietas Pendentes</h1>
              <p>42</p>
            </div>
            <div className={styles.dadosConsultas}>
              <h1>Consultas Pendentes</h1>
              <p>42</p>
            </div>
          </div>
          <div className={styles.consultasContainer}>
            <div className={styles.title}>
              <h1>consultas da data</h1>
              <button type="button" onClick={() => setConsultIsOpen(true)}>Nova Consulta</button>
            </div>

            <div className={styles.consultas}>
              <p>consulta a</p>
              <a href="/#">
                <BiTrash />
              </a>
            </div>
            <div className={styles.consultas}>
              <p>consulta b</p>
              <a href="/#">
                <BiTrash />
              </a>
            </div>
            <div className={styles.consultas}>
              <p>consulta c</p>
              <a href="/#">
                <BiTrash />
              </a>
            </div>
          </div>
          <div className={styles.avaliacoesContainer}>
            <div className={styles.title}>
              <h1>avaliacoes</h1>
              <button type="button" onClick={() => setAvaliationIsOpen(true)}>Nova Avaliacao</button>
            </div>
            <div className={styles.avaliacoes}>
              <p>avaliacao nome</p>
              <div>
                status
                <a href="/#">
                  <BiTrash />
                </a>
              </div>
            </div>
          </div>
          <div className={styles.dietasContainer}>
            <div className={styles.title}>
              <h1>Dietas</h1>
              <button type="button" onClick={() => setDietIsOpen(true)}>Nova Dieta</button>
            </div>
            <div className={styles.dietas}>
              <p>avaliacao nome</p>
              <div>
                status
                <a href="/#">
                  <BiTrash />
                </a>
              </div>
            </div>
          </div>
          <div className={styles.clientesContainer}>
            <div className={styles.title}>
              <h1>clientes</h1>
              <button type="button" onClick={() => setClientIsOpen(true)}>Novo Cliente</button>
            </div>
            <div className={styles.clientes}>
              <p>avaliacao nome</p>
              <div>
                status
                <a href="/#">
                  <BiTrash />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {dietIsOpen
      && (
      <Modal setIsOpen={setDietIsOpen}>
        <FormDiet setIsOpen={setMealIsOpen} />
      </Modal>
      )}
      {consultIsOpen
      && (
      <Modal setIsOpen={setConsultIsOpen}>
        <FormConsult />
      </Modal>
      )}
      {avaliationIsOpen
      && (
      <Modal setIsOpen={setAvaliationIsOpen}>
        <FormAvaliation />
      </Modal>
      )}
      {clientIsOpen
      && (
      <Modal setIsOpen={setClientIsOpen}>
        <FormClient />
      </Modal>
      )}
      {mealIsOpen
      && (
        <Modal setIsOpen={setMealIsOpen}>
          <FormMeal />
        </Modal>
      )}
    </>
  );
}

export default DashboardNutricionista;
