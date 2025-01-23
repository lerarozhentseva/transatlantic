import { useEffect, useState } from "react";
import { servicesPage } from "constants";
import styles from "./hero.module.css";

const Hero = () => {
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

  const serviceEl = servicesPage?.find((el) => el.path === "2") || {};
  return (
    <section className={styles.hero}>
      <div className={styles.hero__container}>
        <h2 className={styles.hero__title}>{serviceEl?.heading}</h2>
        <>
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
          {width >= 1180 && (
            <img
              src={serviceEl.imgBluePreviewDesktop}
              alt={serviceEl.alt}
              className={styles.hero__img}
            />
          )}
        </>
      </div>
    </section>
  );
};

export default Hero;
