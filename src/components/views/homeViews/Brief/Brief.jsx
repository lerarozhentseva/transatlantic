import { useLocation } from "react-router";
import BriefForm from "components/common/BriefForm/BriefForm";
import cn from "classnames";
import styles from "./brief.module.css";

const Brief = () => {
  const { pathname } = useLocation();
  const variant =
    `${pathname}` === "/contacts" ||
    `${pathname}` === "/containers" ||
    `${pathname}` === "/park";

  return (
    <section
      className={cn(styles.brief, { [styles["brief--blue"]]: variant })}
      id="brief"
    >
      <div className={styles.brief__container}>
        <div className={styles.brief__info}>
          <h2
            className={cn(styles.brief__title, {
              [styles["brief__title--dark"]]: variant,
            })}
          >
            Доставим ваш груз
          </h2>
          <p
            className={cn(styles.brief__descr, {
              [styles["brief__descr--dark"]]: variant,
            })}
          >
            Оставьте заявку, мы свяжемся с вами и обсудим детали отправки груза
          </p>
        </div>
        <BriefForm />
      </div>
    </section>
  );
};

export default Brief;
