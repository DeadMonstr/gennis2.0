import cls from "./register.module.sass"

import Button from "shared/ui/button/button";
import bg__img from 'shared/assets/reg__bg.svg'
import Input from "../../../shared/ui/input/input";
import Textarea from "../../../shared/ui/textArea/textArea";

const Register = () => {
    return(
        <div className={cls.login}>
            <div className={cls.login__boxes}>
                <div className={cls.login__boxes__login__box}>
                    <h1 className={cls.login__boxes__box__headerTitle}>
                        Registratsiya
                    </h1>
                    <div className={cls.login__boxes__box__form}>
                        <form action="">
                                <Input placeholder={"username"}/>
                                <Input placeholder={"Ism"} type={"text"}/>
                                <Input placeholder={"Familiya"} type={"text"}/>
                                <Input placeholder={"Otasining ismi"} type={"text"}/>
                                <Input placeholder={"Kalendar"} type={"date"}/>
                                <Input placeholder={"Telefon raqami"} type={"tel"}/>
                                <Input placeholder={"Telefon raqami (ota-onasiniki)"} type={"tel"}/>
                                <Textarea placeholder={"Izoh"}/>
                                <Input placeholder={"Bu yerda select bo'lishi mumkin edi"}/>
                            <Button>Register</Button>
                        </form>
                    </div>
                </div>
                <div className={cls.login__aside}>
                    <img className={cls.login__aside__img} src={bg__img} alt=""/>
                </div>
            </div>
        </div>
    )
}
export default Register