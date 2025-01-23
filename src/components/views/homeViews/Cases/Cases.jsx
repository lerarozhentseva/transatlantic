import { useEffect, useState, useMemo } from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { useOnScreen } from "hooks";
import classNames from "classnames";
import { casesPage } from "constants";
import AnimationShip from "assets/images/cases/ship_for_animation.webp";
import BigShip from "assets/images/cases/ship-big.webp";
import cn from "classnames";
import styles from "./cases.module.css";

const Cases = ({ isHomepage = false }) => {
  const casesRef = useRef();
  const [casesIsVisible] = useOnScreen(casesRef);
  const [casesIsBelow, setCasesIsBelow] = useState(false);
  const [showShip, setShowShip] = useState(false);
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

  const observer = useMemo(
    () =>
      new IntersectionObserver(
        ([entry]) => {
          setCasesIsBelow(entry.boundingClientRect.top > 0);
        },
        { threshold: 0.0001 }
      ),
    []
  );

  useEffect(() => {
    if (casesRef.current) {
      observer.observe(casesRef.current);
      return () => observer.disconnect();
    }
  }, [casesRef, observer]);

  useEffect(() => {
    if (casesIsVisible) {
      setCasesIsBelow(false);
      setShowShip(true);
    } else {
      if (casesIsBelow) {
        setShowShip(false);
      }
    }
  }, [casesIsVisible, casesIsBelow]);

  return (
    <section
      className={styles.cases}
      style={isHomepage ? {} : { zIndex: 50 }}
      ref={casesRef}
    >
      <div className={styles.cases__container}>
        <div className={styles.casesTop}>
          <h2 className={styles.cases__title}>Мы это умеем</h2>
          <p className={styles.cases__subTitle}>
            Каждый клиент для нас — особенный. Мы уже создали тысячи оптимальных
            предложений. Всегда найдем решение, особенно, если ваша задача
            уникальна.
          </p>
        </div>
        <div className={styles.cases__wrapper}>
          <ul className={styles.cases__list}>
            {casesPage?.slice(0, 4).map(
              ({
                id,
                path,
                heading,

                imgGrayDesktop,
                imgBlueDesktop,
                alt,
              }) => {
                return (
                  <li className={styles.cases__item} key={id}>
                    <Link className={styles.cases__link} to={`/cases/${path}`}>
                      <div className={styles.cases__info}>
                        <h4 className={styles.cases__heading}>
                          {heading}
                          <span className={styles.cases__arrow}>→</span>
                        </h4>
                      </div>
                      <img
                        src={imgBlueDesktop}
                        alt={alt}
                        className={cn(
                          styles.cases__image,
                          styles["cases__image--blue"]
                        )}
                      />
                      <img
                        src={imgGrayDesktop}
                        alt={alt}
                        className={cn(
                          styles.cases__image,
                          styles["cases__image--gray"]
                        )}
                      />
                    </Link>
                  </li>
                );
              }
            )}
          </ul>
          <Link className={styles.cases__button} to="/cases">
            Посмотреть все
          </Link>

          {isHomepage && (
            <img
              src={AnimationShip}
              alt="animation_ship"
              className={classNames(styles.animation_ship, {
                [styles.ship_visible]: showShip,
              })}
            />
          )}
        </div>
        {!isHomepage && width >= 768 && (
          <div className={styles.cases__imageBgWarpper}>
            <img src={BigShip} alt="ship" className={styles.cases__imageBg} />
          </div>
        )}
      </div>
    </section>
  );
};

export default Cases;
