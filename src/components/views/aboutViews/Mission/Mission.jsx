import styles from "./mission.module.css";

const Mission = () => {
  return (
    <section className={styles.mission}>
      <div className={styles.mission__container}>
        <div className={styles.mission__left}>
          <h3 className={styles.mission__title}>Наша миссия</h3>
        </div>
        <div className={styles.mission__right}>
          <p className={styles.mission__text}>
            Постоянное движение и рост — то, что непрерывно сопровождает наш
            путь в мире логистики, благодаря труду и заботе о клиентах.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Mission;
