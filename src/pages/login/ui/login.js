import cls from "./login.module.sass"
import gennisImg from "shared/assets/images/logo.svg"
import loginAside from "shared/assets/images/login-page-4468581-3783954 1.svg"
import Button from "../../../shared/ui/button/button";
import {Input} from "shared/ui/input";
import {useState} from "react";
import DefaultLoader from "../../../shared/ui/defaultLoader/defaultLoader";
import MiniLoader from "../../../shared/ui/miniLoader/miniLoader";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";

export const Login = () => {

    // const {username , password} = useSelector(state => state.loginSlice)


    const {register ,handleSubmit} = useForm()
    const [inputChange, setInputChange] = useState([])
    const [loading, setLoading] = useState(true)


    const dispatch = useDispatch()

    const onClick = (e) => {
        // dispatch()
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
                            <form onSubmit={handleSubmit(onClick)}>
                                <Input title={"Email"} register={register} name={"username"} type="text" required/>
                                <Input title={"password"} register={register} name={"password"} type="password" required/>
                                <Input extraClassName={cls.checkbox} type="checkbox" onChange={() => setInputChange}
                                       checkboxTitle={"Remember me"}/>
                                {loading && loading ?
                                    <Button extraClass={cls.login__btn}>Login</Button> :
                                    <MiniLoader/>}
                                {loading && loading ? null : <DefaultLoader/>}
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