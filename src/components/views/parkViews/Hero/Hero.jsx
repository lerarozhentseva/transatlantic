import { Link } from "react-scroll";
import styles from "./hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__container}>
        <h2 className={styles.hero__title}>Контейнерный парк</h2>
        <div className={styles.hero__wrapper}>
          <div className={styles.hero__left}>
            <div className={styles.hero__bg}>
              <h3 className={styles.hero__heading}>Перевезем любой груз</h3>
              <p className={styles.hero__descr}>
                Более 800 контейнеров стандарта 20 и 40 футов под любые ваши
                задачи.
              </p>
              <Link
                to="brief"
                smooth={true}
                offset={-150}
                duration={500}
                className={styles.hero__btn}
              >
                Арендовать контейнер
              </Link>
            </div>
            <p className={styles.hero__text}>
              Наши контейнеры обычно находятся в крупных городах РФ (Москва,
              Екатеринбург, Новосибирск, Санкт-Петербург, Владивосток), часть
              находится в логистических точках Китая.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
