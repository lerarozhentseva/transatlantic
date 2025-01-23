import styles from "./PrivacyFirst.module.css";
import { firstRules } from "../../../../constants";

const PrivacyFirst = () => {
  return (
    <section className={styles.firstRules}>
      <div className={styles.firstRules__containers}>
        <h2 className={styles.firstRules__title}>
          <span className={styles.firstRules__number}>1.</span>Введение
        </h2>
        <ul className={styles.firstRules__list}>
          {firstRules.map(({ id, number, text }) => {
            return (
              <li key={id} className={styles.firstRules__item}>
                <span className={styles.firstRules__textNumber}>{number}</span>
                <p className={styles.firstRules__text}>{text}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default PrivacyFirst;
