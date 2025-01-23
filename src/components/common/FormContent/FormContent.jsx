import { HandySvg } from "handy-svg";
import doneSvg from "../../../assets/images/svg/done.svg";
import styles from "./formContent.module.css";

const FormContent = () => {
  return (
    <div className={styles["form-content"]}>
      <HandySvg
        src={doneSvg}
        width="66"
        height="66"
        className={styles["form-content__svg"]}
      />
      <h5 className={styles["form-content__title"]}>Заявка отправлена</h5>
      <p className={styles["form-content__text"]}>
        Мы свяжемся с вами в течение часа
      </p>
    </div>
  );
};

export default FormContent;
