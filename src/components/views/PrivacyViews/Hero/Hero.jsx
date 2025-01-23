import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__container}>
        <h1 className={styles.hero__title}>Политика конфиденциальности</h1>
      </div>
    </section>
  );
};

export default Hero;
