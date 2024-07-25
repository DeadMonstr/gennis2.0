import React, {useState} from "react";
import {useNavigate} from "react-router";
import {useDispatch} from "react-redux";
import {useForm} from "react-hook-form";

import {fetchLoginUser} from "../model/loginThunk";
import {Button} from "shared/ui/button";
import {Input} from "shared/ui/input";
import {DefaultLoader} from "shared/ui/defaultLoader";
import {MiniLoader} from "shared/ui/miniLoader";
import {Alert} from "shared/ui/alert";

import cls from "./login.module.sass"
import gennisImg from "shared/assets/images/logo.svg"
import loginAside from "shared/assets/images/login-page-4468581-3783954 1.svg"
import {registerUser} from "../../register/model/registerThunk";
import {API_URL, useHttp} from "../../../shared/api/base";
import {getUserData} from "../model/loginSlice";
import {type} from "@testing-library/user-event/dist/type";

export const Login = () => {

    // const {username , password} = useSelector(state => state.loginSlice)/

    const {request} = useHttp()


    const {register, handleSubmit} = useForm()
    const [inputChange, setInputChange] = useState([])
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch()
    const [alerts, setAlerts] = useState([]);
    const navigate = useNavigate()
    const showAlert = (type, message) => {
        const newAlert = {id: Date.now(), type, message};
        setAlerts([...alerts, newAlert]);
        setTimeout(() => {
            hideAlert(newAlert.id);
        }, 5000);
    };

    const hideAlert = (id) => {
        setAlerts(alerts => alerts.map(alert =>
            alert.id === id ? {...alert, hide: true} : alert
        ));
        setTimeout(() => {
            setAlerts(alerts => alerts.filter(alert => alert.id !== id));
        }, 500);
    };

    const onClick = (e) => {

        // dispatch()

        const res = {
            username: e.username,
            password: e.password

        }

        // dispatch(fetchLoginUser(res))
        // .then((action =>{
        //     const isNav = localStorage.getItem("navigate")
        //     console.log(action)
        //     if (action.error) {
        //         console.error('Registration error:', action.error);
        //         showAlert('error', 'Login failed. Please try again.');
        //         navigate(`/login`)
        //         localStorage.removeItem("navigate")
        //     } else {
        //         sessionStorage.setItem("token", action.payload.access)
        //         showAlert('success', 'Login successful!');
        //         setLoading(false)
        //         navigate("/platform")
        //     }
        // }))
        // .catch(() =>{
        //     showAlert("error" ,"error login")
        // })


        request(`${API_URL}api/token/`, "POST", JSON.stringify(res))
            .then(res => {
                dispatch(getUserData(res))
                navigate("/platform")
                console.log(res, "res")
            })
            .catch(err => {
                showAlert("error" , "loginda hatolik")
                console.log(err)
            })


    }
    return (
        <div className={cls.container}>
            <Alert alerts={alerts} hideAlert={hideAlert}/>
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
                                {loading ? <Input onChange={(e) => setInputChange(e.target.value)} title={"Email"}
                                                  register={register} name={"username"} type="text" required/> :
                                    <Input disabled onChange={(e) => setInputChange(e.target.value)} title={"Email"}
                                           register={register} name={"username"} type="text" required/>}
                                {loading ?
                                    <Input title={"password"} register={register} name={"password"} type="password"
                                           required/> :
                                    <Input title={"password"} register={register} name={"password"} type="password"
                                           required disabled/>}
                                <Input extraClassName={cls.checkbox} type="checkbox" onChange={() => setInputChange}
                                       checkboxTitle={"Remember me"}/>
                                {/*<Button extraClass={cls.login__btn}>Login</Button>*/}
                                {loading ?
                                    <Button extraClass={cls.login__btn}>Login</Button> :
                                    <MiniLoader/>}
                                {/*{loading ? null : <DefaultLoader/>}*/}
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