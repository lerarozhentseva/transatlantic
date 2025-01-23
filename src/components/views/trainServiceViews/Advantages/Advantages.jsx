import opportunityIcon from "../../../../assets/images/service/advantages/opportunity-icon.png";
import portIcon from "../../../../assets/images/service/advantages/port-icon.png";
import safetyIcon from "../../../../assets/images/service/advantages/safety-icon.png";
import serviceIcon from "../../../../assets/images/service/advantages/service-icon.png";
import docksIcon from "../../../../assets/images/service/advantages/docs-icon.png";
import watchIcon from "../../../../assets/images/service/advantages/watch-icon.png";

import styles from "./advantages.module.css";

const Advantages = () => {
  return (
    <section className={styles.advantage}>
      <div className={styles.advantage__container}>
        <h3 className={styles.advantage__title}>Почему мы</h3>
        <ul className={styles.advantage__list}>
          <li className={styles.advantage__item}>
            <img
              src={docksIcon}
              alt="sea icon"
              className={styles.advantage__icon}
            />
            <h4 className={styles.advantage__heading}>
              Все под нашим контролем
            </h4>
            <p className={styles.advantage__descr}>
              Забронируем места в поездах, обеспечим беспроблемное прохождение
              границы, позаботимся об оформлении транзитных деклараций.
            </p>
          </li>
          <li className={styles.advantage__item}>
            <img
              src={watchIcon}
              alt="port icon"
              className={styles.advantage__icon}
            />
            <h4 className={styles.advantage__heading}>
              Поможем сэкономить время и деньги
            </h4>
            <p className={styles.advantage__descr}>
              Предложим самый быстрый и выгодный маршрут, предупредим о
              возможных рисках.
            </p>
          </li>
          <li className={styles.advantage__item}>
            <img
              src={portIcon}
              alt="service icon"
              className={styles.advantage__icon}
            />
            <h4 className={styles.advantage__heading}>Свои ж/д агенты</h4>
            <p className={styles.advantage__descr}>
              Партнёры на самых популярных станциях для быстрого решения задач.
            </p>
          </li>
          <li className={styles.advantage__item}>
            <img
              src={serviceIcon}
              alt="safety icon"
              className={styles.advantage__icon}
            />
            <h4 className={styles.advantage__heading}>Прозрачность</h4>
            <p className={styles.advantage__descr}>
              Личный кабинет клиента — для получения любой необходимой
              информации по перевозке.
            </p>
          </li>
          <li className={styles.advantage__item}>
            <img
              src={safetyIcon}
              alt="opportunity icon"
              className={styles.advantage__icon}
            />
            <h4 className={styles.advantage__heading}>Надёжность</h4>
            <p className={styles.advantage__descr}>
              Наша деятельность как перевозчика застрахована.
            </p>
          </li>
          <li className={styles.advantage__item}>
            <img
              src={opportunityIcon}
              alt="manager icon"
              className={styles.advantage__icon}
            />
            <h4 className={styles.advantage__heading}>
              Безграничные возможности
            </h4>
            <p className={styles.advantage__descr}>
              Доставим грузы по всему земному шару.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Advantages;
