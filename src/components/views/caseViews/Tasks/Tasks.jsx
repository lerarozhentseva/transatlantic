import { casesPage } from "constants";
import { useParams } from "react-router-dom";
import styles from "./tasks.module.css";

const Tasks = () => {
  const { caseID } = useParams();
  const caseEl = casesPage?.find((el) => el.path === caseID) || {};

  return (
    <section className={styles.tasks}>
      <div className={styles.tasks__container}>
        <div className={styles.tasks__left}>
          <h3 className={styles.tasks__title}>{caseEl?.tasks?.title}</h3>
        </div>
        <div className={styles.tasks__right}>
          <div className={styles.tasks__descrWrapper}>
            <p className={styles.tasks__descr}>{caseEl?.tasks?.descr}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tasks;
