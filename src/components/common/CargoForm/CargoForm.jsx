import { useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import { validate } from "./utils/validate";
import Button from "components/ui/Button/Button";
import Modal from "../Modal/Modal";
import cn from "classnames";
import styles from "./cargoForm.module.css";
import FormContent from "../FormContent/FormContent";

const CargoForm = () => {
  const [modalActive, setModalActive] = useState(false);

  // this is the logic of opening and closing the modal

  const closeModal = () => {
    setModalActive(false);
  };

  const handleClick = () => {
    setModalActive(true);

    const timer = setTimeout(() => {
      closeModal();
    }, 3000);

    return () => clearTimeout(timer);
  };

  // this is the logic of the form

  const formik = useFormik({
    initialValues: {
      name: "",
      tel: "",
    },

    validate,

    onSubmit: (values) => {
      const data = JSON.stringify(values, null, 2);
      const bodyFormData = new FormData();
      bodyFormData.append("_captcha", "false");
      bodyFormData.append("data", data);

      try {
        axios.post(
          `https://formsubmit.co/45948965e0ec4559144659b85bc9ae1f`,
          bodyFormData
        );
      } catch (error) {}
      formik.resetForm();
    },
  });

  return (
    <>
      <section className={styles.form__section}>
        <div className={styles.form__container}>
          <h3 className={styles.form__title}>Перевезти груз</h3>
          <div className={styles.form__wrapper}>
            <p className={styles.form__descr}>
              Оставьте заявку, мы свяжемся с вами и обсудим детали отправки
              груза.
            </p>
            <form
              className={styles.form}
              autoComplete="off"
              onSubmit={formik.handleSubmit}
            >
              <div className={styles.input__wrapper}>
                <input
                  placeholder="Как вас зовут*"
                  name="name"
                  value={formik.values.name}
                  className={cn(styles.form__input, {
                    [styles["input__errors"]]:
                      formik.errors.name && formik.touched.name,
                  })}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>

              <div className={styles.input__wrapper}>
                <input
                  placeholder="Номер телефона*"
                  name="tel"
                  value={formik.values.tel}
                  className={cn(styles.form__input, {
                    [styles["input__errors"]]:
                      formik.errors.tel && formik.touched.tel,
                  })}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>

              <div className={styles.form__button}>
                <Button
                  text="Оставить заявку"
                  color="blue"
                  type="submit"
                  onClick={handleClick}
                  disabled={!(formik.isValid && formik.dirty)}
                  className={styles.serviceFormBtn}
                />
              </div>
            </form>
          </div>

          <Modal active={modalActive} setActive={setModalActive}>
            <FormContent />
          </Modal>
        </div>
      </section>
    </>
  );
};

export default CargoForm;
