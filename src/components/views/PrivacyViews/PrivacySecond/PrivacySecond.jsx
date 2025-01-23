import styles from "./PrivacySecond.module.css";
import { secondRules } from "../../../../constants";
import { NavLink } from "react-router-dom";

const PrivacySecond = () => {
  return (
    <section className={styles.secondRules}>
      <div className={styles.secondRules__containers}>
        <h2 className={styles.secondRules__title}>
          <span className={styles.secondRules__number}>2.</span>Персональные
          данные пользователей
        </h2>
        <ul className={styles.secondRules__list}>
          {secondRules.map(({ id, number, text, subRules, link }) => {
            return (
              <>
                <li key={id} className={styles.secondRules__item}>
                  <span className={styles.secondRules__textNumber}>
                    {number}
                  </span>
                  <p className={styles.secondRules__text}>
                    {text}
                    {link && (
                      <NavLink
                        to="/privacy"
                        target="_blank"
                        className={styles.secondRules__link}
                      >
                        {link}
                      </NavLink>
                    )}
                  </p>
                </li>
                {subRules && (
                  <ul className={styles.secondSubRules__list}>
                    {subRules.map(({ id, number, text }) => {
                      return (
                        <li key={id} className={styles.secondSubRules__item}>
                          <span className={styles.secondSubRules__textNumber}>
                            {number}
                          </span>
                          <p className={styles.secondSubRules__text}>{text}</p>
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

export default PrivacySecond;
