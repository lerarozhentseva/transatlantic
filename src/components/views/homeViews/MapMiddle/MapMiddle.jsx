import classNames from "classnames";
import { useEffect, useMemo, useRef, useState } from "react";
import { useOnScreen } from "hooks";
import { pauseVideoBeforeScroll } from "utils";
import mapMiddleMobile from "../../../../assets/images/mobile/map.png";
import mapMiddleTablet from "../../../../assets/images/tablet/map.png";
import mapMiddleDesktop from "../../../../assets/images/desktop/map.png";
import styles from "./mapMiddle.module.css";

import MapAnimation from "assets/animations/mov/7.mov";
import MapAnimationWebm from "assets/animations/webm/7.webm";

const MapMiddle = ({ isHomepage = false }) => {
  const videoRef = useRef();
  const [videoIsVisible, videoIsBelow] = useOnScreen(videoRef);
  const [width, setWidth] = useState(0);

  const browserIsSafari = useMemo(() => !!window.safari, []);

  useEffect(() => {
    const { current: video } = videoRef;

    if (video) {
      if (videoIsVisible && video.currentTime === 0) {
        pauseVideoBeforeScroll({ video, pauseTimeout: 2200 });
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
    <section className={styles.mapMiddle}>
      <div className={styles.mapMiddle__container}>
        <div
          className={classNames(styles.mapMiddle__info, {
            [styles.visible]: videoIsVisible,
          })}
        >
          <h2 className={styles.mapMiddle__title}>Импорт и экспорт</h2>
          <p className={styles.mapMiddle__descr}>
            Работаем в любых направлениях
          </p>
        </div>
        <div className={styles.mapMiddle__imgWrapper}>
          {isHomepage ? (
            <>
              <div
                className={classNames(
                  styles.mapMiddle__img,
                  styles.mapMiddle__img__desktopHidden
                )}
              />
              <video className={styles.mapMiddle__video} muted ref={videoRef}>
                <source
                  src={browserIsSafari ? MapAnimation : MapAnimationWebm}
                />
              </video>

              {width >= 320 && width && width < 768 && (
                <img
                  className={styles.mapMiddle__img}
                  src={mapMiddleMobile}
                  alt="map"
                />
              )}
              {width >= 768 && width < 1180 && (
                <img
                  className={styles.mapMiddle__img}
                  src={mapMiddleTablet}
                  alt="map"
                />
              )}
              {width >= 1180 && width < 1440 && (
                <img
                  className={styles.mapMiddle__img}
                  src={mapMiddleDesktop}
                  alt="map"
                />
              )}
            </>
          ) : (
            <>
              {width >= 320 && width && width < 768 && (
                <img
                  className={styles.mapMiddle__img}
                  src={mapMiddleMobile}
                  alt="map"
                />
              )}
              {width >= 768 && width < 1180 && (
                <img
                  className={styles.mapMiddle__img}
                  src={mapMiddleTablet}
                  alt="map"
                />
              )}
              {width >= 1180 && (
                <img
                  className={styles.mapMiddle__img}
                  src={mapMiddleDesktop}
                  alt="map"
                />
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default MapMiddle;
