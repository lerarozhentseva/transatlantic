import managerIcon from "../../../../assets/images/service/advantages/manager-icon.png";
import planeIcon from "../../../../assets/images/service/advantages/plane-icon.png";
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
              src={planeIcon}
              alt="sea icon"
              className={styles.advantage__icon}
            />
            <h4 className={styles.advantage__heading}>
              Прямые договоры с авиаперевозчиками
            </h4>
            <p className={styles.advantage__descr}>
              Решим ваши задачи быстро и с выгодой для вас благодаря налаженным
              связям с ключевыми перевозчиками.
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
              Ваш груз будет у получателя в то время, на которое вы
              рассчитывали.
            </p>
          </li>
          <li className={styles.advantage__item}>
            <img
              src={docksIcon}
              alt="service icon"
              className={styles.advantage__icon}
            />
            <h4 className={styles.advantage__heading}>
              Подстроимся под ваши планы
            </h4>
            <p className={styles.advantage__descr}>
              Ваши планы не будут нарушены, мы учтем все пожелания по перевозке.
            </p>
          </li>
          <li className={styles.advantage__item}>
            <img
              src={managerIcon}
              alt="safety icon"
              className={styles.advantage__icon}
            />
            <h4 className={styles.advantage__heading}>Сопровождение</h4>
            <p className={styles.advantage__descr}>
              Контролируем весь путь перемещения груза, сообщая вам точное
              местонахождение в любой момент.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Advantages;
