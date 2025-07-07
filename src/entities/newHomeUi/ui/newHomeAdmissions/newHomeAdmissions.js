import cls from "./newHomeAdmissions.module.sass"
import {HomeBtnUi} from "shared/ui/homeBtnUi/homeBtnUi";
import {Form} from "shared/ui/form";
import {Input} from "shared/ui/input";
import {Modal} from "shared/ui/modal";
import {useState} from "react";

export const NewHomeAdmissions = () => {

    const [active , setActive] = useState(false)


    return (
        <div className={cls.admission}>
            <div className={cls.admission__title}>
                Sizga kerakli bo‘limlar shu yerda.
                <div className={cls.admission__title_span}>
                    Eng ko‘p tashrif buyuriladigan sahifalarga to‘g‘ridan-to‘g‘ri kirish havolalari.
                </div>
            </div>

            <div className={cls.admission__wrapper}>
                <div className={cls.admission__wrapper_box}>
                    <div className={cls.admission__wrapper_box_main}>
                        <div className={cls.admission__wrapper_box_title}>
                            📥 Qabul (Admissions)
                            <div className={cls.admission__wrapper_box_title_span}>
                                Maktabga qabul bo‘yicha to‘liq ma’lumot oling
                            </div>
                        </div>
                        <ol className={cls.admission__wrapper_box_list}>
                            <li>1. Ariza topshirish</li>
                            <li>2. Test/suhbat</li>
                            <li>3. Natijalar</li>
                            <li>4. Hujjatlar qabul qilish</li>
                        </ol>

                    </div>
                    <HomeBtnUi extraClass={cls.admission__wrapper_box_btn}  children={"Qabul qilish tartibi"} type={"contact"}/>
                </div>

                <div className={cls.admission__wrapper_contact}>
                    <div className={cls.admission__wrapper_contact_main}>
                        <div className={cls.admission__wrapper_contact_title}>
                            Bog‘lanish (Contact)
                            <div className={cls.admission__wrapper_contact_title_span}>
                                Savollar bo‘lsa, bemalol murojaat qiling.
                            </div>
                        </div>
                        <ol className={cls.admission__wrapper_contact_list}>
                            <li>1. Telefon raqami: <span className={cls.admission__wrapper_contact_list_span}>+998 94 310 33 33</span></li>
                            <li>2. Elektron pochta:  <span className={cls.admission__wrapper_contact_list_span}>info@.uz</span></li>
                            <li>3. Instagram:  <span className={cls.admission__wrapper_contact_list_span}>@turon_international_school</span> </li>
                            <li>4. Telegram:  <span className={cls.admission__wrapper_contact_list_span}>@turon_international_school</span></li>
                        </ol>

                    </div>
                    <HomeBtnUi onClick={() => setActive(!active)} extraClass={cls.admission__wrapper_contact_btn} children={"Ariza qoldirish"} type={"contact"}/>
                </div>

                <div className={cls.admission__wrapper_form}>
                    <div className={cls.admission__wrapper_form_title}>
                        Murojaat
                        <div className={cls.admission__wrapper_form_title_span}>
                            Taklif yoki savollaringizni bizga yuboring
                        </div>
                    </div>
                    <Form typeSubmit>
                        <Input extraClassName={cls.admission__wrapper_form_input} placeholder={"Ism"}/>
                        <Input extraClassName={cls.admission__wrapper_form_input} placeholder={"Elektron pochta"}/>
                        <Input extraClassName={cls.admission__wrapper_form_input} placeholder={"Murojaat mavzusi"}/>
                        <Input extraClassName={cls.admission__wrapper_form_input} placeholder={"Xabar matni"}/>

                    </Form>
                    <HomeBtnUi children={"Yuborish"} type={"contact"}/>

                </div>
            </div>

            <Modal extraClass={cls.modal} typeIcon active={active} setActive={setActive}>
                <h2>Ariza qoldrish</h2>
                <Form typeSubmit>
                    <Input extraClassName={cls.modal__input} placeholder={"Ism"}/>
                    <Input extraClassName={cls.modal__input} placeholder={"Familiya"}/>
                    <Input extraClassName={cls.modal__input} placeholder={"Telefon raqami"} type={"number"}/>
                    <HomeBtnUi type={"contact"} extraClass={cls.modal__btn} children={"Yuborish"}/>
                </Form>

            </Modal>

        </div>
    );
};

