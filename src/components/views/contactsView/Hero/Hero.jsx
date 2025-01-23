import { Link } from "react-scroll";
import Office from "../Office/Office";
import styles from "./hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__container}>
        <h2 className={styles.hero__title}>Контакты</h2>
        <div className={styles.hero__wrapper}>
          <div className={styles.hero__top}>
            <h3 className={styles.hero__heading}>Филиалы</h3>
            <div className={styles.hero__button__wrapper}>
              <Link
                to="ekb"
                smooth={true}
                offset={-150}
                duration={500}
                className={styles.hero__button}
              >
                Екатеринбург
              </Link>
              <Link
                to="msk"
                smooth={true}
                offset={-150}
                duration={500}
                className={styles.hero__button}
              >
                Москва
              </Link>
              <Link
                to="brief"
                smooth={true}
                offset={-150}
                duration={500}
                className={styles.hero__button}
              >
                Оставить заявку
              </Link>
            </div>
          </div>

          <div className={styles.hero__bottom}>
            <Office
              id="ekb"
              tel=" +7 343 216-99-90"
              mail=" office@transatlantic.pro"
              address="620014, г. Екатеринбург, ул. Бориса Ельцина 1А, оф. 11.3 (БЦ «Президент»)"
              type="ekb"
              title="Офис"
              subtitle="в г. Екатеринбург"
              manager="Полина Клевакина"
            />
            <Office
              id="msk"
              tel=" +7 495 455-45-92"
              mail=" office@transatlantic.pro"
              address="129343, г. Москва, пр-д Серебрякова, 14, строение 10, офис 10204"
              type="msk"
              title="Офис в г. Москва "
              manager="Полина Клевакина"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
