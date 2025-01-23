import { useEffect, useRef, useState, useMemo } from "react";
import cn from "classnames";
import { useOnScreen } from "hooks";
import styles from "./advantage.module.css";

import ContainerAnimation from "assets/animations/mov/2.mov";
import ContainerAnimationWebm from "assets/animations/webm/2.webm";

const Advantage = () => {
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
    <section className={styles.advantage}>
      <video
        className={styles.advantage__container}
        preload="auto"
        muted
        ref={videoRef}
      >
        <source
          src={browserIsSafari ? ContainerAnimation : ContainerAnimationWebm}
        />
      </video>
      <div className={styles.advantage__container__static}>
        <div className={styles.advantage__info}>
          <h2 className={styles.advantage__title}>Перевозим любые грузы</h2>
          <p className={styles.advantage__subtitle}>
            Предложим решение и обеспечим надежную перевозку грузов любой
            сложности.
          </p>
        </div>
        <div className={styles.figures}>
          <div
            className={cn(
              styles.figures__item,
              styles["figures__item--polygon"]
            )}
          >
            <span
              className={cn(
                styles.figures__text,
                styles["figures__text--polygon"]
              )}
            >
              Сталь листовая
            </span>
          </div>
          <div
            className={cn(
              styles.figures__item,
              styles["figures__item--squares"]
            )}
          ></div>
          <div
            className={cn(
              styles.figures__item,
              styles["figures__item--ringles"]
            )}
          ></div>
          <div
            className={cn(
              styles.figures__item,
              styles["figures__item--ellipse"]
            )}
          >
            <span
              className={cn(
                styles.figures__text,
                styles["figures__text--ellipse"]
              )}
            >
              Опасный груз
            </span>
          </div>
          <div
            className={cn(
              styles.figures__item,
              styles["figures__item--rectangle"]
            )}
          >
            <span
              className={cn(
                styles.figures__text,
                styles["figures__text--rectangle"]
              )}
            >
              Генеральный груз
            </span>
          </div>

          <div
            className={cn(styles.figures__item, styles["figures__item--oval"])}
          >
            <span
              className={cn(
                styles.figures__text,
                styles["figures__text--oval"]
              )}
            >
              Техника
            </span>
          </div>
          <div
            className={cn(styles.figures__item, styles["figures__item--union"])}
          >
            {width >= 320 && width < 768 && (
              <span
                className={cn(
                  styles.figures__text,
                  styles["figures__textFirst--union"]
                )}
              >
                Пило- материалы
              </span>
            )}

            {width >= 768 && (
              <span
                className={cn(
                  styles.figures__text,
                  styles["figures__textFirst--union"]
                )}
              >
                Пиломатериалы
              </span>
            )}
            <span
              className={cn(
                styles.figures__text,
                styles["figures__textSecond--union"]
              )}
            >
              Сырье
            </span>
          </div>
          <div
            className={cn(
              styles.figures__item,
              styles["figures__item--subtract"]
            )}
          >
            <span
              className={cn(
                styles.figures__text,
                styles["figures__text--subtract"]
              )}
            >
              Негабарит
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantage;
