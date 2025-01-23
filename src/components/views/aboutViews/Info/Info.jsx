import styles from "./info.module.css";
import cn from "classnames";

const Info = () => {
  return (
    <section className={styles.info}>
      <div className={styles.info__container}>
        <div className={styles.info__left}>
          <h3 className={styles.info__title}>Реквизиты</h3>
        </div>
        <div className={styles.info__right}>
          <div className={cn(styles.info__subdescr, styles.info__list)}>
            <p className={styles.info__text}>ООО «ТрансАтлантик»</p>
            <p className={styles.info__text}>ОГРН: 1169658095419</p>
            <p className={styles.info__text}>ИНН: 6678074723</p>
            <p className={styles.info__text}>КПП: 667801001</p>
            <p className={styles.info__text}>
              Юридический адрес: 620908, г. Екатеринбург, п. Шувакиш, ул.
              Шитовская, д.14
            </p>
          </div>
          <div className={styles.office}>
            <h5 className={styles.office__title}>Офис в Екатеринбурге</h5>
            <p className={styles.info__text}>
              620014, г. Екатеринбург, ул. Бориса Ельцина 1А, оф. 11.3 (БЦ
              «Президент»)
            </p>
          </div>
          <div className={styles.office}>
            <h5 className={styles.office__title}>Офис в Москве</h5>
            <p className={styles.info__text}>
              129343, г. Москва, пр-д Серебрякова, 14, строение 10, офис 10204
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
