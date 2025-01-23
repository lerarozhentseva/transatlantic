import { Teams } from "../../../../constants";
import cn from "classnames";
import styles from "./team.module.css";

const Team = ({ color }) => {
  return (
    <section className={cn(styles.team, styles[`team--${color}`])}>
      <div className={styles.team__container}>
        <div className={styles.team__top}>
          <h2
            className={cn(styles.team__title, styles[`team__title--${color}`])}
          >
            Наша команда
          </h2>
        </div>
        <div className={styles.team__wrapper}>
          <ul className={styles.team__list}>
            {Teams?.map(({ id, name, business, avatar }) => {
              return (
                <li key={id} className={styles.team__item}>
                  <img
                    src={avatar}
                    alt="avatar"
                    className={styles.team__avatar}
                  />
                  <div className={styles.team__info}>
                    <h5
                      className={cn(
                        styles.team__name,
                        styles[`team__name--${color}`]
                      )}
                    >
                      {name}
                    </h5>
                    <span
                      className={cn(
                        styles.team__business,
                        styles[`team__business--${color}`]
                      )}
                    >
                      {business}
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Team;
