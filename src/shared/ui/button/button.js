import cls from "./button.module.sass"

const Button = ({children , onClick}) => {
  return(
      <div onClick={onClick} className={`${cls.button}`}>
          {children}
      </div>
  )
}
export default Button