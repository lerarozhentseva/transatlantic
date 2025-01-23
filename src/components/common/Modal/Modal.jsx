import cn from "classnames";
import styles from "./modal.module.css";

const Modal = ({ active, setActive, children }) => {
  return (
    <div
      className={cn(styles.modal, { [styles["active"]]: active })}
      onClick={() => setActive(false)}
    >
      <div
        className={styles.modal__content}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
