import { useEffect, useRef, useMemo } from "react";
import { useOnScreen } from "hooks";
import cn from "classnames";
import styles from "./hero.module.css";

import ContainerAnimation from "assets/animations/mov/1.mov";
import ContainerAnimationWebm from "assets/animations/webm/1.webm";

const Hero = () => {
  const videoRef = useRef();
  const [videoIsVisible, videoIsBelow] = useOnScreen(videoRef, {
    customThreshold: 0.1,
  });

  const browserIsSafari = useMemo(() => !!window.safari, []);

  useEffect(() => {
    const { current: video } = videoRef;

    if (video) {
      if (videoIsVisible) {
        function scrollListener() {
          document.removeEventListener("scroll", scrollListener);
          video.play();
        }

        if (video.currentTime === 0) {
          document.addEventListener("scroll", scrollListener);
        }
      } else {
        if (!videoIsBelow) {
          video.currentTime = 0;
        }
      }
    } // eslint-disable-next-line
  }, [videoIsVisible]);

  return (
    <section className={styles.hero}>
      <div className={styles.hero__container}>
        <div className={styles.hero__info}>
          <h1 className={styles.hero__title}>
            Международные контейнерные перевозки
          </h1>
          <div className={styles.hero__descrWrapper}>
            <p className={styles.hero__descr}>
              Решим ваши задачи в&nbsp;мире логистики
            </p>
          </div>
        </div>
        <div className={styles.hero__background}>
          <div className={styles.hero__wrapper}>
            <div className={styles.hero__truck__static} />
            <video
              className={styles.hero__truck}
              muted
              ref={videoRef}
              preload="auto"
            >
              <source
                src={
                  browserIsSafari ? ContainerAnimation : ContainerAnimationWebm
                }
              />
            </video>
            <div
              className={cn(styles.hero__letter, styles["hero__letter--left"])}
            ></div>
            <div
              className={cn(
                styles.hero__letter,
                styles["hero__letter--bottom"]
              )}
            ></div>
            <div
              className={cn(styles.hero__letter, styles["hero__letter--right"])}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
