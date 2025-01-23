import { NavLink, useLocation, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import cn from "classnames";
import styles from "./navbar.module.css";

const NavBar = ({ type, setOpenMenu }) => {
  const { pathname } = useLocation();
  const { caseID } = useParams();

  const secondVariant =
    `${pathname}` === `/cases/${caseID}` ||
    `${pathname}` === "/about" ||
    `${pathname}` === "/services/1" ||
    `${pathname}` === "/services/5" ||
    `${pathname}` === "/services/2" ||
    `${pathname}` === "/services/3" ||
    `${pathname}` === "/services/4";

  return (
    <nav className={cn(styles.nav, styles[`nav--${type}`])}>
      <ul className={cn(styles.nav__list, styles[`nav__list--${type}`])}>
        <li className={cn(styles.nav__item, styles[`nav__item--${type}`])}>
          <NavLink
            onClick={() => setOpenMenu(false)}
            to={"/about"}
            className={cn(
              styles.nav__link,
              styles[`nav__link--${type}`],
              {
                [styles["nav__link--light"]]: secondVariant,
              },
              {
                [styles["active--light"]]:
                  pathname === "/about" && secondVariant,
              }
            )}
          >
            О компании
          </NavLink>
        </li>

        <li className={cn(styles.nav__item, styles[`nav__item--${type}`])}>
          <NavLink
            onClick={() => setOpenMenu(false)}
            to={"/services"}
            className={cn(
              styles.nav__link,
              styles[`nav__link--${type}`],
              {
                [styles["nav__link--light"]]: secondVariant,
              },
              {
                [styles["active--blue"]]: pathname === "/services",
                [styles["active--light"]]:
                  pathname === "/services" && secondVariant,
              }
            )}
          >
            Услуги
          </NavLink>
        </li>
        <li className={cn(styles.nav__item, styles[`nav__item--${type}`])}>
          <NavLink
            onClick={() => setOpenMenu(false)}
            to={"/cases"}
            className={cn(
              styles.nav__link,
              styles[`nav__link--${type}`],
              {
                [styles["nav__link--light"]]: secondVariant,
              },
              {
                [styles["active--blue"]]: pathname === "/cases",
                [styles["active--light"]]:
                  (pathname === "/cases" && secondVariant) ||
                  (pathname === "/cases" && secondVariant),
              }
            )}
          >
            Кейсы
          </NavLink>
        </li>

        <li className={cn(styles.nav__item, styles[`nav__item--${type}`])}>
          <NavLink
            onClick={() => setOpenMenu(false)}
            to={"/park"}
            className={cn(
              styles.nav__link,
              styles[`nav__link--${type}`],
              {
                [styles["nav__link--light"]]: secondVariant,
              },
              {
                [styles["active--blue"]]: pathname === "/park",
                [styles["active--light"]]:
                  pathname === "/park" && secondVariant,
              }
            )}
          >
            Контейнерный парк
          </NavLink>
        </li>
        <li className={cn(styles.nav__item, styles[`nav__item--${type}`])}>
          <NavLink
            onClick={() => setOpenMenu(false)}
            to={"/contacts"}
            className={cn(
              styles.nav__link,
              styles[`nav__link--${type}`],
              {
                [styles["nav__link--light"]]: secondVariant,
              },
              {
                [styles["active--blue"]]: pathname === "/contacts",
                [styles["active--light"]]:
                  pathname === "/contacts" && secondVariant,
              }
            )}
          >
            {type === "footer" ? null : "Контакты"}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

NavBar.propTypes = {
  type: PropTypes.string,
  setOpenMenu: PropTypes.func,
};

NavBar.defaultProps = {
  type: "",
  setOpenMenu: () => {},
};

export default NavBar;
