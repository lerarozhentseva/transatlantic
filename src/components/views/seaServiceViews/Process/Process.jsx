import { servicesPage } from "constants";
import styles from "./process.module.css";

const Process = () => {
  const serviceEl = servicesPage?.find((el) => el.path === "1") || {};

  const services = serviceEl?.process?.services;

  return (
    <section className={styles.process}>
      <div className={styles.process__container}>
        <div className={styles.process__left}>
          <h3 className={styles.process__title}>{serviceEl?.process?.title}</h3>
        </div>
        <div className={styles.process__right}>
          <div className={styles.process__cards}>
            <p className={styles.process__descr}>{serviceEl?.process?.descr}</p>
            {services?.map(({ id, heading, list }) => {
              return (
                <div key={id} className={styles.process__card}>
                  <h4 className={styles.process__heading}>{heading}</h4>

                  <ul className={styles.process__list}>
                    {list?.map(({ id, text }) => {
                      return (
                        <li key={id} className={styles.process__item}>
                          <span className={styles.process__dot}></span>
                          <p className={styles.process__text}>{text}</p>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
