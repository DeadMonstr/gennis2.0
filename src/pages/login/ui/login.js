import cls from "./login.module.sass"
import gennisImg from "shared/assets/ghcvb 1.svg"
import loginAside from "shared/assets/login-page-4468581-3783954 1.svg"
import Button from "../../../shared/ui/button/button";
import Input from "shared/ui/input/input";
import {useState} from "react";

const Login = () => {
    const [inputChange, setInputChange] = useState([])


    const onClick = (e) => {
        e.preventDefault()
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
                                <Input title={"Email"} onChange={() => setInputChange} type="text"/>
                                <Input title={"password"} onChange={() => setInputChange} type="password"/>
                                <Input type="checkbox" onChange={() => setInputChange} checkboxTitle={"Remember me"}/>
                                <Button onClick={onClick}>Register</Button>
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