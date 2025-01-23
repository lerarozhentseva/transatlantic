import cn from "classnames";
import styles from "./about.module.css";

const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.about__container}>
        <div className={styles.about__left}></div>
        <div className={styles.about__right}>
          <div className={cn(styles.about__subdescr, styles.about__list)}>
            <p className={styles.about__text}>
              Мы, команда «ТрансАтлантик», рады приветствовать вас!
            </p>
            <p className={styles.about__text}>
              Наша компания занимает уверенную позицию в области логистики
              и вот уже более 7 лет предоставляет первоклассные услуги
              в этой сфере.
            </p>
            <p className={styles.about__text}>
              Мы будем рады помочь вам с решением любых задач грузоперевозок!
            </p>
          </div>
        </div>
        {/* <div className={styles.whoAreWe__container}> */}
        <div className={styles.whoAreWe__left}>
          <h3 className={styles.whoAreWe__title}>О нас</h3>
        </div>
        <div className={styles.whoAreWe__right}>
          <div className={styles.whoAreWe__cards}>
            <div className={styles.whoAreWe__card}>
              <ul className={styles.whoAreWe__list}>
                <li className={styles.whoAreWe__item}>
                  <p className={styles.whoAreWe__text}>
                    Компания появилась в 2016 году, когда мы, два преданных
                    своему делу партнёра, решили дать своим клиентам тот уровень
                    сервиса, какого они еще не встречали в сфере логистики.
                  </p>
                </li>
                <li className={styles.whoAreWe__item}>
                  <p className={styles.whoAreWe__text}>
                    И, пожалуй, нам это удалось!
                  </p>
                </li>
                <li className={styles.whoAreWe__item}>
                  <p className={styles.whoAreWe__text}>
                    Так и появилась компания «ТрансАтлантик» — безграничный союз
                    качества работы и преодоления расстояний. С уверенностью
                    можем сказать, наше главное отличие — это всесторонний
                    сервис для клиентов и контроль каждого этапа грузоперевозки.
                  </p>
                </li>
                <li className={styles.whoAreWe__item}>
                  <p className={styles.whoAreWe__text}>
                    Мы убеждены, что главное — это люди. Поэтому человеческие
                    отношения, забота — основные составляющие нашей работы.
                  </p>
                </li>
                <li className={styles.whoAreWe__item}>
                  <p className={styles.whoAreWe__text}>
                    На сегодня команда ТрансАтлантик — это
                    более 100 единомышленников в двух офисах Екатеринбурга
                    и Москвы. Совсем скоро мы сможем вас приветствовать в наших
                    представительствах во Владивостоке и Новосибирске!
                  </p>
                </li>
              </ul>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
    </section>
  );
};

export default About;
