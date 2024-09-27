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

const data = [
    {title: "Maktab", img: teen},
    {title: "Qabul qilishlari", img: akar},
    {title: "MAKTAB MISSIYASI VA VIZIYON", img: mage},
    {title: "Bizning jamoat", img: clarity},
    {title: "O'QUV REJASI", img: fluent},
]

export const SchoolHomeContactUs = () => {

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
                <div className={cls.descr}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid, commodi culpa deleniti
                    dignissimos distinctio dolorem ea et eum fuga illum iure labore molestiae, non nostrum nulla
                    obcaecati perferendis perspiciatis porro provident quia saepe voluptatem. Alias, autem debitis
                    dolore eius esse expedita explicabo impedit inventore itaque magni maiores nobis perferendis quas
                    quod quos reprehenderit tenetur! Autem, beatae, expedita itaque laboriosam necessitatibus nostrum
                    officia officiis omnis sit soluta ullam velit voluptatum.
                </div>
                <div className={cls.mainFormBox}>
                    <div className={cls.mainLeftBox}>
                        <div className={cls.arounderBox}>
                            <div className={cls.iconBox}>
                                <img className={cls.icon} src={addressImg} alt=""/>
                            </div>
                            <div className={cls.iconDescr}>
                                <h1>Address</h1>
                                <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci cupiditate inventore officiis.</h3>
                            </div>
                        </div>
                        <div className={cls.arounderBox}>
                            <div className={cls.iconBox}>
                                <img className={cls.icon} src={phoneImg} alt=""/>
                            </div>
                            <div className={cls.iconDescr}>
                                <h1>Address</h1>
                                <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci cupiditate inventore officiis.</h3>
                            </div>
                        </div>
                        <div className={cls.arounderBox}>
                            <div className={cls.iconBox}>
                                <img className={cls.icon} src={instaImg} alt=""/>
                            </div>
                            <div className={cls.iconDescr}>
                                <h1>Address</h1>
                                <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci cupiditate inventore officiis.</h3>
                            </div>
                        </div>
                        <div className={cls.arounderBox}>
                            <div className={cls.iconBox}>
                                <img className={cls.icon} src={telegramImg} alt=""/>
                            </div>
                            <div className={cls.iconDescr}>
                                <h1>Address</h1>
                                <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci cupiditate inventore officiis.</h3>
                            </div>
                        </div>
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

