import { Link } from "react-scroll";
import svgFirst from "../../../../assets/images/park/info/svg-1.png";
import svgSecond from "../../../../assets/images/park/info/svg-2.png";
import styles from "./info.module.css";

const Info = () => {
  return (
    <section className={styles.info}>
      <div className={styles.info__container}>
        <div className={styles.info__top}>
          <h3 className={styles.info__title}>Кому предоставляем</h3>
          <ul className={styles.info__list}>
            <li className={styles.info__item}>
              <img
                src={svgFirst}
                width={50}
                height={50}
                alt="icons"
                className={styles.info__svg}
              />
              <h4 className={styles.info__heading}>Конечным клиентам</h4>
              <p className={styles.info__descr}>
                Загрузка вашими товарами в РФ или за её пределами.
              </p>
            </li>
            <li className={styles.info__item}>
              <img
                src={svgSecond}
                width={50}
                height={50}
                alt="icons"
                className={styles.info__svg}
              />
              <h4 className={styles.info__heading}>Партнерам по перевозке</h4>
              <p className={styles.info__descr}>
                Использование в ваших логистических задачах.
              </p>
            </li>
          </ul>
        </div>
        <div className={styles.info}>
          <h3 className={styles.info__title}>Ценообразование</h3>
          <p className={styles.info__price}>
            Зависит от места нахождения и маршрута перевозки, сможем посчитать
            за 30 минут после получения вашей задачи. 
            <span>Обращайтесь!</span>
          </p>
          <Link
            to="brief"
            smooth={true}
            offset={-150}
            duration={500}
            className={styles.info__btn}
          >
            Арендовать контейнер
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Info;
