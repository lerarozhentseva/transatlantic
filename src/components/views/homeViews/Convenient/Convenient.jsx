import classNames from "classnames";
import { useEffect, useRef, useState, useMemo } from "react";
import { useOnScreen } from "hooks";
import { Link } from "react-scroll";
import cn from "classnames";
import styles from "./convenient.module.css";

import TruckAnimation from "assets/animations/mov/3.mov";
import TruckAnimationWebm from "assets/animations/webm/3.webm";

const Convenient = () => {
  const videoRef = useRef();
  const [videoIsVisible, videoIsBelow] = useOnScreen(videoRef);
  const [width, setWidth] = useState(0);

  const browserIsSafari = useMemo(() => !!window.safari, []);

  useEffect(() => {
    const { current: video } = videoRef;

    if (video) {
      if (videoIsVisible && video.currentTime === 0) {
        video.play();
      } else {
        if (videoIsBelow) {
          setTimeout(() => {
            video.currentTime = 0;
          }, 1500);
        }
      }
    }
  }, [videoIsVisible, videoIsBelow]);

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
    <section className={styles.convenient}>
      <div className={styles.convenient__container}>
        <div className={styles["convenient__info--top"]}>
          {width >= 320 && width < 768 && (
            <h2 className={styles.convenient__title}>
              Мульти- модальный оператор перевозок
            </h2>
          )}

          {width >= 768 && (
            <h2 className={styles.convenient__title}>
              Мультимодальный оператор перевозок
            </h2>
          )}
          <div className={styles.wrapper__descr}>
            <p
              className={cn(
                styles.convenient__descr,
                styles["convenient__descr"]
              )}
            >
              Ощутите вершину передового опыта мультимодальных перевозок —
              беспрепятственно и эффективно доставим ваш груз по морю, ж/д и по
              суше.
            </p>
          </div>
        </div>
        <div className={styles.convenient__wrapper}>
          <div className={styles.convenient__image} />
          <video
            className={styles.convenient__animation}
            muted
            ref={videoRef}
            preload="auto"
          >
            <source
              src={browserIsSafari ? TruckAnimation : TruckAnimationWebm}
            />
          </video>
        </div>
        <div
          className={classNames(styles["convenient__info--bottom"], {
            [styles.visible]: videoIsVisible,
          })}
        >
          <div className={styles.convenient__button}>
            <Link to="brief" smooth={true} offset={-150} duration={500}>
              Оставить заявку
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Convenient;
