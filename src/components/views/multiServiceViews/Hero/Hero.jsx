import { useEffect, useState } from "react";
import { servicesPage } from "constants";
import styles from "./hero.module.css";

const Hero = () => {
  const serviceEl = servicesPage?.find((el) => el.path === "5") || {};
  const [width, setWidth] = useState(0);

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
        {width >= 320 && width < 768 && (
          <h2 className={styles.hero__title}>Мульти-модальные перевозки</h2>
        )}
        {width >= 768 && (
          <h2 className={styles.hero__title}>{serviceEl?.heading}</h2>
        )}

        {width >= 320 && width < 768 && (
          <img
            src={serviceEl.imgBluePreviewMobile}
            alt={serviceEl.alt}
            className={styles.hero__img}
          />
        )}
        {width >= 768 && width < 1180 && (
          <img
            src={serviceEl.imgBluePreviewTablet}
            alt={serviceEl.alt}
            className={styles.hero__img}
          />
        )}
        {width > 1180 && (
          <img
            src={serviceEl.imgBlue}
            alt={serviceEl.alt}
            className={styles.hero__img}
          />
        )}
      </div>
    </section>
  );
};

export default Hero;
