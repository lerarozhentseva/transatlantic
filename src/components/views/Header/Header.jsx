import { useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { HandySvg } from "handy-svg";
import Menu from "components/common/Menu/Menu";
import IconButton from "components/ui/IconButton";
import logo from "../../../assets/images/mobile/svg/logo-mobile-header.svg";
import stick from "../../../assets/images/mobile/svg/open-stick.svg";
import cn from "classnames";
import styles from "./header.module.css";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [hideHeader, setHideHeader] = useState(false);

  // const { id } = useParams();
  const { caseID } = useParams();
  const { pathname } = useLocation();

  const variant =
    `${pathname}` === "/contacts" ||
    `${pathname}` === "/containers" ||
    `${pathname}` === "/cases" ||
    `${pathname}` === "/services" ||
    `${pathname}` === `/park` ||
    `${pathname}` === "/privacy";

  useScrollPosition(({ prevPos, currPos }) => {
    if (currPos.y < prevPos.y && currPos.y < 0) {
      setHideHeader(true);
    } else if (currPos.y > prevPos.y || currPos.y >= 0) {
      setHideHeader(false);
    }
  });

  return (
    <header
      className={cn(
        styles.header,
        { [styles["hideHeader"]]: hideHeader },
        {
          [styles["header--transparent"]]:
            pathname === `/cases/${caseID}` ||
            pathname === "/services/1" ||
            pathname === "/services/5" ||
            pathname === "/services/2" ||
            pathname === "/services/3" ||
            pathname === "/services/4" ||
            pathname === "/about",
        },
        {
          [styles["header--light"]]: variant,
        }
      )}
    >
      <div
        className={cn(
          styles.header__container,
          {
            [styles["header__container--transparent"]]:
              pathname === `/cases/${caseID}` ||
              pathname === "/services/1" ||
              pathname === "/services/5" ||
              pathname === "/services/2" ||
              pathname === "/services/3" ||
              pathname === "/services/4" ||
              pathname === "/about",
          },
          {
            [styles["header__container--light"]]: variant,
          }
        )}
      >
        <Link
          to="/"
          className={cn(styles.header__logo, {
            [styles["header__logo--white"]]:
              pathname === `/cases/${caseID}` ||
              pathname === "/services/1" ||
              pathname === "/services/5" ||
              pathname === "/services/2" ||
              pathname === "/services/3" ||
              pathname === "/services/4" ||
              pathname === "/about",
          })}
        >
          <HandySvg src={logo} width="145" height="33" />
        </Link>
        <Menu openMenu={openMenu} setOpenMenu={setOpenMenu} />
        <div className={styles.openBtn__wrapper}>
          <IconButton
            className={styles.openBtn}
            onClick={() => setOpenMenu(!openMenu)}
          >
            <HandySvg
              src={stick}
              width={22}
              height={3}
              className={cn(styles.openBtn__top, {
                [styles["openBtn__top--open"]]: openMenu,
              })}
            />
            <HandySvg
              src={stick}
              width={22}
              height={3}
              className={cn(styles.openBtn__middle, {
                [styles["openBtn__middle--open"]]: openMenu,
              })}
            />
            <HandySvg
              src={stick}
              width={22}
              height={3}
              className={cn(styles.openBtn__bottom, {
                [styles["openBtn__bottom--open"]]: openMenu,
              })}
            />
          </IconButton>
        </div>
        <div
          className={cn(styles.header__tel, {
            [styles["header__tel--light"]]:
              pathname === `/cases/${caseID}` ||
              pathname === "/services/1" ||
              pathname === "/services/5" ||
              pathname === "/services/2" ||
              pathname === "/services/3" ||
              pathname === "/services/4" ||
              pathname === "/about",
          })}
        >
          <a href="tel:+73432169990">+7 (343) 216-99-90</a>
          <a href="tel:+74954554592">+7 (495) 455-45-92</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
