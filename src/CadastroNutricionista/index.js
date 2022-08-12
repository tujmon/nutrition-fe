/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from 'react-hook-form';
import styles from './style.module.scss';
import logoImage from '../assets/img/sysfit.png';

function CadastroNutricionista() {
  const {
    register, handleSubmit,
  } = useForm();
  function submitData(data) {
    fetch('http://localhost:3000/nutricionist', {
      headers: {
        'Content-Type': 'application/json',
        accept: '*/*',
      },
      method: 'POST',
      body: JSON.stringify(data),
    });
  }
  return (
    <>
      <div className={styles.header}>
        <h1>Cadastro de Nutricionistas</h1>
      </div>
      <div className={styles.container}>
        <div className={styles.containerLogo}>
          <img className={styles.logo} src={logoImage} alt="gabigol" />
        </div>
        <form onSubmit={handleSubmit(submitData)} className={styles.forms}>
          <input {...register('name', { required: true })} type="text" placeholder="Nome Completo" />
          <input {...register('email', { required: true })} type="text" placeholder="Email" />
          <input {...register('phone', { required: true })} type="text" placeholder="Telefone" />
          <input {...register('cnn', { required: true })} type="text" placeholder="CNN" />
          <input {...register('password', { required: true })} type="text" placeholder="Password" />
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </>
  );
}

export default CadastroNutricionista;
