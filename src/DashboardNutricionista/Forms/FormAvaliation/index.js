/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';
import styles from './style.module.scss';
import getFetch from '../../../utils/getFetch';

function FormAvaliation() {
  const {
    register, handleSubmit,
  } = useForm();
  const [clients, setClient] = useState([{ }]);
  const [appointments, setAppointment] = useState([{ }]);
  useEffect(() => {
    getFetch('http://localhost:3000/client', setClient);
  }, []);
  useEffect(() => {
    getFetch('http://localhost:3000/appointment', setAppointment);
  }, []);
  function submitData(data) {
    const {
      weightString,
      imcString,
      heightString,
      fatString,
      client,
      appointment,
      adate,
    } = data;
    console.log(client);
    console.log(appointment);
    const clientId = Number(client);
    const weight = Number(weightString);
    const imc = Number(imcString);
    const height = Number(heightString);
    const fat = Number(fatString);
    const appointmentId = Number(appointment);
    const date = new Date(adate).toISOString();
    fetch('http://localhost:3000/avaliation', {
      headers: {
        'Content-Type': 'application/json',
        accept: '*/*',
      },
      method: 'POST',
      body: JSON.stringify({
        weight,
        imc,
        height,
        fat,
        clientId,
        appointmentId,
        date,
      }),
    });
  }
  return (

    <form onSubmit={handleSubmit(submitData)} className={styles.formDiet}>
      {console.log(clients)}
      <input {...register('weightString', { required: true })} type="text" placeholder="Peso" className={styles.inputField} />
      <input {...register('imcString', { required: true })} type="text" placeholder="Bmi" className={styles.inputField} />
      <input {...register('heightString', { required: true })} type="text" placeholder="tamanho" className={styles.inputField} />
      <input {...register('fatString', { required: true })} type="text" placeholder="Gordura" className={styles.inputField} />
      <input {...register('adate', { required: true })} type="date" className={styles.inputField} />
      <select {...register('client')}>
        { clients.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
      <select {...register('appointment')}>
        { appointments.map((option) => (
          <option key={option.id} value={option.id}>
            {new Date(option.dateAndTime).toDateString()}
          </option>
        ))}
      </select>

      <button type="submit" className={styles.buttonSubmit}>Criar</button>
    </form>
  );
}
export default FormAvaliation;
