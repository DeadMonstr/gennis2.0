import cls from "./schoolHomeContactUs.module.sass"
import backImg from "shared/assets/images/school.svg"
import {Button} from "../../../../shared/ui/button";
import addressImg from 'shared/assets/images/address.png'
import phoneImg from 'shared/assets/images/phone.png'
import instaImg from 'shared/assets/images/insta.png'
import telegramImg from 'shared/assets/images/telegram.png'
import teen from "shared/assets/images/teenyicons_school-outline.svg"
import akar from "shared/assets/images/akar-icons_door.svg"
import mage from "shared/assets/images/mage_light-bulb.svg"
import clarity from "shared/assets/images/clarity_group-line.svg"
import fluent from "shared/assets/images/fluent-mdl2_diet-plan-notebook.svg"
import {Form} from "../../../../shared/ui/form";
import {Input} from "../../../../shared/ui/input";
import {Textarea} from "../../../../shared/ui/textArea";
import React from "react";


export const SchoolHomeContactUs = ({job, setActiveEditItem, setActive, data, setValue}) => {

    const render = () => {
        return data.map(item => (
            <div className={cls.box}>
                <img src={item.img} alt=""/>
                <h3>{item.title}</h3>
            </div>
        ))
    }
    const myStyle = {
        backgroundImage: `url(${backImg})`
    }
    return (
        <>
            <div style={myStyle} className={cls.school}>
                <div className={cls.title}>
                    Contact us
                </div>

                <div className={cls.mainFormBox}>


                    <div className={cls.descr}>
                        {data?.map(item => (
                            <>
                                {job && <div
                                    onClick={() => {
                                        setActive("edit")
                                        setActiveEditItem(item)
                                        setValue("name", item.description)
                                    }}
                                    className={cls.mainFormBox__change}
                                >
                                    <i className="fas fa-edit"/>
                                </div>
                                }

                                {item?.description}
                            </>
                        ))}
                    </div>


                    <div className={cls.mainRightBox}>
                        <div className={cls.formBox}>
                            <h1>Send message</h1>
                            <Form typeSubmit="" extraClassname={cls.form}>
                                <Input extraClassName={cls.inputMsg} placeholder={"Full name"}/>
                                <Input extraClassName={cls.inputMsg} type={"number"} placeholder={"Phone"}/>
                                <Textarea extraClassName={cls.inputMsg} placeholder={"Type your message"}/>
                                <Button children="Yuborish" extraClass={cls.submitBtn}/>
                            </Form>
                        </div>

                    </div>
                </div>
            </div>

        </>
    );
};

