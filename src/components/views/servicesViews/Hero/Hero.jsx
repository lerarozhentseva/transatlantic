import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { servicesPage } from "../../../../constants";
import cn from "classnames";
import styles from "./hero.module.css";

const Hero = () => {
  const [services, setServices] = useState([]);
  const [amount, setAmount] = useState(0);
  const [servicesShow, setServicesShow] = useState([]);
  const [btnShow, setBtnShow] = useState(true);
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
    if (width < 1440) {
      setAmount(6);
    } else if (width >= 1440) {
      setAmount(9);
    }
  }, [width]);

  useEffect(() => {
    setServicesShow(services.slice(0, amount));
  }, [amount, services]);

  useEffect(() => {
    if (services.length === servicesShow.length) {
      setBtnShow(false);
    } else {
      setBtnShow(true);
    }
  }, [services.length, servicesShow.length]);

  const handleClick = () => {
    setAmount(amount + 3);
  };

  return (
    <section className={styles.hero}>
      <div className={styles.hero__container}>
        <h2 className={styles.hero__title}>Услуги</h2>
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
          <button
            type="button"
            className={cn(styles.hero__btn, {
              [styles["hidden"]]: btnShow === false,
            })}
            onClick={handleClick}
          >
            Показать ещё
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
