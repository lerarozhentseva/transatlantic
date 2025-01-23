import { casesPage } from "constants";
import { useParams } from "react-router-dom";
import styles from "./options.module.css";

const Options = () => {
  const { caseID } = useParams();
  const caseEl = casesPage?.find((el) => el.path === caseID) || {};
  const conditions = caseEl?.options?.conditions || [];

  return (
    <section className={styles.options}>
      <div className={styles.options__container}>
        <div className={styles.options__left}>
          <h3 className={styles.options__title}>{caseEl?.options?.title}</h3>
        </div>
        <div className={styles.options__right}>
          <ul className={styles.options__list}>
            {conditions?.map(({ id, heading, text }) => {
              return (
                <li key={id} className={styles.options__item}>
                  <h4 className={styles.options__heading}>{heading}</h4>
                  <p className={styles.options__text}>{text}</p>
                </li>
              );
            })}
          </ul>
          <div className={styles.options__descrWrapper}>
            <h3 className={styles.options__descrTitle}>
              {caseEl?.options?.descrTitle}
            </h3>
            <p className={styles.options__descr}>{caseEl?.options?.descr}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Options;
