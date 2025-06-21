import {Input} from "shared/ui/input";
import cls from "entities/targetItems/ui/targetForm/targetItemsReg.module.sass"
import {Button} from "shared/ui/button";
import {API_URL, useHttp} from "shared/api/base";
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {Form} from "shared/ui/form";

import instagramIcon from "shared/assets/icons/instagram.svg"
import telegramIcon from "shared/assets/icons/telegram.svg"
import facebookIcon from "shared/assets/icons/facebook.svg"
import youtubeIcon from "shared/assets/icons/youtube.svg"


export const TargetItemsReg = () => {


    const {request} = useHttp()

    const icons = [
        telegramIcon,
        instagramIcon,
        youtubeIcon,
        facebookIcon,

    ]


    const {register, handleSubmit} = useForm()

    const dispatch = useDispatch()

    const onClickForm = (data) => {
        console.log(data)

        request(`${API_URL}Lead/lead_create/`, "POST", JSON.stringify(data))
            .then(res => {
                console.log(res)

            })

    }


    return (
        <div className={cls.wrapper}>
            <div>
                <div className={cls.wrapper__title}>
                    Ariza yuborish
                    <span>Bugunoq biz bilan bog‘laning! </span>
                </div>


                <Form typeSubmit>
                    <Input register={register} name={"name"} placeholder={"Ismingizni kiriting"}/>
                    <Input register={register} name={"surname"} placeholder={"Familiyangizni kiriting"}/>
                    <Input type={"number"} register={register} name={"phone"}
                           placeholder={"Telefon raqamingizni kiriting"}/>

                    <div className={cls.wrapper__buttons}>
                        <Button extraClass={cls.wrapper__buttons_cancel}>Bekor etish</Button>
                        <Button type={"simple"} extraClass={cls.wrapper__buttons_post}
                                onClick={handleSubmit(onClickForm)}>Arizani yuborish</Button>
                    </div>
                </Form>
                <div className={cls.wrapper__contact}>

                    <div className={cls.wrapper__contact_header}>
                        <h1>
                            Bizga obuna bo'ling
                        </h1>
                        <span>
                            Biz siz uchun qiziqarli materiallar e’lon qilamiz!
                        </span>
                    </div>

                    <div className={cls.wrapper__contact_icons}>
                        {icons.map(item => (
                            <div className={cls.wrapper__contact_icons_icon}>
                                <img src={item} alt=""/>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};


