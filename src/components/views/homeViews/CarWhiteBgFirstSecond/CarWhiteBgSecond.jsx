import classNames from "classnames";
import { useEffect, useMemo, useRef } from "react";
import { useOnScreen } from "hooks";
import styles from "./carWhiteBgSecond.module.css";

import TrainAnimation from "assets/animations/mov/5.mov";
import TrainAnimationWebm from "assets/animations/webm/5.webm";
import TrainAnimationGif from "assets/animations/gif/5.gif";

const CarWhiteBgSecond = () => {
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
    <section className={styles.carWhiteBgSecond}>
      <div className={styles.carWhiteBgSecondContainer}>
        <div
          className={classNames(styles.carWhiteBgSecondTop, {
            [styles.visible]: videoIsVisible,
          })}
        >
          <h2 className={styles.carWhiteBgSecondTopTitle}>Ж/д перевозки</h2>
          <div className={styles.carWhiteBgSecondTextWrapper}>
            <p className={styles.carWhiteBgSecondTopSubTitle}>
              Максимально надёжный способ доставки грузов по суше.
            </p>
          </div>
        </div>
        <div className={styles.carWhiteBgSecondImagesWrapper}>
          <video
            className={styles.carWhiteBgSecondImages}
            muted
            ref={videoRef}
            poster={TrainAnimationGif}
            preload="auto"
          >
            <source
              src={browserIsSafari ? TrainAnimation : TrainAnimationWebm}
            />
          </video>
        </div>
        <div
          className={classNames(styles.carWhiteBgSecondBottom, {
            [styles.visible]: videoIsVisible,
          })}
        ></div>
      </div>
    </section>
  );
};

export default CarWhiteBgSecond;
