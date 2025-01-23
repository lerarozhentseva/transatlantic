export const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = "введите имя";
  }

  if (!values.tel) {
    errors.tel = "заполните поле";
  }
  return errors;
};
