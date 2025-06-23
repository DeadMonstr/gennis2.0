import {Input} from "shared/ui/input";
import cls from "./targetItemsReg.module.sass";
import {Button} from "shared/ui/button";
import {API_URL, useHttp} from "shared/api/base";
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {Form} from "shared/ui/form";

import instagramIcon from "shared/assets/icons/instagram.svg";
import telegramIcon from "shared/assets/icons/telegram.svg";
import facebookIcon from "shared/assets/icons/facebook.svg";
import youtubeIcon from "shared/assets/icons/youtube.svg";

import checkIcon from "shared/assets/icons/checkIcon.svg";
import {useState} from "react";
import {useTranslation} from "react-i18next";
import {useNavigate, useParams} from "react-router";


export const TargetItemsReg = () => {
    const [check, setCheck] = useState(false);
    const {request} = useHttp();
    const icons = [telegramIcon, instagramIcon, youtubeIcon, facebookIcon];
    const {t, i18n} = useTranslation();
    const [errors, setErrors] = useState({
        name: false,
        surname: false,
        phone: false
    });

    const navigate = useNavigate()

    const {type} = useParams()


    const {register, handleSubmit} = useForm();
    const dispatch = useDispatch();

    const onClickForm = (data) => {
        const newErrors = {
            name: !data?.name,
            surname: !data?.surname,
            phone: !data?.phone
        };

        const res = {
            ...data,
            type
        }

        setErrors(newErrors);

        const hasError = Object.values(newErrors).some(Boolean);
        if (hasError) return;

        request(`${API_URL}Lead/lead_create/`, "POST", JSON.stringify(res))
            .then((res) => {
                console.log(res);
                setCheck(true);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    console.log("dsad")

    return (
        <div className={cls.wrapper}>
            {check ? (
                <div className={cls.wrapper__check}>
                    <img src={checkIcon} alt=""/>
                    <h1>Muvaffaqiyatli yuborildi!</h1>
                    <span>
            Operatorlarimiz siz bilan tez orada bog‘lanadi. Qo‘shimcha savollar bo‘lsa, bemalol murojaat qiling.
          </span>
                </div>
            ) : (
                <div className={cls.wrapper__container}>
                    <div className={cls.wrapper__title}>
                        {t("form.title")}
                        <span>{t("form.subtitle")}</span>
                    </div>

                    <Form typeSubmit extraClassname={cls.wrapper__form}>
                        {errors.name && <span className={cls.wrapper__error}>{t("form.errorName")}</span>}
                        <Input

                            titleColor={cls.wrapper__form_title}
                            title={`${t("form.formName")}`}
                            register={register}
                            name={"name"}
                            placeholder={`${t("form.formNamePlaceholder")}`}
                        />

                        {errors.surname && <span className={cls.wrapper__error}>{t("form.errorSurname")}</span>}
                        <Input

                            titleColor={cls.wrapper__form_title}
                            title={`${t("form.formSurname")}`}
                            register={register}
                            name={"surname"}
                            placeholder={`${t("form.formSurnamePlaceholder")}`}
                        />

                        {errors.phone && <span className={cls.wrapper__error}>{t("form.errorPhone")}</span>}
                        <Input

                            titleColor={cls.wrapper__form_title}
                            title={`${t("form.formPhone")}`}
                            register={register}
                            name={"phone"}
                            placeholder={`${t("form.formPhonePlaceholder")}`}
                        />


                        <div className={cls.wrapper__buttons}>
                            <Button onClick={handleSubmit(() => navigate(-1))}
                                    extraClass={cls.wrapper__buttons_cancel}>{t("form.cancel")}</Button>
                            <Button
                                type={"simple"}
                                extraClass={cls.wrapper__buttons_post}
                                onClick={handleSubmit(onClickForm)}
                            >
                                {t("form.formPost")}
                            </Button>
                        </div>
                    </Form>

                    {/*<div className={cls.wrapper__contact}>*/}
                    {/*    <div className={cls.wrapper__contact_header}>*/}
                    {/*        <h1>Bizga obuna bo'ling</h1>*/}
                    {/*        <span>Biz siz uchun qiziqarli materiallar e’lon qilamiz!</span>*/}
                    {/*    </div>*/}

                    {/*    <div className={cls.wrapper__contact_icons}>*/}
                    {/*        {icons.map((item, i) => (*/}
                    {/*            <div key={i} className={cls.wrapper__contact_icons_icon}>*/}
                    {/*                <img src={item} alt="" />*/}
                    {/*            </div>*/}
                    {/*        ))}*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            )}
        </div>
    );
};
