import { servicesPage } from "constants";
import { useEffect, useState } from "react";
import mobileAvia from "../../../../assets/images/service/avia/avia-hero-mobile.png";
import tabletAvia from "../../../../assets/images/service/avia/avia-hero-tablet.png";
import desktopAvia from "../../../../assets/images/service/avia/avia-hero-desktop.png";
import styles from "./hero.module.css";

const Hero = () => {
  const [width, setWidth] = useState(0);
  const serviceEl = servicesPage?.find((el) => el.path === "4") || {};

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <section className={styles.hero}>
      <div className={styles.hero__container}>
        <h2 className={styles.hero__title}>{serviceEl?.heading}</h2>
        {width < 768 && (
          <img
            src={mobileAvia}
            alt={serviceEl.alt}
            className={styles.hero__img}
          />
        )}
        {width >= 768 && (
          <img
            src={tabletAvia}
            alt={serviceEl.alt}
            className={styles.hero__img}
          />
        )}
        {width >= 1180 && (
          <img
            src={desktopAvia}
            alt={serviceEl.alt}
            className={styles.hero__img}
          />
        )}
      </div>
    </section>
  );
};

export default Hero;
