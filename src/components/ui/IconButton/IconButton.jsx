import PropTypes from "prop-types";
import styles from "./icon-button.module.css";

const IconButton = ({ children, className, onClick }) => {
  return (
    <button className={`${styles.iconButton} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

IconButton.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

IconButton.defaultProps = {
  className: "",
  onClick: () => {},
};

export default IconButton;
