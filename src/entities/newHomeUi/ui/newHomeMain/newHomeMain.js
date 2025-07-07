import cls from "./newHomeMain.module.sass"
import {HomeBtnUi} from "shared/ui/homeBtnUi/homeBtnUi";
import CountUp from "react-countup";
import student from "shared/assets/images/homePeople.png"
import {Input} from "shared/ui/input";
import {Form} from "shared/ui/form";
import {Textarea} from "shared/ui/textArea";
import robo from "shared/assets/icons/codicon_robot.svg"

export const NewHomeMain = () => {

    const number = [800, 500, 400]

    console.log(window.innerWidth)
    return (
        <div className={cls.main}>
            <div className={cls.main__left}>
                <div className={cls.main__left_title}>
                    Farzandingiz kelajagi {window.innerWidth > 1050 ? <br/>: null} uchun to‘g‘ri tanlov <br/>
                    <span>Turon Xalqaro Maktabi</span>
                </div>
                <div className={cls.main__left_desc}>
                    Dunyo standardlariga mos keladigan STEAM ta'lim dasturi bilan o'quvchilarni
                    tanqidiy fikrlashga, ijodiy harakat qilishga va o'rganilgan mavzularni amaliyotda qo'llay olishga
                    tayyorlaydi.
                </div>
                <div className={cls.main__left_link}>
                    <HomeBtnUi icon={<i className="fa-solid fa-arrow-right"/>}>O’qishga ariza topshiring </HomeBtnUi>

                    <div className={cls.main__left_link_info}>
                        Batafsil ma’lumot
                    </div>
                </div>
                <div className={`${cls.main__left_footer} ${cls.main__left_disappear}`}>
                    {number.map(item => (
                        <div className={cls.main__left_footer_number}><h1>+<CountUp start={0} end={item} duration={4}/>
                        </h1> <span>Lorem Ipsum is simply dummy text of the
                            printing and typesetting industry.</span></div>))}
                </div>
            </div>
            <div className={cls.main__right}>
                <div className={cls.main__right_header}>
                    <div className={cls.main__right_header_img}>
                        <img src={student} alt=""/>
                    </div>
                    {/*<div className={cls.main__right_header_box}>*/}
                    {/*    <div className={cls.main__right_header_box_text}>Biz*/}
                    {/*        faqatgina <br/> o'rgatmaymiz, <br/> o'rganishni <br/> ta'minlaymiz!!! <div*/}
                    {/*            className={cls.main__right_header_box_line}/></div>*/}
                    {/*</div>*/}
                </div>
                <div className={cls.main__right_form}>
                    <div className={cls.main__right_form_title}>
                        Ariza qoldirish
                    </div>
                    <Form extraClassname={cls.main__right_form_form} typeSubmit>
                     <div className={cls.main__right_wrapper}>
                         <Input extraClassName={cls.main__right_form_input} placeholder={"Full name"}/>
                         <Input extraClassName={cls.main__right_form_input} placeholder={"Telephone number"}/>
                     </div>
                        <Textarea style={{width: window.innerWidth > 1050 ? "transparent" : "100%" }}  placeholder={"Message"} extraClassName={cls.main__right_form_textarea}/>
                    </Form>
                    <HomeBtnUi type={"submit"}>Yuborish</HomeBtnUi>
                    <div className={`${cls.pulse_container} ${cls.main__right_form_robo}`}>
                        <div className={cls.pulse_ring}></div>
                        <div className={cls.pulse_ring}></div>
                        <div className={cls.pulse_ring}></div>

                        <div className={cls.icon}>
                           <img src={robo} alt=""/>
                        </div>
                    </div>

                </div>
                <div className={`${cls.main__left_footer} ${cls.main__right_disappear}`}>
                    {number.map(item => (
                        <div className={cls.main__left_footer_number}><h1>+<CountUp start={0} end={item} duration={4}/>
                        </h1> <span>Lorem Ipsum is simply dummy text of the
                            printing and typesetting industry.</span></div>))}
                </div>
            </div>

        </div>
    );
};

