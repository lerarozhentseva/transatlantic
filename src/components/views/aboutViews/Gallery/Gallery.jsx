import styles from "./gallery.module.css";

const Gallery = () => {
  return (
    <section className={styles.gallery}>
      <div className={styles.gallery__container}>
        <div className={styles.gallery__left}>
          <h3 className={styles.gallery__title}>Мы любим то, чем занимаемся</h3>
        </div>
        <div className={styles.gallery__right}>
          <div className={styles.gallery__top}>
            <span className={styles.gallery__bigImagesTop}></span>

            <div className={styles.gallery__smallImages}>
              <span className={styles.gallery__smallImagesTopLeft}></span>
              <span className={styles.gallery__smallImagesTopRight}></span>
            </div>
          </div>
          <div className={styles.gallery__bottom}>
            <span className={styles.gallery__bigImagesBottom}></span>

            <div className={styles.gallery__smallImages}>
              <span className={styles.gallery__smallImagesBottomLeft}></span>
              <span className={styles.gallery__smallImagesBottomRight}></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
