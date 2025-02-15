import { servicesPage } from "constants";
import styles from "./containers.module.css";

const Containers = () => {
  const serviceEl = servicesPage?.find((el) => el.path === "1") || {};
  const containers = serviceEl?.containers?.containers?.list || [];

  return (
    <section className={styles.containers}>
      <div className={styles.containers__container}>
        <div className={styles.containers__left}>
          <h3 className={styles.containers__title}>
            {serviceEl?.containers?.title}
          </h3>
        </div>
        <div className={styles.containers__right}>
          <div className={styles.containers__top}>
            <h4 className={styles.containers__heading}>
              {serviceEl?.containers?.containers?.heading}
            </h4>

            <ul className={styles.containers__list}>
              {containers?.map(({ id, text }) => {
                return (
                  <li key={id} className={styles.containers__item}>
                    <span className={styles.containers__dot}>•</span>
                    <p className={styles.containers__text}>{text}</p>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={styles.containers__bottom}>
            <div className={styles.containers__img}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Containers;
