import PropTypes from "prop-types";
import cn from "classnames";
import styles from "./button.module.css";

const Button = ({ text, onClick, color, type, disabled, className }) => {
  return (
    <button
      type={type}
      className={cn(styles.button, styles[`button__${color}`], className)}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool.isRequired,
  className: PropTypes.string,
};

Button.defaultProps = {
  text: "",
  type: "",
  color: "",
  onClick: () => {},
  className: "",
};

export default Button;
