import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import styles from "./OtherServices.module.css";
import { servicesPage } from "constants";

const OtherServices = ({ number }) => {
  const [services, setServices] = useState([]);
  const [servicesShow, setServicesShow] = useState([]);
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

  useEffect(() => {
    setServices([...servicesPage]);
  }, []);

  useEffect(() => {
    setServicesShow(services.filter((service) => service.id !== number));
  }, [number, services]);
  return (
    <section className={styles.hero}>
      <div className={styles.hero__container}>
        <h2 className={styles.hero__title}>Другие услуги</h2>
        <div className={styles.hero__wrapper}>
          <ul className={styles.hero__list}>
            {servicesShow?.map(
              ({
                id,
                path,
                heading,
                alt,
                imgBlueMobile,
                imgGrayMobile,
                imgBlueTablet,
                imgGrayTablet,
                imgGrayDesktop,
                imgBlueDesktop,
              }) => {
                return (
                  <li className={styles.hero__item} key={id}>
                    <Link
                      className={styles.hero__link}
                      to={`/services/${path}`}
                    >
                      <div className={styles.hero__info}>
                        <h4 className={styles.hero__heading}>{heading}</h4>
                      </div>
                      {width >= 320 && width < 768 && (
                        <>
                          <img
                            src={imgGrayMobile}
                            alt={alt}
                            className={cn(
                              styles.hero__img,
                              styles["hero__img--gray"]
                            )}
                          />
                          <img
                            src={imgBlueMobile}
                            alt={alt}
                            className={cn(
                              styles.hero__img,
                              styles["hero__img--blue"]
                            )}
                          />
                        </>
                      )}
                      {width >= 768 && width < 1180 && (
                        <>
                          <img
                            src={imgGrayTablet}
                            alt={alt}
                            className={cn(
                              styles.hero__img,
                              styles["hero__img--gray"]
                            )}
                          />
                          <img
                            src={imgBlueTablet}
                            alt={alt}
                            className={cn(
                              styles.hero__img,
                              styles["hero__img--blue"]
                            )}
                          />
                        </>
                      )}
                      {width >= 1180 && (
                        <>
                          <img
                            src={imgGrayDesktop}
                            alt={alt}
                            className={cn(
                              styles.hero__img,
                              styles["hero__img--gray"]
                            )}
                          />
                          <img
                            src={imgBlueDesktop}
                            alt={alt}
                            className={cn(
                              styles.hero__img,
                              styles["hero__img--blue"]
                            )}
                          />
                        </>
                      )}
                    </Link>
                  </li>
                );
              }
            )}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default OtherServices;
