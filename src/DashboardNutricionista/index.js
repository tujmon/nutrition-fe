import styles from './style.module.scss';

function DashboardNutricionista() {
  return (
    <div className={styles.flex}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Dashboard</h1>
        </div>
        <div className={styles.calendar}>
          <h1>calendar</h1>
        </div>
        <div className={styles.dados}>
          <h1>Dados</h1>
        </div>
        <div className={styles.consultas}>
          <h1>consultas</h1>
        </div>
        <div className={styles.avaliacoes}>
          <h1>avaliacoes</h1>
        </div>
        <div className={styles.dietas}>
          <h1>dietas</h1>
        </div>
        <div className={styles.clientes}>
          <h1>clientes</h1>
        </div>

      </div>
    </div>
  );
}

export default DashboardNutricionista;
