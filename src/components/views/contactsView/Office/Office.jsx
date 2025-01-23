import PropTypes from "prop-types";
import cn from "classnames";
import styles from "./office.module.css";

const Office = ({ tel, mail, address, type, title, id, subtitle, manager }) => {
  return (
    <div className={styles.office} id={`${id}`}>
      <h3 className={styles.office__title}>
        {title} {subtitle && <span>{subtitle}</span>}
      </h3>
      <ul className={styles.office__list}>
        <li className={styles.office__item}>
          <address className={styles.office__info}>
            Офис-менеджер: {manager}
          </address>
        </li>
        <li className={styles.office__item}>
          <span className={styles.office__heading}>Телефон:</span>
          <a className={styles.office__info} href={`tel:${tel}`}>
            {tel}
          </a>
        </li>
        <li className={styles.office__item}>
          <span className={styles.office__heading}>Email:</span>
          <a className={styles.office__info} href={`mailto:${mail}`}>
            {mail}
          </a>
        </li>
        <li className={styles.office__item}>
          <address className={styles.office__info}>Адрес: {address}</address>
        </li>
      </ul>
      <div
        className={cn(
          styles.office__img,
          { [styles["office__img--ekb"]]: `${type}` === "ekb" },
          { [styles["office__img--msk"]]: `${type}` === "msk" }
        )}
      ></div>
    </div>
  );
};

Office.propTypes = {
  address: PropTypes.string,
  tel: PropTypes.string,
  mail: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  title: PropTypes.string,
  id: PropTypes.string,
};

Office.defaultProps = {
  address: "",
  tel: "",
  mail: "",
  name: "",
  type: "",
  title: "",
  id: "",
};

export default Office;
