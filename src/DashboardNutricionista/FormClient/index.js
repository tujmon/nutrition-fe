import styles from './style.module.scss';

function FormClient() {
  function submitData() {
    console.log('entrei aqui');
  }
  return (
    <form onSubmit={submitData} className={styles.formDiet}>
      <input type="text" className={styles.inputField} placeholder="Nome" />
      <input type="text" className={styles.inputField} placeholder="Telefone" />
      <input type="text" className={styles.inputField} placeholder="Email" />
      <input type="text" className={styles.inputField} placeholder="Senha" />
      <button type="submit" className={styles.buttonSubmit}>Criar</button>
    </form>
  );
}

export default FormClient;
