import { AiOutlinePlus } from 'react-icons/ai';
import styles from './style.module.scss';

function FormMeal() {
  function submitData() {
    console.log('entrei aqui');
  }
  const array = ['banana', 'melancia'];
  return (
    <form onSubmit={submitData} className={styles.formDiet}>
      <input type="text" placeholder="Nome" className={styles.inputField} />
      <select name="Alimento" className={styles.meal}>
        {array.map((element) => (
          <option key={element} value={element}>{element}</option>
        ))}
      </select>
      <div>
        <input type="text" placeholder="Quantidade" className={styles.inputField} />
        <button type="button" className={styles.food}>
          <AiOutlinePlus />
        </button>
      </div>

      <button type="submit" className={styles.buttonSubmit}>Criar</button>
    </form>
  );
}

export default FormMeal;
