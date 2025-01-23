import { useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import { useLocation } from "react-router";
import { validate } from "./utils/validate";
import Button from "components/ui/Button/Button";
import Modal from "../Modal/Modal";
import cn from "classnames";
import styles from "./form.module.css";
import FormContent from "../FormContent/FormContent";
import { NavLink } from "react-router-dom";

const BriefForm = () => {
  const [modalActive, setModalActive] = useState(false);

  // this is the logic of changing styles

  const { pathname } = useLocation();
  const variant =
    `${pathname}` === "/contacts" ||
    `${pathname}` === "/containers" ||
    `${pathname}` === "/park";

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
      email: "",
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
      <div className={styles.form__wrapper}>
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
                [styles["form__input--light"]]: variant,
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
                [styles["form__input--light"]]: variant,
              })}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>

          <div className={styles.input__wrapper}>
            <input
              type="text"
              placeholder="Эл. почта*"
              name="email"
              value={formik.values.email}
              onBlur={formik.handleBlur}
              className={cn(styles.form__input, {
                [styles["input__errors"]]:
                  formik.errors.email && formik.touched.email,
                [styles["form__input--light"]]: variant,
              })}
              onChange={formik.handleChange}
            />
          </div>

          <div className={styles.form__button}>
            <Button
              className={styles.button__brief}
              text="Оставить заявку"
              color="blue"
              type="submit"
              onClick={handleClick}
              disabled={!(formik.isValid && formik.dirty)}
            />
          </div>
        </form>

        <p className={styles.form__policy}>
          Нажимая на кнопку, вы соглашаетесь с
          <NavLink
            to="/privacy"
            target="_blank"
            className={cn(styles.form__policyLink, {
              [styles["form__policyLink--light"]]: variant,
            })}
          >
            «Политикой конфиденциальности»
          </NavLink>
        </p>
      </div>

      <Modal active={modalActive} setActive={setModalActive}>
        <FormContent />
      </Modal>
    </>
  );
};

export default BriefForm;
