import classNames from "classnames";
import styles from "./button.module.scss";

const Button = ({
  children,
  disabled = false,
  fullWidth = false,
  size = "medium",
  variant = "contained",
}) => {
  return (
    <buttton
      disabled={disabled}
      className={classNames(styles.btn, {
        [styles.btnFullWidth]: fullWidth,
        [styles.btnSmall]: size === "small",
        [styles.btnMedium]: size === "medium",
        [styles.btnLarge]: size === "large",
        [styles.btnOutlined]: variant === "outlined",
        [styles.btnText]: variant === "text",
      })}
    >
      {children}
    </buttton>
  );
};

export default Button;  