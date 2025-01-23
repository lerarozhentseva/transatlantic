import styles from "./PrivacyThird.module.css";
import { thirdRules } from "../../../../constants";

const Privacythird = () => {
  return (
    <section className={styles.thirdRules}>
      <div className={styles.thirdRules__containers}>
        <h2 className={styles.thirdRules__title}>
          <span className={styles.thirdRules__number}>3.</span>Цели обработки
          персональных данных
        </h2>
        <ul className={styles.thirdRules__list}>
          {thirdRules.map(({ id, number, text, subRules }) => {
            return (
              <>
                <li key={id} className={styles.thirdRules__item}>
                  <span className={styles.thirdRules__textNumber}>
                    {number}
                  </span>
                  <p className={styles.thirdRules__text}>{text}</p>
                </li>
                {subRules && (
                  <ul className={styles.thirdSubRules__list}>
                    {subRules.map(({ id, number, text }) => {
                      return (
                        <li key={id} className={styles.thirdSubRules__item}>
                          <span className={styles.thirdSubRules__textNumber}>
                            {number}
                          </span>
                          <p className={styles.thirdSubRules__text}>{text}</p>
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

export default Privacythird;
