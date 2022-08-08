import styles from './style.module.scss';

function FormConsult() {
  function submitData() {
    console.log('entrei aqui');
  }
  return (
    <form onSubmit={submitData} className={styles.formDiet}>
      <input type="text" placeholder="Cliente" className={styles.inputField} />
      <input type="text" placeholder="Data" className={styles.inputField} />
      <input type="text" placeholder="Hora" className={styles.inputField} />
      <button type="submit" className={styles.buttonSubmit}>Criar</button>
    </form>
  );
}

export default FormConsult;
