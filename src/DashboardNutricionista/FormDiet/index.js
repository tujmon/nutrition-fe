import PropTypes from 'prop-types';
import styles from './style.module.scss';

function FormDiet({ setIsOpen }) {
  function submitData() {
    console.log('entrei aqui');
  }
  const array = ['consulta Arthur', 'Consulta Luis', 'Consulta Nathalia', 'Consulta Davi'];
  return (
    <form onSubmit={submitData} className={styles.formDiet}>
      <input type="text" placeholder="Cliente" className={styles.inputField} />
      <select name="Cliente" className={styles.client}>
        {array.map((element) => (
          <option key={element} value={element}>{element}</option>
        ))}
      </select>
      <select name="Refeicao" className={styles.meal}>
        {array.map((element) => (
          <option key={element} value={element}>{element}</option>
        ))}
      </select>
      <button type="button" className={styles.mealLink} onClick={setIsOpen}>Criar nova Refeicao </button>
      <button type="submit" className={styles.buttonSubmit}>Criar</button>
    </form>
  );
}
FormDiet.propTypes = {
  setIsOpen: PropTypes.func.isRequired,
};

export default FormDiet;
