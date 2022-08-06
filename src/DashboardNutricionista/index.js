import 'react-calendar/dist/Calendar.css';
import './calendar.scss';
import { useState } from 'react';
import Calendar from 'react-calendar';
import styles from './style.module.scss';

function DashboardNutricionista() {
  const [date, setDate] = useState(new Date());
  const onChange = (value) => {
    setDate(value);
  };
  return (
    <div className={styles.flex}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Dashboard</h1>
        </div>
        <div className={styles.calendarContainer}>
          <h1>Calendar</h1>
          <Calendar onChange={onChange} value={date} className={`react-calendar ${styles.calendar}`} />
          {console.log(date)}
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
          <h1>consultas da data</h1>
          <div className={styles.consultas}>
            <p>consulta a</p>
            {' '}
            removerIcon
          </div>
          <div className={styles.consultas}>
            <p>consulta b</p>
            {' '}
            removerIcon
          </div>
          <div className={styles.consultas}>
            <p>consulta c</p>
            {' '}
            removerIcon
          </div>
        </div>
        <div className={styles.avaliacoesContainer}>
          <h1>avaliacoes</h1>
          <div className={styles.avaliacoes}>
            <p>avaliacao nome</p>
            <div>
              <a href="/#">status</a>
              <a href="/#">removerIcon</a>
            </div>
          </div>
        </div>
        <div className={styles.dietasContainer}>
          <h1>dietas</h1>
          <div className={styles.dietas}>
            <p>avaliacao nome</p>
            <div>
              <a href="/#">status</a>
              <a href="/#">removerIcon</a>
            </div>
          </div>
        </div>
        <div className={styles.clientesContainer}>
          <h1>clientes</h1>
          <div className={styles.clientes}>
            <p>avaliacao nome</p>
            <div>
              <a href="/#">status</a>
              <a href="/#">removerIcon</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardNutricionista;
