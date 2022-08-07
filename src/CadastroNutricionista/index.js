import styles from './style.module.scss';
import logoImage from '../assets/img/sysfit.png';

function CadastroNutricionista() {
  return (
    <>
      <div className={styles.header}>
        <h1>Cadastro de Nutricionistas</h1>
      </div>
      <div className={styles.container}>
        <div className={styles.containerLogo}>
          <img className={styles.logo} src={logoImage} alt="gabigol" />
        </div>
        <form className={styles.forms} action="submit">
          <input type="text" placeholder="Nome Completo" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Telefone" />
          <input type="text" placeholder="CNN" />
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </>
  );
}

export default CadastroNutricionista;
