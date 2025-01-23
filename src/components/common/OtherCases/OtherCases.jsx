import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { casesPage } from "constants";
import cn from "classnames";
import styles from "./OtherCases.module.css";

const OtherCases = ({ number }) => {
  const [cases, setCases] = useState([]);
  const [casesShow, setCasesShow] = useState([]);
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
    setCases([...casesPage]);
  }, []);

  useEffect(() => {
    setCasesShow(cases.filter((item) => item.id !== number - 1));
  }, [number, cases]);

  return (
    <section className={styles.hero}>
      <div className={styles.hero__container}>
        <h2 className={styles.hero__title}>Другие кейсы</h2>
        <div className={styles.hero__wrapper}>
          <ul className={styles.hero__list}>
            {casesShow?.map(
              ({
                id,
                path,
                heading,
                imgBlueMobile,
                imgGrayMobile,
                imgBlueTablet,
                imgGrayTablet,
                imgGrayDesktop,
                imgBlueDesktop,
                alt,
              }) => {
                return (
                  <li className={styles.hero__item} key={id}>
                    <Link className={styles.hero__link} to={`/cases/${path}`}>
                      <div className={styles.hero__info}>
                        <h4 className={styles.hero__heading}>
                          {heading}
                          <span className={styles.hero__arrow}>→</span>
                        </h4>
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

export default OtherCases;
