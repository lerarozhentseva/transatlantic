import { servicesPage } from "constants";
import styles from "./transportation.module.css";

const Transportation = () => {
  const transportationEl = servicesPage?.find((el) => el.path === "2") || {};
  const transportation = transportationEl?.transportation?.services;

  return (
    <section className={styles.transportation}>
      <div className={styles.transportation__container}>
        <div className={styles.transportation__left}>
          <h3 className={styles.transportation__title}>
            {transportationEl?.transportation?.title}
          </h3>
        </div>
        <div className={styles.transportation__right}>
          <div className={styles.transportation__cards}>
            {transportation?.map(({ id, heading, list, descr }) => {
              return (
                <div key={id} className={styles.transportation__card}>
                  <h4 className={styles.transportation__heading}>{heading}</h4>
                  <p className={styles.transportation__descr}>{descr}</p>
                  <ul className={styles.transportation__list}>
                    {list?.map(({ id, text }) => {
                      return (
                        <li key={id} className={styles.transportation__item}>
                          <span className={styles.transportation__dot}></span>
                          <p className={styles.transportation__text}>{text}</p>
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

export default Transportation;
