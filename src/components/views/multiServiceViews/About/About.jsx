import { servicesPage } from "constants";
import styles from "./About.module.css";

const About = () => {
  const serviceEl = servicesPage?.find((el) => el.path === "5") || {};
  return (
    <section className={styles.about}>
      <div className={styles.about__container}>
        <div className={styles.about__left}>
          <h3 className={styles.about__title}>{serviceEl?.about?.heading}</h3>
        </div>
        <div className={styles.about__right}>
          <p className={styles.about__descr}>{serviceEl?.about?.descr}</p>
          <p className={styles.about__subDescr}>{serviceEl?.about?.subDescr}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
