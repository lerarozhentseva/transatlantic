import svgFirst from "../../../../assets/images/park/advantage/svg-1.png";
import svgSecond from "../../../../assets/images/park/advantage/svg-2.png";
import svgThird from "../../../../assets/images/park/advantage/svg-3.png";
import styles from "./advantage.module.css";

const Advantage = () => {
  return (
    <section className={styles.advantage}>
      <div className={styles.advantage__container}>
        <h3 className={styles.advantage__title}>
          Нам важно, как доедет ваш груз
        </h3>
        <ul className={styles.advantage__list}>
          <li className={styles.advantage__item}>
            <img
              src={svgFirst}
              width={50}
              height={50}
              alt="icons"
              className={styles.advantage__svg}
            />
            <h4 className={styles.advantage__heading}>
              Наличие и скорость подачи
            </h4>
            <p className={styles.advantage__descr}>
              Быстро предоставим под загрузку вашего груза.
            </p>
          </li>
          <li className={styles.advantage__item}>
            <img
              src={svgSecond}
              width={50}
              height={50}
              alt="icons"
              className={styles.advantage__svg}
            />

            <h4 className={styles.advantage__heading}>
              Надежность и хорошее состояние
            </h4>
            <p className={styles.advantage__descr}>
              Контроль качества при каждой перевозке.
            </p>
          </li>
          <li className={styles.advantage__item}>
            <img
              src={svgThird}
              width={50}
              height={50}
              alt="icons"
              className={styles.advantage__svg}
            />

            <h4 className={styles.advantage__heading}>Актуальность данных</h4>
            <p className={styles.advantage__descr}>
              Всегда знаем, где и сколько наших контейнеров.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Advantage;
