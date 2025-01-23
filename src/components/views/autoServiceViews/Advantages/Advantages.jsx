import managerIcon from "../../../../assets/images/service/advantages/manager-icon.png";
import truckIcon from "../../../../assets/images/service/advantages/truck-icon.png";
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
              src={truckIcon}
              alt="sea icon"
              className={styles.advantage__icon}
            />
            <h4 className={styles.advantage__heading}>
              Прямые договоры с автоперевозчиками
            </h4>
            <p className={styles.advantage__descr}>
              Быстро найдём машину и согласуем все условия перевозки.
            </p>
          </li>
          <li className={styles.advantage__item}>
            <img
              src={watchIcon}
              alt="port icon"
              className={styles.advantage__icon}
            />
            <h4 className={styles.advantage__heading}>Точно в срок</h4>
            <p className={styles.advantage__descr}>
              Подадим контейнер точно к назначенному времени.
            </p>
          </li>
          <li className={styles.advantage__item}>
            <img
              src={managerIcon}
              alt="service icon"
              className={styles.advantage__icon}
            />
            <h4 className={styles.advantage__heading}>Сопровождение</h4>
            <p className={styles.advantage__descr}>
              Контролируем весь путь перемещения груза, сообщая вам точное
              местонахождение в любой момент.
            </p>
          </li>
          <li className={styles.advantage__item}>
            <img
              src={docksIcon}
              alt="safety icon"
              className={styles.advantage__icon}
            />
            <h4 className={styles.advantage__heading}>Даже если сроки горят</h4>
            <p className={styles.advantage__descr}>
              Выполним заказ в течение суток после обращения.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Advantages;
