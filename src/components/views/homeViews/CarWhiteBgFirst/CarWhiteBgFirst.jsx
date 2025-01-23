import classNames from "classnames";
import { useEffect, useRef, useMemo } from "react";
import { useOnScreen } from "hooks";
import styles from "./carWhiteBgFirst.module.css";

import TruckAnimation from "assets/animations/mov/4.mov";
import TruckAnimationWebm from "assets/animations/webm/4.webm";
import TruckAnimationGif from "assets/animations/gif/4.gif";

const CarWhiteBgFirst = () => {
  const videoRef = useRef();
  const [videoIsVisible, videoIsBelow] = useOnScreen(videoRef);

  const browserIsSafari = useMemo(() => !!window.safari, []);

  useEffect(() => {
    const { current: video } = videoRef;

    if (video && window.innerWidth >= 768) {
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

  return (
    <section className={styles.carWhiteBgFirst}>
      <div className={styles.carWhiteBgFirstContainer}>
        <div
          className={classNames(styles.carWhiteBgFirstTop, {
            [styles.visible]: videoIsVisible,
          })}
        >
          <h2 className={styles.carWhiteBgFirstTopTitle}>Автоперевозки</h2>
          <div className={styles.carWhiteBgFirstTextWrapper}>
            <p className={styles.carWhiteBgFirstTopSubTitle}>
              Подадим контейнер под погрузку, доставим товар до дверей.
            </p>
          </div>
        </div>
        <div className={styles.carWhiteBgFirstImagesWrapper}>
          <video
            className={styles.carWhiteBgFirstImages}
            muted
            ref={videoRef}
            preload="auto"
            poster={TruckAnimationGif}
          >
            <source
              src={browserIsSafari ? TruckAnimation : TruckAnimationWebm}
            />
          </video>
        </div>
        <div
          className={classNames(styles.carWhiteBgFirstBottom, {
            [styles.visible]: videoIsVisible,
          })}
        ></div>
      </div>
    </section>
  );
};

export default CarWhiteBgFirst;
