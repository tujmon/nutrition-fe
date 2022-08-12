/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';
import styles from './style.module.scss';
import getFetch from '../../../utils/getFetch';

function FormConsult() {
  const [client, setClient] = useState([{ }]);

  const {
    register, handleSubmit, formState: { errors },
  } = useForm();

  useEffect(() => {
    getFetch('http://localhost:3000/client', setClient);
  }, []);

  function submitData(data) {
    const { clients, date, hour } = data;
    const clientId = Number(clients);

    const dateTime = new Date(date);
    dateTime.setHours(dateTime.getHours() + Number(hour));
    const dateAndTime = dateTime.toISOString();
    fetch('http://localhost:3000/appointment', {
      headers: {
        'Content-Type': 'application/json',
        accept: '*/*',
      },
      method: 'POST',
      body: JSON.stringify({ clientId, dateAndTime }),
    });
  }
  return (
    <form onSubmit={handleSubmit(submitData)} className={styles.formDiet}>
      <select {...register('clients')}>
        { client.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
      <input {...register('date')} type="date" />
      <input {...register('hour')} type="text" placeholder="hour" />
      {errors.hour && <span style={{ color: 'red' }}>This field is required</span>}

      <button type="submit" className={styles.buttonSubmit}>Criar</button>
    </form>
  );
}

export default FormConsult;
