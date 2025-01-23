import styles from "./PrivacyFifth.module.css";
import { fifthRules } from "../../../../constants";

const PrivacyFifth = () => {
  return (
    <section className={styles.fifthRules}>
      <div className={styles.fifthRules__containers}>
        <h2 className={styles.fifthRules__title}>
          <span className={styles.fifthRules__number}>5.</span>Условия обработки
          персональных данных
        </h2>
        <ul className={styles.fifthRules__list}>
          {fifthRules.map(({ id, number, text, subRules }) => {
            return (
              <>
                <li key={id} className={styles.fifthRules__item}>
                  <span className={styles.fifthRules__textNumber}>
                    {number}
                  </span>
                  <p className={styles.fifthRules__text}>{text}</p>
                </li>
                {subRules && (
                  <ul className={styles.fifthSubRules__list}>
                    {subRules.map(({ id, number, text }) => {
                      return (
                        <li key={id} className={styles.fifthSubRules__item}>
                          <span className={styles.fifthSubRules__textNumber}>
                            {number}
                          </span>
                          <p className={styles.fifthSubRules__text}>{text}</p>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default PrivacyFifth;
