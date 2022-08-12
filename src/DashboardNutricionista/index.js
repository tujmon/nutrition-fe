import 'react-calendar/dist/Calendar.css';
import './calendar.scss';
import { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import { BiTrash } from 'react-icons/bi';
import { FaUserCircle } from 'react-icons/fa';
import styles from './style.module.scss';
import Modal from '../components/modal';
import FormDiet from './Forms/FormDiet';

import FormConsult from './Forms/FormConsult';
import FormClient from './Forms/FormClient';
import FormAvaliation from './Forms/FormAvaliation';
import FormMeal from './Forms/FormMeal';

import getFetch from '../utils/getFetch';

function DashboardNutricionista() {
  const [calendarDate, setCalendarDate] = useState(new Date());

  const [dietIsOpen, setDietIsOpen] = useState(false);
  const [consultIsOpen, setConsultIsOpen] = useState(false);
  const [avaliationIsOpen, setAvaliationIsOpen] = useState(false);
  const [clientIsOpen, setClientIsOpen] = useState(false);
  const [mealIsOpen, setMealIsOpen] = useState(false);

  const [avaliation, setAvaliation] = useState([{ client: { name: null } }]);
  const [appointment, setAppointment] = useState([{ client: { name: null } }]);
  const [diet, setDiet] = useState([{ client: { name: null } }]);
  const [client, setClient] = useState([{ id: 1, name: 'arthur', diets: [] }]);
  const onChange = (value) => {
    setCalendarDate(new Date(value));
  };
  useEffect(() => {
    getFetch('http://localhost:3000/avaliation', setAvaliation);
    getFetch('http://localhost:3000/appointment', setAppointment);
    getFetch('http://localhost:3000/client', setClient);
    getFetch('http://localhost:3000/diet', setDiet);
  }, []);

  function transformDate(initialDate) {
    const dateTransform = new Date(initialDate);
    dateTransform.setHours(dateTransform.getHours() + 3);
    const formattedDate = `${dateTransform.getHours()}:${dateTransform.getMinutes()}`;
    return formattedDate;
  }
  function compareDate(date1) {
    const date1New = new Date(date1);
    date1New.setHours(date1New.getHours() + 3);
    const dayMonth1 = `${date1New.getDate()}${date1New.getMonth()}`;
    const dayMonth2 = `${calendarDate.getDate()}${calendarDate.getMonth()}`;
    return dayMonth1 === dayMonth2;
  }
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
            <Calendar onChange={onChange} value={calendarDate} className={`react-calendar ${styles.calendar}`} />
          </div>
          <div className={styles.dadosContainer}>
            <h1>Dados</h1>
            <div className={styles.dadosClientes}>
              <h1>Novos Clientes</h1>
              <p>{client.length}</p>
            </div>
            <div className={styles.dadosDietasF}>
              <h1>DietasFeitas</h1>
              <p>{diet.length}</p>
            </div>
            <div className={styles.dadosDietasP}>
              <h1>Dietas Pendentes</h1>
              <p>{client.length - diet.length}</p>
            </div>
            <div className={styles.dadosConsultas}>
              <h1>Consultas Pendentes</h1>
              <p>{appointment.length}</p>
            </div>
          </div>
          <div className={styles.consultasContainer}>
            <div className={styles.title}>
              <h1>Consultas da Data</h1>
              <button type="button" onClick={() => setConsultIsOpen(true)}>Nova Consulta</button>
            </div>
            {appointment.map((element) => (
              compareDate(element.dateAndTime, calendarDate) && (
              <div key={element.id} className={styles.consultas}>
                <p>
                  Consulta
                  {' '}
                  {element.client.name}
                </p>
                <div>
                  {transformDate(element.dateAndTime)}
                </div>
                <a href="/#">
                  <BiTrash />
                </a>
              </div>
              )
            )) }
          </div>
          <div className={styles.avaliacoesContainer}>
            <div className={styles.title}>
              <h1>Avaliações</h1>
              <button
                type="button"
                onClick={() => {
                  setAvaliationIsOpen(true);
                }}
              >
                Nova Avaliacao

              </button>
            </div>
            {avaliation.map((element) => (
              <div key={avaliation.id} className={styles.avaliacoes}>
                <p>
                  Avaliação
                  {' '}
                  {element.client.name}
                </p>
                <div>
                  status
                  <a href="/#">
                    <BiTrash />
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.dietasContainer}>
            <div className={styles.title}>
              <h1>Dietas</h1>
              <button type="button" onClick={() => setDietIsOpen(true)}>Nova Dieta</button>
            </div>
            {diet.map(((element) => (
              <div key={diet.id} className={styles.dietas}>
                <p>
                  Dieta
                  {' '}
                  {element.client.name}
                </p>
                <div>
                  status
                  <a href="/#">
                    <BiTrash />
                  </a>
                </div>
              </div>
            )))}
          </div>
          <div className={styles.clientesContainer}>
            <div className={styles.title}>
              <h1>Clientes</h1>
              <button type="button" onClick={() => setClientIsOpen(true)}>Novo Cliente</button>
            </div>
            {client.map(((element) => (
              <div key={client.id} className={styles.clientes}>
                <p>{element.name}</p>
                <div>
                  status
                  <a href="/#">
                    <BiTrash />
                  </a>
                </div>
              </div>
            )))}
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
