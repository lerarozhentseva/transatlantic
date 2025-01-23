import containerHero from "../../../../assets/images/service/tanks/container-hero.png";
import styles from "./hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__container}>
        <h2 className={styles.hero__title}>О компании</h2>
        <img src={containerHero} alt="container" className={styles.hero__img} />
      </div>
    </section>
  );
};

export default Hero;
