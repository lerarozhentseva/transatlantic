import { casesPage } from "constants";
import { useParams } from "react-router-dom";
import styles from "./task.module.css";

const Task = () => {
  const { caseID } = useParams();
  const caseEl = casesPage?.find((el) => el.path === caseID) || {};
  const conditions = caseEl?.tasks?.conditions || [];

  return (
    <section className={styles.task}>
      <div className={styles.task__container}>
        <div className={styles.task__left}>
          <h3 className={styles.task__title}>{caseEl?.tasks?.title}</h3>
        </div>
        <div className={styles.task__right}>
          <ul className={styles.task__list}>
            {conditions?.map(({ id, heading, text }) => {
              return (
                <li key={id} className={styles.task__item}>
                  <h4 className={styles.task__heading}>{heading}</h4>
                  <p className={styles.task__text}>{text}</p>
                </li>
              );
            })}
          </ul>
          <div className={styles.task__descrWrapper}>
            <h3 className={styles.task__descrTitle}>
              {caseEl?.tasks?.descrTitle}
            </h3>
            <p className={styles.task__descr}>{caseEl?.tasks?.descr}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Task;
