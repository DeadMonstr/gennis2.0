import cls from "./login.module.sass"
import gennisImg from "shared/assets/ghcvb 1.svg"
import loginAside from "shared/assets/login-page-4468581-3783954 1.svg"
import Button from "../../../shared/ui/button/button";

const Login = () => {
  return(
      <div className={cls.login}>
          <div className={cls.login__boxes}>
              <div className={cls.login__box}>
                  <div className={cls.box__header_img}>
                      <img src={gennisImg} alt=""/>
                  </div>
                  <h1 className={cls.box__header_title}>
                      login
                  </h1>
                  <div className={cls.box__form}>
                      <form action="">
                          <div>
                              <label htmlFor="">Email</label>
                              <input type="text"/>
                          </div>
                          <div>
                              <label htmlFor="">password</label>
                              <input type="text"/>
                          </div>
                          <span className="checkbox">
                              <input type="checkbox"/>
                              <label htmlFor="">Remember me</label>
                          </span>

                          <Button>Register</Button>
                      </form>
                  </div>
              </div>
              <div className={cls.login__aside}>
                  <img src={loginAside} alt=""/>
              </div>
          </div>
      </div>
  )
}
export default Login