/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from 'react-hook-form';
import styles from './style.module.scss';

function FormClient() {
  const {
    register, handleSubmit,
  } = useForm();

  function submitData(data) {
    const {
      name, phone, email, password,
    } = data;
    const nutricionistId = 14;
    fetch('http://localhost:3000/client', {
      headers: {
        'Content-Type': 'application/json',
        accept: '*/*',
      },
      method: 'POST',
      body: JSON.stringify({
        name, phone, email, password, nutricionistId,
      }),
    });
  }
  return (
    <form onSubmit={handleSubmit(submitData)} className={styles.formDiet}>
      <input {...register('name', { required: true })} type="text" className={styles.inputField} placeholder="Nome" />
      <input {...register('phone', { required: true })} type="text" className={styles.inputField} placeholder="Telefone" />
      <input {...register('email', { required: true })} type="text" className={styles.inputField} placeholder="Email" />
      <input {...register('password', { required: true })} type="password" className={styles.inputField} placeholder="Senha" />
      <button type="submit" className={styles.buttonSubmit}>Criar</button>
    </form>
  );
}

export default FormClient;
