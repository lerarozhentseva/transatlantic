import styles from "./PrivacyFourth.module.css";
import { fourthRules } from "../../../../constants";

const PrivacyFourth = () => {
  return (
    <section className={styles.fourthRules}>
      <div className={styles.fourthRules__containers}>
        <h2 className={styles.fourthRules__title}>
          <span className={styles.fourthRules__number}>4.</span>Принципы
          обработки персональных данных
        </h2>
        <ul className={styles.fourthRules__list}>
          {fourthRules.map(({ id, number, text }) => {
            return (
              <li key={id} className={styles.fourthRules__item}>
                <span className={styles.fourthRules__textNumber}>{number}</span>
                <p className={styles.fourthRules__text}>{text}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default PrivacyFourth;
