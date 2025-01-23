import { useLocation } from "react-router";
import PropTypes from "prop-types";
import cn from "classnames";
import styles from "./contacts.module.css";

const Contacts = ({ address, tel, mail, className, type }) => {
  const { pathname } = useLocation();

  const variant =
    `${pathname}` === "/contacts" ||
    `${pathname}` === "/containers" ||
    `${pathname}` === "/park" ||
    `${pathname}` === "/privacy";

  return (
    <div className={cn(styles.address, styles[`${className}`])}>
      <address
        className={cn(
          styles.contacts__address,
          styles[`contacts__address--${type}`],
          { [styles["contacts__address--dark"]]: variant }
        )}
      >
        {address}
      </address>
      <ul
        className={cn(
          styles.contacts__list,
          styles[`contacts__address--${type}`]
        )}
      >
        <li
          className={cn(
            styles.contacts__item,
            styles[`contacts__item--${type}`]
          )}
        >
          <a
            href={`tel:${tel}`}
            className={cn(
              styles.contacts__tel,
              styles[`contacts__tel--${type}`],
              { [styles["contacts__tel--dark"]]: variant }
            )}
          >
            {tel}
          </a>
        </li>
        <li
          className={cn(
            styles.contacts__item,
            styles[`contacts__item--${type}`]
          )}
        >
          <a
            href={`mailto:${mail}`}
            className={cn(
              styles.contacts__mail,
              styles[`contacts__mail--${type}`],
              { [styles["contacts__mail--blue"]]: variant }
            )}
          >
            {mail}
          </a>
        </li>
      </ul>
    </div>
  );
};

Contacts.propTypes = {
  address: PropTypes.string,
  tel: PropTypes.string,
  mail: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
};

Contacts.defaultProps = {
  address: "",
  tel: "",
  mail: "",
  className: "",
  type: "",
};

export default Contacts;
