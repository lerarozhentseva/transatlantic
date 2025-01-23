import { useEffect, useMemo, useRef } from "react";
import { useOnScreen } from "hooks";
import styles from "./carWhiteBgThird.module.css";

import ShipAnimation from "assets/animations/mov/6.mov";
import ShipAnimationWebm from "assets/animations/webm/6.webm";
import ShipAnimationGif from "assets/animations/gif/6.gif";

const CarWhiteBgFirstThird = () => {
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
    <section className={styles.carWhiteBgThird}>
      <div className={styles.carWhiteBgThirdContainer}>
        <div className={styles.carWhiteBgThirdTop}>
          <h2 className={styles.carWhiteBgThirdTopTitle}>Морские перевозки</h2>
          <div className={styles.carWhiteBgThirdTextWrapper}>
            <p className={styles.carWhiteBgThirdTopSubTitle}>
              Универсальное решение для перевозок на дальние расстояния.
            </p>
          </div>
        </div>
        <div className={styles.carWhiteBgThirdImagesWrapper}>
          <video
            className={styles.carWhiteBgThirdImages}
            muted
            ref={videoRef}
            poster={ShipAnimationGif}
            preload="auto"
          >
            <source src={browserIsSafari ? ShipAnimation : ShipAnimationWebm} />
          </video>
        </div>
      </div>
    </section>
  );
};

export default CarWhiteBgFirstThird;
