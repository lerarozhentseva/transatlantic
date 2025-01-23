import styles from "./routesList.module.css";

const RoutesList = ({ routes }) => {
  return (
    <ul className={styles.routes__list}>
      {routes?.map(({ id, title, descrFirst, descrSecond, descrThird }) => (
        <li key={id} className={styles.routes__item}>
          <h4 className={styles.routes__title}>{title}</h4>
          <p className={styles.routes__descr}>{descrFirst}</p>
          {descrSecond ? (
            <p className={styles.routes__descr}>{descrSecond}</p>
          ) : null}
          {descrThird ? (
            <p className={styles.routes__descr}>{descrThird}</p>
          ) : null}
        </li>
      ))}
    </ul>
  );
};

export default RoutesList;
