import styles from './style.module.scss';

function FormAvaliation() {
  function submitData() {
    console.log('entrei aqui');
  }
  const array = ['consulta Arthur', 'Consulta Luis', 'Consulta Nathalia', 'Consulta Davi'];
  return (
    <form onSubmit={submitData} className={styles.formDiet}>
      <input type="text" placeholder="Peso" className={styles.inputField} />
      <input type="text" placeholder="Bmi" className={styles.inputField} />
      <input type="text" placeholder="Peso" className={styles.inputField} />
      <input type="text" placeholder="Gordura" className={styles.inputField} />
      <select name="Refeicao" className={styles.meal}>
        {array.map((element) => (
          <option key={element} value={element}>{element}</option>
        ))}
      </select>
      <button type="submit" className={styles.buttonSubmit}>Criar</button>
    </form>
  );
}

export default FormAvaliation;
