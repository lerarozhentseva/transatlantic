import styles from "./PrivacySixth.module.css";
import { sixthRules } from "../../../../constants";

const PrivacySixth = () => {
  return (
    <section className={styles.sixthRules}>
      <div className={styles.sixthRules__containers}>
        <h2 className={styles.sixthRules__title}>
          <span className={styles.sixthRules__number}>6.</span>Обязанности
          администрации сайта
        </h2>
        <ul className={styles.sixthRules__list}>
          {sixthRules.map(({ id, number, text, subRules }) => {
            return (
              <>
                <li key={id} className={styles.sixthRules__item}>
                  <span className={styles.sixthRules__textNumber}>
                    {number}
                  </span>
                  <p className={styles.sixthRules__text}>{text}</p>
                </li>
                {subRules && (
                  <ul className={styles.sixthSubRules__list}>
                    {subRules.map(({ id, number, text, subParagraphs }) => {
                      return (
                        <>
                          <li key={id} className={styles.sixthSubRules__item}>
                            <span className={styles.sixthSubRules__textNumber}>
                              {number}
                            </span>
                            <p className={styles.sixthSubRules__text}>{text}</p>
                          </li>
                          {subParagraphs && (
                            <ul className={styles.sixthSubParagraphs__list}>
                              {subParagraphs.map(({ id, number, text }) => {
                                return (
                                  <>
                                    <li
                                      key={id}
                                      className={
                                        styles.sixthSubParagraphs__item
                                      }
                                    >
                                      <span
                                        className={
                                          styles.sixthSubParagraphs__textNumber
                                        }
                                      >
                                        {number}
                                      </span>
                                      <p
                                        className={
                                          styles.sixthSubParagraphs__text
                                        }
                                      >
                                        {text}
                                      </p>
                                    </li>
                                  </>
                                );
                              })}
                            </ul>
                          )}
                        </>
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

export default PrivacySixth;
