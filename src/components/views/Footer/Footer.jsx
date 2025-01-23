import { Link, NavLink, useLocation } from "react-router-dom";
import { HandySvg } from "handy-svg";
import Contacts from "components/common/Contacts";
import NavBarFooter from "components/common/NavBarFooter";
import logo from "../../../assets/images/mobile/svg/logo-mobile-header.svg";
import downloadPDF from "../../../assets/files/download.pdf";
import cn from "classnames";
import styles from "./footer.module.css";

const Footer = () => {
  const { pathname } = useLocation();
  const variant =
    `${pathname}` === "/contacts" ||
    `${pathname}` === "/containers" ||
    `${pathname}` === "/park" ||
    `${pathname}` === "/privacy";

  function downloadFile() {
    fetch(downloadPDF)
      .then((response) => response.blob())
      .then((blob) => {
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "Результаты СОУТ.pdf");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
  }

  return (
    <footer
      className={cn(styles.footer, { [styles["footer--blue"]]: variant })}
    >
      <div
        className={cn(styles.footer__container, {
          [styles["footer__container--blue"]]: variant,
        })}
      >
        <Link
          to="/"
          className={cn(styles.footer__logo, {
            [styles["footer__logo--blue"]]: variant,
          })}
        >
          <HandySvg src={logo} />
        </Link>

        <div
          className={cn(styles.address, { [styles["address--blue"]]: variant })}
        >
          <Contacts
            address="Екатеринбург"
            tel="+7 (343) 216-99-90"
            mail="ekb.office@transatlantic.pro"
            type="footer"
          />
          <Contacts
            address="Москва"
            tel="+7 (495) 455-45-92"
            mail="msk.office@transatlantic.pro"
            type="footer"
          />
        </div>

        <div
          className={cn(styles.footer__nav, {
            [styles["footer__nav--blue"]]: variant,
          })}
        >
          <NavBarFooter />
        </div>

        <div
          className={cn(styles.privasy, { [styles["privasy--blue"]]: variant })}
        >
          <div className={styles["privasy__wrapper--left"]}>
            <NavLink
              to="/privacy"
              target="_blank"
              className={cn(styles.privasy__policy, {
                [styles["privasy__policy--blue"]]: variant,
              })}
            >
              Политика конфиденциальности
            </NavLink>
            <span
              className={cn(styles.privasy__company, {
                [styles["privasy__company--dark"]]: variant,
              })}
            >
              Транспортная компания ООО «Трансатлантик»
            </span>
            <button
              className={cn(styles.downloadBtn, {
                [styles["downloadBtn--blue"]]: variant,
              })}
              onClick={downloadFile}
            >
              Результаты СОУТ
            </button>
          </div>

          <div className={styles["privasy__wrapper--right"]}>
            <span
              className={cn(styles.privasy__year, {
                [styles["privasy__year--dark"]]: variant,
              })}
            >
              2023
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
