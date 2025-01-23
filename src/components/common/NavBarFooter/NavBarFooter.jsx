import { NavLink, useLocation, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import cn from "classnames";
import styles from "./navbarFooter.module.css";

const NavBarFooter = ({ type, setOpenMenu }) => {
  const { pathname } = useLocation();
  const { caseID } = useParams();

  const variant =
    `${pathname}` === "/contacts" ||
    `${pathname}` === "/containers" ||
    `${pathname}` === "/park" ||
    `${pathname}` === "/privacy";

  return (
    <nav className={cn(styles.nav, styles[`nav--${type}`])}>
      <ul className={cn(styles.nav__list, styles[`nav__list--${type}`])}>
        <li className={cn(styles.nav__item, styles[`nav__item--${type}`])}>
          <NavLink
            onClick={() => setOpenMenu(false)}
            to={"/about"}
            className={cn(styles.nav__link, styles[`nav__link--${type}`], {
              [styles["nav__link--blue"]]: variant,
              [styles["nav__link--light"]]:
                pathname === `/cases/${caseID}` ||
                pathname === "/about" ||
                pathname === "/services/1" ||
                pathname === "/services/5" ||
                pathname === "/services/2" ||
                pathname === "/services/3" ||
                pathname === "/services/4",
            })}
          >
            О компании
          </NavLink>
        </li>

        <li className={cn(styles.nav__item, styles[`nav__item--${type}`])}>
          <NavLink
            onClick={() => setOpenMenu(false)}
            to={"/services"}
            className={cn(styles.nav__link, styles[`nav__link--${type}`], {
              [styles["nav__link--blue"]]: variant,
              [styles["nav__link--light"]]:
                pathname === `/cases/${caseID}` ||
                pathname === "/services/1" ||
                pathname === "/services/5" ||
                pathname === "/services/2" ||
                pathname === "/services/3" ||
                pathname === "/services/4" ||
                pathname === "/about",
            })}
          >
            Услуги
          </NavLink>
        </li>
        <li className={cn(styles.nav__item, styles[`nav__item--${type}`])}>
          <NavLink
            onClick={() => setOpenMenu(false)}
            to={"/cases"}
            className={cn(styles.nav__link, styles[`nav__link--${type}`], {
              [styles["nav__link--blue"]]: variant,
              [styles["nav__link--light"]]:
                pathname === `/cases/${caseID}` ||
                pathname === "/services/1" ||
                pathname === "/services/5" ||
                pathname === "/services/2" ||
                pathname === "/services/3" ||
                pathname === "/services/4" ||
                pathname === "/about",
            })}
          >
            Кейсы
          </NavLink>
        </li>

        <li className={cn(styles.nav__item, styles[`nav__item--${type}`])}>
          <NavLink
            onClick={() => setOpenMenu(false)}
            to={"/park"}
            className={cn(styles.nav__link, styles[`nav__link--${type}`], {
              [styles["nav__link--blue"]]: variant,
              [styles["nav__link--light"]]:
                pathname === `/cases/${caseID}` ||
                pathname === "/services/1" ||
                pathname === "/services/5" ||
                pathname === "/services/2" ||
                pathname === "/services/3" ||
                pathname === "/services/4" ||
                pathname === "/about",
            })}
          >
            Контейнерный парк
          </NavLink>
        </li>
        <li className={cn(styles.nav__item, styles[`nav__item--${type}`])}>
          <NavLink
            onClick={() => setOpenMenu(false)}
            to={"/contacts"}
            className={cn(styles.nav__link, styles[`nav__link--${type}`], {
              [styles["nav__link--blue"]]: variant,
              [styles["nav__link--light"]]:
                pathname === `/cases/${caseID}` ||
                pathname === "/services/1" ||
                pathname === "/services/5" ||
                pathname === "/services/2" ||
                pathname === "/services/3" ||
                pathname === "/services/4" ||
                pathname === "/about",
            })}
          >
            {type === "footer" ? null : "Контакты"}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

NavBarFooter.propTypes = {
  type: PropTypes.string,
  setOpenMenu: PropTypes.func,
};

NavBarFooter.defaultProps = {
  type: "",
  setOpenMenu: () => {},
};

export default NavBarFooter;
