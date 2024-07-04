import classNames from "classnames";
import star from "shared/assets/icons/Star.svg"
import checked from "shared/assets/icons/Checked.svg"
import close from "shared/assets/icons/close.svg"

import cls from "./button.module.sass"

const Button = ({children, onClick, type, disabled, status}) => {
    return (
        <button onClick={onClick} className={classNames(cls.btn, cls[type], {
            [cls.simple]: type === "simple",
            [cls.success]: type === "success",
            [cls.danger]: type === "danger",
            [cls.warning]: type === "warning",
            [cls.disabled]: type === "disabled",
            [cls.star]: type === "star",
        })}
                disabled={disabled}
        >
            {type === "star" ? <img src={star} alt=""/> : children}
            {status === "checked" ? <img src={checked} alt=""/> : null}
            {status === "false" ? <img src={close} alt=""/> : null}
        </button>
    )
}
export default Button