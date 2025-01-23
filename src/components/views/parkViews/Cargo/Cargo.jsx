import { cargo } from "constants";
import styles from "./cargo.module.css";

const Cargo = () => {
  return (
    <section className={styles.cargo}>
      <div className={styles.cargo__container}>
        <h3 className={styles.cargo__title}>Возможные грузы</h3>
        <ul className={styles.cargo__list}>
          {cargo.map(({ id, text }) => {
            return (
              <li key={id} className={styles.cargo__item}>
                <p className={styles.cargo__text}>{text}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Cargo;
