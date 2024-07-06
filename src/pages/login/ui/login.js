import cls from "./login.module.sass"
import gennisImg from "shared/assets/images/logo.svg"
import loginAside from "shared/assets/images/login-page-4468581-3783954 1.svg"
import Button from "../../../shared/ui/button/button";
import {Input} from "shared/ui/input";
import {useState} from "react";
import DefaultLoader from "../../../shared/ui/defaultLoader/defaultLoader";

const Login = () => {
    const [inputChange, setInputChange] = useState([])
    const [loading , setLoading] = useState(true)

    const onClick = (e) => {
        e.preventDefault()
        setLoading(false)
    }
    return (
        <div className={cls.container}>
            <div className={cls.login__logo}>
                <img src={gennisImg} alt=""/>
            </div>
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
                            <form>
                                <Input title={"Email"} onChange={() => setInputChange} type="text" required/>
                                <Input title={"password"} onChange={() => setInputChange} type="password" required/>
                                <Input extraClassName={cls.checkbox} type="checkbox" onChange={() => setInputChange} checkboxTitle={"Remember me"}/>
                                <Button extraClass={ cls.login__btn} onClick={onClick}>Login</Button>
                                {loading && loading ?   null : <DefaultLoader/>}
                            </form>
                        </div>
                    </div>
                    <div className={cls.login__aside}>
                        <img src={loginAside} alt=""/>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Login