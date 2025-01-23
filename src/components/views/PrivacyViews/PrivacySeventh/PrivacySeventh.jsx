import styles from "./PrivacySeventh.module.css";
import { seventhRules } from "../../../../constants";

const PrivacySeventh = () => {
  return (
    <section className={styles.seventhRules}>
      <div className={styles.seventhRules__containers}>
        <h2 className={styles.seventhRules__title}>
          <span className={styles.seventhRules__number}>7.</span>Меры по
          обеспечению безопасности персональных данных при их обработке
        </h2>
        <ul className={styles.seventhRules__list}>
          {seventhRules.map(({ id, number, text, subRules }) => {
            return (
              <>
                <li key={id} className={styles.seventhRules__item}>
                  <span className={styles.seventhRules__textNumber}>
                    {number}
                  </span>
                  <p className={styles.seventhRules__text}>{text}</p>
                </li>
                {subRules && (
                  <ul className={styles.seventhSubRules__list}>
                    {subRules.map(({ id, number, text }) => {
                      return (
                        <li key={id} className={styles.seventhSubRules__item}>
                          <span className={styles.seventhSubRules__textNumber}>
                            {number}
                          </span>
                          <p className={styles.seventhSubRules__text}>{text}</p>
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

export default PrivacySeventh;
